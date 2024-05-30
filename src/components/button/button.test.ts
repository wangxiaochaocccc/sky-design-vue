import { describe,test,expect } from 'vitest';
import { mount } from '@vue/test-utils'
import Button from './Button.vue';

describe('Button.vue', () => { 
  test('button', () => {
    const wrapper = mount(Button, {
      props: {
        type:'primary',
      },
      slots: {
        default: 'button',
      }
    })
    console.log(wrapper.html())
    // test className
    expect(wrapper.classes()).toContain('sky-button--primary')
    // test solts
    expect(wrapper.get('button').text()).toBe('button')
    // test events
    wrapper.get('button').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('click')
  })

  test('disabled', () => {
    const wrapper = mount(Button, {
      props: {
        disabled:true,
      },
      slots: {
        default: 'button',
      }
    })
    // test disabled
    expect(wrapper.get('button').element.disabled).toBeDefined()
    expect(wrapper.attributes('disabled')).toBeDefined()
    // test events 
    wrapper.get('button').trigger('click')
    expect(wrapper.emitted()).not.toHaveProperty('clcik')
  })
})
