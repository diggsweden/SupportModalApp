import { shallowMount } from '@vue/test-utils'
import { it, expect } from 'vitest'
import AccordianMenu from '@/components/modal/AccordianMenu.vue'

it('filters items array correctly in plainItems computed property', () => {
  // Setup
  const items = [
    { name: 'Item 1', show: true },
    { name: 'Item 2', show: false },
    { name: 'Item 3', show: true }
  ]
  const wrapper = shallowMount(AccordianMenu, {
    propsData: { items }
  })
  // Test
  expect(wrapper.vm.plainItems).toEqual([
    { name: 'Item 1', show: true },
    { name: 'Item 3', show: true }
  ])
})

it('emits itemClick event with correct data in handleItemClick()', () => {
  // Setup
  const items = [
    { name: 'Item 1', show: true },
    { name: 'Item 2', show: false },
    { name: 'Item 3', show: true }
  ]
  const wrapper = shallowMount(AccordianMenu, {
    propsData: { items }
  })
  // Test
  wrapper.vm.handleItemClick(items[0])
  expect(wrapper.emitted().itemClick[0]).toEqual([items[0]])
})
