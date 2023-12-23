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
button {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
  overflow: visible;
  text-transform: none;
}

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button;
}

.close-button {
  display: inline-flex;
  padding: 3px 4px 3px 8px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 4px;
  border: 1px solid var(--neutrals-midtone, #d4dadf);
}

.raised-card {
  border-radius: 4px;
  border: 1px solid var(--neutrals-highlight, #f8f9fb);
  background: var(--neutrals-white, #fff);

  /* dropShadow */
  box-shadow: 0px 5px 12px 0px rgba(21, 25, 31, 0.2);
}

.rectangle {
  width: 286px;
  height: 250px;

  flex-shrink: 0;
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
  width: 20px;
  height: 20px;
  margin-right: 5px;
}

.modal-header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  margin-top: 20px;
  margin-left: 20px;
  padding: 10px 0 10px 10px;
  border-bottom: 1px solid #efefef;
  font: 600 18px/26px Lato;
  color: var(--neutrals-black, #15191f);
}

.modal-header h3 {
  width: 161px;
  color: var(--neutrals-black, #15191f);
  /* Body/text-md-semi */
  font-family: Lato;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 26px;
  /* 144.444% */
}

.modal-header button {
  position: absolute;
  right: 10px;
}
</style>
```
