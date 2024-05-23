import { expect, test,describe,vi} from 'vitest'
import { testFn } from './utils'

test('test', () => {
  expect(1 + 1).toBe(2)
  expect(1).toBeTruthy()
  expect(0).toBeFalsy()
  expect({ name: '张三' }).toEqual({ name: '张三' })
})

describe('test functions', () => { 
  test('回调函数', () => {
    const callback = vi.fn()
    testFn(12, callback)
    expect(callback).toHaveBeenCalled()
    expect(callback).toHaveBeenCalledWith(12)
  })

  test('对象内方法', () => {
    const obj = {
      getName() {
        return '张三'
      }
    }
    const spy = vi.spyOn(obj, 'getName')
    obj.getName()
    expect(spy).toHaveBeenCalledTimes(1)
  })
})