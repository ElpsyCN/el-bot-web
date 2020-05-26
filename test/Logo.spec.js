//
import { mount } from '@vue/test-utils'
import BotLogo from '@/components/BotLogo.vue'

describe('BotLogo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(BotLogo)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
