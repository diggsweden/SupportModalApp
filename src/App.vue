<!--
SPDX-FileCopyrightText: 2023 Digg - Agency for Digital Government

SPDX-License-Identifier: MIT
-->

<template>
  <div class="modal-container">
    <ModalMenuContainer
      v-if="config && Object.keys(config).length"
      @sendMessage="handleSendMessage"
      @close="closeModal"

      :config="config"
    />
    <span v-else>{{ $t('general.loading') }}</span>
  </div>
</template>

<script>
import ModalMenuContainer from './components/modal/ModalMenuContainer.vue'
import PostMessageService from './services/PostMessageService.js'
import { debounce } from './utils/debounce.js';
import './assets/main.css'
import i18next from 'i18next'

export default {
  name: 'App',
  components: {
    ModalMenuContainer
  },
  data() {
    return {
      config: {},
      isDarkMode: false
    }
  },

  watch: {
    config(newValue, oldValue) {
      if (newValue !== oldValue && Object.keys(newValue).length) {
        this.observer.observe(this.$el);
        this.$el.focus();
      }
    },
  },

  created() {
    const observer = new ResizeObserver(debounce((entries) => {
      for (let entry of entries) {
        const { offsetWidth: width, offsetHeight: height } = entry.target;

        PostMessageService.sendMessage('resize', {
          width: `${width}`,
          height: `${height}`,
        });
      }
    }), 50);

    this.observer = observer;
  },
  mounted() {
    PostMessageService.registerHandler('load', this.loadEvent)
    PostMessageService.listen()
    PostMessageService.sendMessage('ready')
  },
  unmounted() {
    // window.removeEventListener('message', this.handleMessage);
    PostMessageService.unlisten()
    PostMessageService.removeHandler('message')
  },
  beforeUnmount() {
    this.observer.disconnect();
  },
  methods: {
    contains(obj, keyString) {
      return Object.prototype.hasOwnProperty.call(obj, keyString);
    },
    loadEvent(data) {
      if (Object.keys(data).length) {
        this.config = data;

        if ((this.contains(data, 'context') && this.contains(data.context, 'locale')) || window.locale) {
          const locale = data.context.locale || window.locale;
          i18next.locale = locale;
        }
      }

      PostMessageService.sendMessage('loaded');
    },
    closeModal() {
      PostMessageService.sendMessage('closeModal')
    },
    redirectTo(url) {
      PostMessageService.sendMessage('redirectTo', url)
    },
    handleSendMessage({ action, data }) {
      switch (action) {
        case 'closeModal':
          this.closeModal()
          break
        case 'redirect':
          this.redirectTo(data)
          break
        default:
          break
      }
    }
  }
}
</script>

<style scoped>
:root {
  /* light mode colors */
  --disabled-background-color: #cccccc;
  --disabled-text-color: #666666;
}

body.dark {
  /* dark mode colors */
  --disabled-background-color: #333333;
  --disabled-text-color: #999999;
}
</style>
