<template>
  <div class="rectangle">
    <div class="modal-header">
      <div class="title">{{ $t('header.title') }}</div>
      <button class="close-button" @click="closeModal" tabindex="0">
        {{ $t('header.close') }}
        <img :src="closeIcon" alt="Close Icon" class="close-icon" />
      </button>
    </div>
    <AccordionMenu :items="items" @itemClick="handleItemClick" />
  </div>
</template>

<script>
import AccordionMenu from './AccordionMenu.vue'
import AvailableItems from '@/availableItems.js'
import closeIcon from '@/assets/close-line.svg'

export default {
  name: 'ModalMenuContainer',
  components: {
    AccordionMenu
  },
  props: {
    config: {
      type: Object,
      default: () => {}
    }
  },
  emits: ['sendMessage'],
  data() {
    return {
      items: [],
      closeIcon
    }
  },
  mounted() {
    if (this.config && this.config.features && this.config.features.support) {
      const supportItems = Object.keys(this.config.features.support);

      this.items = AvailableItems.filter((item) => {
        return supportItems.includes(item.id);
      });
    }
  },
  methods: {
    closeModal() {
      this.sendDataToParent({ action: 'closeModal' })
    },
    sendDataToParent(data) {
      this.$emit('sendMessage', data)
    },
    handleItemClick(item) {
      // Since the only available option is redirect, we can just send the PostMessageEventName.
      let data = null;

      if (item && Object.prototype.hasOwnProperty.call(item, 'id')) {
        data = {
          action: 'redirect',
          data: item.id
        };
      }

      this.sendDataToParent(data)
    }
  }
}
</script>

<style scoped>
.close-button {
  display: inline-flex;
  padding: 3px 4px 3px 8px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 4px;
  border: 1px solid var(--neutrals-midtone, #d4dadf);
  background-color: transparent;

  color: var(--Neutrals-dark, #4a5464);
  text-align: right;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 23px; /* 143.75% */
  gap: 12px;
}

.close-button:hover {
  cursor: pointer;
  background: var(--Primary-highlight, #e6ecf2);
}

.close-button:active {
  background: var(--Primary-midtone, #b6c7d7);
}

.close-button:focus {
  background: var(--Primary-midtone, #b6c7d7);
}

.rectangle {
  border-radius: 4px;
  border: 1px solid var(--Neutrals-highlight, #f8f9fb);
  background: var(--Neutrals-white, #fff);
  /* dropShadow */
  box-shadow: 0px 5px 12px 0px rgba(21, 25, 31, 0.2);
}

.close-button {
  display: flex;
  align-items: center;
}

.close-icon {
  width: 23px;
  height: 23px;
  margin-right: 5px;
}

.modal-header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  padding: 12px;
  border-bottom: 1px solid #efefef;
  font: 600 18px/26px Lato;
  color: var(--neutrals-black, #15191f);
}

.modal-header .title {
  color: var(--Neutrals-black, #15191f);
  /* Body/text-md-semi */
  font-family: Lato;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 26px; /* 144.444% */
}

.modal-header button {
  position: absolute;
  right: 10px;
}
</style>
```
