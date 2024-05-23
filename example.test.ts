import { expect, test } from 'vitest'

test('test', () => {
  expect(1 + 1).toBe(2)
  expect(1).toBeTruthy()
  expect(0).toBeFalsy()
  expect({ name: '张三' }).toEqual({ name: '张三' })
})