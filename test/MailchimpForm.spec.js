import { afterEach, describe, expect, test, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import MailchimpForm from '@/components/MailchimpForm.vue'

const SIGN_UP_URL = 'https://signup.example.com/add-to-list'

describe('MailchimpForm', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  test('renders the sign-up form', () => {
    const wrapper = mount(MailchimpForm, { props: { signUpUrl: SIGN_UP_URL } })

    expect(wrapper.find('form').exists()).toBe(true)
    expect(wrapper.find('input[type="email"]').exists()).toBe(true)
  })

  test('posts the entered details to the configured sign-up URL', async () => {
    const fetch = vi.fn(async () => ({}))
    vi.stubGlobal('$fetch', fetch)
    const wrapper = mount(MailchimpForm, { props: { signUpUrl: SIGN_UP_URL } })

    await wrapper.find('input[type="text"]').setValue('Ada')
    await wrapper.find('input[type="email"]').setValue('ada@example.com')
    await wrapper.find('button').trigger('click')
    await vi.waitFor(() => expect(fetch).toHaveBeenCalled())

    expect(fetch).toHaveBeenCalledWith(SIGN_UP_URL, {
      method: 'POST',
      body: { email: 'ada@example.com', name: 'Ada' },
    })
  })

  test('emits success when the sign-up goes through', async () => {
    vi.stubGlobal(
      '$fetch',
      vi.fn(async () => ({}))
    )
    const wrapper = mount(MailchimpForm, { props: { signUpUrl: SIGN_UP_URL } })

    await wrapper.find('button').trigger('click')
    await vi.waitFor(() => expect(wrapper.emitted('success')).toBeTruthy())
  })

  test('emits failure when the sign-up fails', async () => {
    vi.spyOn(console, 'error').mockImplementation(() => {})
    vi.stubGlobal(
      '$fetch',
      vi.fn(async () => {
        throw new Error('down')
      })
    )
    const wrapper = mount(MailchimpForm, { props: { signUpUrl: SIGN_UP_URL } })

    await wrapper.find('button').trigger('click')
    await vi.waitFor(() => expect(wrapper.emitted('failure')).toBeTruthy())
  })
})
