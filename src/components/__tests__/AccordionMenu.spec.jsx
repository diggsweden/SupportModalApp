// SPDX-FileCopyrightText: 2023 Digg - Agency for Digital Government
//
// SPDX-License-Identifier: MIT

import { shallowMount } from '@vue/test-utils'
import { it, expect } from 'vitest'
import AccordionMenu from '@/components/modal/AccordionMenu.vue'
const items = [
  { id: 'Item 1'},
  { id: 'Item 2'},
  { id: 'Item 3'}
]

it('filters items array correctly in items computed property', () => {
  // Setup
  const wrapper = shallowMount(AccordionMenu, {
    propsData: { items }
  })
  
  // Test
  expect(Object.keys(wrapper.vm.items).length).toEqual(3)
})

it('emits itemClick event with correct data in handleItemClick()', () => {
  // Setup
  const wrapper = shallowMount(AccordionMenu, {
    propsData: { items }
  })
  // Test
  wrapper.vm.handleItemClick(items[0])
  expect(wrapper.emitted().itemClick[0]).toEqual([items[0]])
})
