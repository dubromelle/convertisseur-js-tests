import { expect, test } from 'vitest'
import { celsiusToFahrenheit } from './convertir'

test('0°C doit donner 32°F', () => {
  expect(celsiusToFahrenheit(0)).toBe(32)
})

test('100°C doit donner 212°F', () => {
  expect(celsiusToFahrenheit(100)).toBe(212)
})
