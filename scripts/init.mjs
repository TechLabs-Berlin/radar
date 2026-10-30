// Sets this Radar up for your own location: `npm run init -- <code>`.
// It renames content-<current>/ to content-<code>/, sets LOCATION in
// radar.config.ts and copies the current badge to public/icon-<code>.png
// as a placeholder for your own badge.
import {
  copyFileSync,
  existsSync,
  readFileSync,
  renameSync,
  writeFileSync,
} from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const LOCATION_LINE = /^export const LOCATION = '([a-z0-9]+)'$/m

export function validateCode(code) {
  if (!code) {
    return 'Missing location code. Usage: npm run init -- <code>, for example npm run init -- ber'
  }
  if (!/^[a-z][a-z0-9]{1,15}$/.test(code)) {
    return `"${code}" is not a valid location code. Use 2 to 16 lowercase letters or digits, starting with a letter.`
  }
  return null
}

export function readLocation(configSource) {
  const match = configSource.match(LOCATION_LINE)
  if (!match) {
    throw new Error(
      "Could not find `export const LOCATION = '...'` in radar.config.ts"
    )
  }
  return match[1]
}

export function setLocation(configSource, code) {
  return configSource.replace(
    LOCATION_LINE,
    `export const LOCATION = '${code}'`
  )
}

function fail(message) {
  console.error(`npm run init: ${message}`)
  process.exit(1)
}

function main(code) {
  const problem = validateCode(code)
  if (problem) fail(problem)

  const configPath = join(root, 'radar.config.ts')
  const configSource = readFileSync(configPath, 'utf8')
  const current = readLocation(configSource)
  if (current === code) fail(`the Radar is already set up for "${code}".`)

  const from = join(root, `content-${current}`)
  const to = join(root, `content-${code}`)
  const currentBadge = join(root, 'public', `icon-${current}.png`)
  const badge = join(root, 'public', `icon-${code}.png`)
  if (!existsSync(from))
    fail(`expected the folder content-${current}/ but it does not exist.`)
  if (existsSync(to))
    fail(`content-${code}/ already exists. Move it out of the way first.`)

  renameSync(from, to)
  writeFileSync(configPath, setLocation(configSource, code))
  if (!existsSync(badge) && existsSync(currentBadge))
    copyFileSync(currentBadge, badge)

  console.log(`Set up the Radar for "${code}":`)
  console.log(`  - content-${current}/ is now content-${code}/`)
  console.log(`  - LOCATION is now '${code}' in radar.config.ts`)
  console.log(
    `  - public/icon-${code}.png is a copy of the ${current} badge, replace it with yours`
  )
  console.log('Next: npm run dev, then edit the files in content-' + code + '/')
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main(process.argv[2])
}
