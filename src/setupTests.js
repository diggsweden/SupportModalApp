// SPDX-FileCopyrightText: 2023 Digg - Agency for Digital Government
//
// SPDX-License-Identifier: MIT

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
