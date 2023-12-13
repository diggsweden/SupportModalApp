import Config from '@/Config.js'
import { describe, it, expect } from 'vitest'

describe('Config.js', () => {
  it('exports an object', () => {
    expect(typeof Config).toBe('object')
  })

  it('has the correct structure', () => {
    expect(Config).toHaveProperty('config')
    expect(Config.config).toHaveProperty('features')
    expect(Config.config.features).toHaveProperty('accessibility')
  })

  it('has the correct values', () => {
    // Replace 'OpenChat' and true with the actual key and value you want to test
    expect(Config.config.features.accessibility['OpenChat']).toBe(true)
  })
})
