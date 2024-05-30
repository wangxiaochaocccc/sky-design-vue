import { describe,test,expect } from 'vitest';
import { mount } from '@vue/test-utils'
import Button from './Button.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Icon from '../icon/icon.vue'

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

  test('icon', () => { 
    const wrapper = mount(Button, {
      props: {
        icon:'arrow-up',
      },
      slots: {
        default: 'icon',
      },
      global: {
        stubs: ['FontAwesomeIcon']
      }
    })
    console.log(wrapper.html())

    const element = wrapper.findComponent(FontAwesomeIcon)
    expect(element.exists()).toBe(true)
    expect(element.attributes('icon')).toBe('arrow-up')
  })

  test('loading', () => { 
    const wrapper = mount(Button, {
      props: {
        loading:true,
      },
      slots: {
        default: 'icon',
      },
      global: {
        stubs: ['Icon']
      }
    })
    console.log(wrapper.html())

    const element = wrapper.findComponent(Icon)
    expect(element.exists()).toBe(true)
    expect(element.attributes('icon')).toBe('spinner')
    expect(wrapper.attributes('disabled')).toBeDefined()
  })
})
