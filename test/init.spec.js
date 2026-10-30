import { describe, expect, test } from 'vitest'
import { readLocation, setLocation, validateCode } from '../scripts/init.mjs'

describe('init script', () => {
  test('accepts short lowercase location codes', () => {
    expect(validateCode('ber')).toBeNull()
    expect(validateCode('bln2')).toBeNull()
  })

  test('rejects missing and malformed location codes', () => {
    expect(validateCode(undefined)).toMatch(/Missing location code/)
    expect(validateCode('B')).toMatch(/not a valid location code/)
    expect(validateCode('1abc')).toMatch(/not a valid location code/)
    expect(validateCode('my-radar')).toMatch(/not a valid location code/)
    expect(validateCode('a'.repeat(17))).toMatch(/not a valid location code/)
  })

  test('reads and replaces LOCATION in radar.config.ts', () => {
    const source = "// comment\nexport const LOCATION = 'bln'\n"
    expect(readLocation(source)).toBe('bln')
    expect(setLocation(source, 'ber')).toBe(
      "// comment\nexport const LOCATION = 'ber'\n"
    )
  })

  test('throws when LOCATION is missing', () => {
    expect(() => readLocation('export const OTHER = 1')).toThrow(/LOCATION/)
  })
})
