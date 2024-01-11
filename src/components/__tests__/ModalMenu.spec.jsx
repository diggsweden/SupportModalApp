// SPDX-FileCopyrightText: 2023 Digg - Agency for Digital Government
//
// SPDX-License-Identifier: MIT

import { shallowMount } from '@vue/test-utils'
import { it, expect, describe } from 'vitest'
import ModalMenuContainer from '@/components/modal/ModalMenuContainer.vue'
import assert from 'assert'

const getWrapper = () => {
  return shallowMount(ModalMenuContainer, {
    propsData: {
      config: {
        features: {
          support: {
            openChat: true
          }
        }
      }
    },
  })
}

describe('ModalMenuContainer.vue', () => {
  it('modifies items array correctly in mounted()', () => {
    // Setup
    const wrapper = getWrapper()
    // Test
    // Add assertions here
    //Test if the array is not empty after mounted
    assert.notEqual(wrapper.vm.items.length, 0)
    assert.equal(wrapper.vm.items[0].id, 'openChat')
  })

  it('emits sendMessage event with correct data in closeModal()', () => {
    // Setup
    const wrapper = getWrapper()
    // Test if the event is emitted with the correct data when closeModal is called
    wrapper.vm.closeModal()
    expect(wrapper.emitted().sendMessage[0]).toEqual([{ action: 'closeModal' }])
  })

  it('emits sendMessage event with correct data in sendDataToParent()', () => {
    // Setup
    const wrapper = getWrapper()
    // Test if the event is emitted with the correct data when sendDataToParent is called
    wrapper.vm.sendDataToParent('test')
    expect(wrapper.emitted().sendMessage[0]).toEqual(['test'])
  })
})
