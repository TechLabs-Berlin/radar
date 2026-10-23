import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import Logo from '@/components/Logo.vue'

describe('Logo', () => {
  test('renders an svg', () => {
    const wrapper = mount(Logo)
    expect(wrapper.find('svg').exists()).toBe(true)
  })
})
