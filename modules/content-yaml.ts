import { parse } from 'yaml'
import { defineNuxtModule } from '@nuxt/kit'

type Property = { type?: string }
type Schema = {
  $ref: string
  definitions: Record<
    string,
    { required?: string[]; properties?: Record<string, Property> }
  >
}

const typeOf = (value: unknown) =>
  Array.isArray(value) ? 'array' : value === null ? 'null' : typeof value

/**
 * Prepares the YAML content files for Nuxt Content and makes the build fail
 * when a file is broken, instead of silently dropping the event or page.
 */
export default defineNuxtModule({
  meta: { name: 'content-yaml' },
  setup(_options, nuxt) {
    const errors: string[] = []

    // Nuxt Content only logs errors thrown while parsing and then ignores the
    // file, so collect them and fail the build (but not the dev server) later.
    nuxt.hook('build:before', () => {
      if (!nuxt.options.dev && errors.length) {
        throw new Error(
          `Fix the content files before building:\n- ${errors.join('\n- ')}`
        )
      }
    })

    nuxt.hook('content:file:beforeParse', ({ file, collection }) => {
      if (file.extension !== '.yaml' && file.extension !== '.yml') return

      // The files start with a `---` document marker (possibly after some
      // comments). Nuxt Content would read that as unterminated frontmatter and
      // ignore the whole file, so drop it.
      file.body = file.body.replace(
        /^((?:[ \t]*(?:#.*)?\r?\n)*)---[ \t]*\r?\n/,
        '$1'
      )

      const fail = (message: string) => {
        const error = `Invalid content in ${file.path}: ${message}`
        errors.push(error)
        throw new Error(error)
      }

      let data: unknown
      try {
        data = parse(file.body)
      } catch (error) {
        return fail(`not valid YAML. ${(error as Error).message}`)
      }
      if (typeof data !== 'object' || data === null || Array.isArray(data)) {
        return fail('expected a list of `key: value` properties')
      }

      // Nuxt Content only warns about (or silently fixes up) content that does
      // not match the schema in content.config.ts, so check it here.
      const schema = collection.schema as unknown as Schema
      const definition = schema.definitions?.[schema.$ref.split('/').pop()!]
      const record = data as Record<string, unknown>
      for (const key of definition?.required ?? []) {
        if (record[key] === undefined || record[key] === null) {
          fail(`missing required property \`${key}\``)
        }
      }
      for (const [key, { type }] of Object.entries(
        definition?.properties ?? {}
      )) {
        const value = record[key]
        if (value === undefined || value === null || !type) continue
        const expected = type === 'integer' ? 'number' : type
        if (typeOf(value) !== expected && expected !== 'object') {
          fail(`\`${key}\` should be a ${type}, but is a ${typeOf(value)}`)
        }
      }
    })
  },
})
