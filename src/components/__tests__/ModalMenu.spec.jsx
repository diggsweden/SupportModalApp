import { shallowMount } from '@vue/test-utils'
import { it, expect } from 'vitest'
import ModalMenuContainer from '@/components/modal/ModalMenuContainer.vue'
import assert from 'assert'

it('modifies items array correctly in mounted()', () => {
  // Setup
  const wrapper = shallowMount(ModalMenuContainer)
  // Test
  // Add assertions here
  //Test if the array is not empty after mounted
  assert.notEqual(wrapper.vm.items.length, 0)
  assert.equal(wrapper.vm.items[0].name, 'Öppna Chatten')
  assert.equal(wrapper.vm.items[0].nameEn, 'OpenChat')
})

it('emits childToParent event with correct data in closeModal()', () => {
  // Setup
  const wrapper = shallowMount(ModalMenuContainer)
  // Test if the event is emitted with the correct data when closeModal is called
  wrapper.vm.closeModal()
  expect(wrapper.emitted().childToParent[0]).toEqual([{ PostMessageEventName: 'closeModal' }])
})

it('emits childToParent event with correct data in sendDataToParent()', () => {
  // Setup
  const wrapper = shallowMount(ModalMenuContainer)
  // Test if the event is emitted with the correct data when sendDataToParent is called
  wrapper.vm.sendDataToParent('test')
  expect(wrapper.emitted().childToParent[0]).toEqual(['test'])
})
