<template>
  <div class="rectangle">
    <div class="modal-header">
      <div class="helppmeny">Hjälpmeny</div>
      <button class="close-button" @click="closeModal">
        Stäng
        <img :src="closeIcon" alt="Close Icon" class="close-icon" />
      </button>
    </div>
    <div class="divider"></div>
    <Accordion :items="items" @subItemClick="handleSubItemClick" @itemClick="handleSubItemClick" />
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
  border-radius: 4px;
  border: 1px solid var(--neutrals-midtone, #d4dadf);
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
  display: inline-flex;
  padding: 3px 8px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 4px;
  background: var(--Primary-midtone, #b6c7d7);
}

.close-button:active {
  display: inline-flex;
  padding: 3px 8px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 4px;
  background: var(--Primary-midtone, #b6c7d7);
}

.close-button:focus {
  display: inline-flex;
  padding: 3px 8px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 4px;
  border: 3px solid var(--Primary-shade, #124562);
  background: var(--Primary-highlight, #e6ecf2);
}

.close-button:disabled {
  display: inline-flex;
  padding: 3px 8px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 4px;
  border: 1px solid var(--Neutrals-midtone, #d4dadf);
  background: var(--Neutrals-midtone, #d4dadf);
}

.rectangle {
  width: 266px;
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
  padding: 10px 0 10px 10px;
  border-bottom: 1px solid #efefef;
  font: 600 18px/26px Lato;
  color: var(--neutrals-black, #15191f);
}

.helppmeny {
  color: var(--Neutrals-black, #15191f);
  /* Body/text-md-semi */
  font-family: Lato;
  font-size: 18px;
  margin-left: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 26px; /* 144.444% */
}

.modal-header button {
  position: absolute;
  right: 10px;
}

.divider {
  width: 266px;
  height: 0px;
  stroke-width: 1px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  stroke: var(--Neutrals-light, #efefef);
}

</style>

