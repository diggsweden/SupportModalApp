import { shallowMount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import ModalMenuContainer from '@/components/modal/ModalMenuContainer.vue'

//Test not working yet
describe('ModalMenuContainer.vue', () => {
  it('emits postMessage event when postMessage method is called', () => {
    const wrapper = shallowMount(ModalMenuContainer)

    wrapper.vm.postMessage()

    expect(wrapper.emitted()).toHaveProperty('postMessage')
  })

  it('toggles isOpen when title is clicked', async () => {
    const wrapper = shallowMount(ModalMenuContainer)

    expect(wrapper.vm.isOpen).toBe(true)

    await wrapper.find('.title').trigger('click')

    expect(wrapper.vm.isOpen).toBe(false)
  })
})
