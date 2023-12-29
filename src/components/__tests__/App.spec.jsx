// App.test.js
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import App from '@/App.vue';

// Mock debounce function to be a simple passthrough
vi.mock('@/utils/debounce.js', () => ({
  debounce: fn => fn,
}));

// Setup a mock for ResizeObserver
global.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};

// Mock PostMessageService with spies
vi.mock('@/services/PostMessageService.js', async () => {
  const actual = await vi.importActual('@/services/PostMessageService.js');
  return {
    ...actual,
    sendMessage: vi.fn(),
    listen: vi.fn(),
    registerHandler: vi.fn(),
    unlisten: vi.fn(),
    removeHandler: vi.fn(),
  };
});

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    // Reset mocks before each test
    vi.resetAllMocks();

    // Mount the component before each test
    wrapper = mount(App, {
      global: {
        mocks: {
          $i18n: { locale: 'en' }, // Mock for $i18n
        },
        stubs: ['ModalMenuContainer'], // Stub child components
      },
    });
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('should mount the component', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should initialize ResizeObserver on created hook', () => {
    expect(wrapper.vm.observer).toBeInstanceOf(ResizeObserver);
  });

  it('should call focus on the element when config is set', async () => {
    // Ensure the element to focus exists and is focusable
    const focusMock = vi.spyOn(HTMLElement.prototype, 'focus');
    wrapper.vm.config = { someKey: 'someValue' };
    await wrapper.vm.$nextTick();
    expect(focusMock).toHaveBeenCalled();
    focusMock.mockRestore();
  });

  it('should set the locale if context and locale are provided', async () => {
    const data = { context: { locale: 'en' } };
    await wrapper.vm.loadEvent(data);
    expect(wrapper.vm.$i18n.locale).toBe('en');
  });
});
