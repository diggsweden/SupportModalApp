// SPDX-FileCopyrightText: 2023 Digg - Agency for Digital Government
//
// SPDX-License-Identifier: MIT

import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.{cy,spec}.{js,jsx,ts,tsx}',
    baseUrl: 'http://localhost:4173'
  }
})
