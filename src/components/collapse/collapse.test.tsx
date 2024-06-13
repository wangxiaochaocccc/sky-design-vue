import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import CollapseItem from './collapse-item.vue'
import Collapse from './collapse.vue'

describe('collapse.vue', () => {
  test('collapse',async () => {
    const wrapper = mount( () => 
      <Collapse modelValue={['a']} >
        <CollapseItem name="a" title="title a">
          content a
        </CollapseItem>
        <CollapseItem name="b" title="title b">
          content b
        </CollapseItem>
        <CollapseItem name="c" title="title c" disabled>
          content c
        </CollapseItem>
      </Collapse>
    , {
      global: {
        stubs: ['Icon']
      },
      attachTo: document.body
      })
    // 获取元素
    const headers = wrapper.findAll('.collapse-item__title')
    const content = wrapper.findAll('.collapse-item__wrapper')


    // 长度
    expect(headers.length).toBe(3)
    expect(content.length).toBe(3)

    // 文本
    const header = headers[0]
    expect(header.text()).toBe('title a')

    // 内容
    const firstContent = content[0]
    const secondContent = content[1]
    expect(firstContent.isVisible()).toBeTruthy()
    expect(secondContent.isVisible()).toBeFalsy()
    expect(firstContent.text()).toBe('content a')
    
    // 行为
    await header.trigger('click')
    console.log(firstContent.html())
    expect(firstContent.isVisible()).toBeFalsy()
  })
})