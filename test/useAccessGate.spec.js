import { describe, expect, test } from 'vitest'
import { hashPassword } from '@/composables/useAccessGate.js'

describe('hashPassword', () => {
  // must match the hash that nuxt.config.ts computes with node:crypto
  test('returns the hex encoded SHA-256 of the password', async () => {
    expect(await hashPassword('radar-test')).toBe(
      'a63cf709a0271672977d49574d73f32c19b20a52c86501bf2824fd4ac1cb7597'
    )
  })

  test('differs for a different password', async () => {
    expect(await hashPassword('Radar-test')).not.toBe(
      await hashPassword('radar-test')
    )
  })
})
