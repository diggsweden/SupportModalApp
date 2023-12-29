import { config } from '@vue/test-utils'

class MockResizeObserver {
  constructor(callback) {
    this.callback = callback
  }
  observe() {}
  unobserve() {}
  disconnect() {}
}

global.ResizeObserver = MockResizeObserver
config.global.mocks = {
  $t: (key) => key,
}
