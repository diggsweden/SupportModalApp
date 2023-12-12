<template>
  <div class="rectangle">
    <div class="raised-card">
      <div class="modal-header">
        <h3>Hjälpmeny</h3>
        <button class="close-button" @click="closeModal">
          Stäng
          <img :src="closeIcon" alt="Close Icon" class="close-icon" />
        </button>
      </div>
      <div>
        <Accordion
          :items="items"
          @subItemClick="handleSubItemClick"
          @itemClick="handleSubItemClick"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Accordion from './AccordianMenu.vue'
import Items from '../../Items'
import closeIcon from '@/assets/close-line.svg'
import Config from '../../Config.js'

export default {
  name: 'ModalMenuContainer',
  components: {
    Accordion
  },

  data() {
    return {
      items: Items,
      closeIcon: closeIcon
    }
  },
  mounted() {
    // Traverse the Items array
    this.items = this.items.map((item) => {
      // Check if the Config object, its features, and accessibility attributes are defined
      if (
        Config &&
        Config.config &&
        Config.config.features &&
        Config.config.features.accessibility
      ) {
        // Check if the item's name exists in the Config object's accessibility attributes
        if (Config.config.features.accessibility[item.nameEn] !== undefined) {
          // Set the show attribute to the value of the corresponding accessibility attribute
          item.show = Config.config.features.accessibility[item.nameEn]
        }
      }
      return item
    })
  },
  methods: {
    closeModal() {
      this.sendDataToParent({ PostMessageEventName: 'closeModal' })
    },
    sendDataToParent(subItem) {
      console.log('sendDataToParent(): ', subItem)
      this.$emit('childToParent', subItem)
    },
    handleSubItemClick(subItem) {
      this.sendDataToParent(subItem)
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
}

.raised-card {
  box-shadow:
    0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
  /* Add other styles as needed */
}

.rectangle {
  width: 266px;
  height: 250px;
  flex-shrink: 0;
  color: var(--neutrals-dark, #080909);
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 23px;
}

.close-button {
  display: flex;
  align-items: center;
}

.close-icon {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}

.modal-header {
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
  border-bottom: 1px solid #000;
  padding-bottom: 10px;
  padding-top: 10px;
  padding-left: 10px;
}

.modal-header h1 {
  font-weight: bold;
}

.modal-header button {
  position: absolute;
  right: 10px;
}
</style>
```
