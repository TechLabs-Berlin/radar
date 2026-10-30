import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import DemoNotice from '@/components/DemoNotice.vue'

describe('DemoNotice', () => {
  test('shows the text as a note', () => {
    const wrapper = mount(DemoNotice, {
      props: { text: 'This is a mock semester.' },
    })

    const note = wrapper.find('[role="note"]')
    expect(note.exists()).toBe(true)
    expect(note.text()).toBe('This is a mock semester.')
  })

  test('renders nothing when there is no text', () => {
    const wrapper = mount(DemoNotice, { props: { text: '' } })

    expect(wrapper.find('[role="note"]').exists()).toBe(false)
    expect(wrapper.html()).toBe('<!--v-if-->')
  })
})
