import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'
import { describe, it, expect } from 'vitest'
import PostMessageService from '@/services/PostMessageService.js'

describe('App.vue', () => {
  it('mounts PostMessageService', () => {
    const wrapper = shallowMount(App)
    // Check if PostMessageService is mounted
    const postMessageService = wrapper.findComponent(PostMessageService)
    expect(postMessageService.exists())
  })
})
