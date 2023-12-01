<template>
  <div class="accordion">
    <div class="accordion-item" v-for="(item, index) in plainItems" :key="index">
        <div class="icon-list" @click="item.content && item.content.length > 0 ? toggle(index) : handleItemClick(item)">
        <img v-if="item.svgIcon" :src="item.svgIcon" alt="Menu Icon">
        {{ item.name ? item.name : item.title }}
        <!--i :class="opened === index ? 'arrow up icon' : 'arrow down icon'"></i-->
      </div>
      <transition name="slide-fade">
        <ul v-if="opened === index">
          <li
            v-for="(subItem, subIndex) in item.content"
            :key="subIndex"
            @click="handleSubItemClick(subItem)"
          >
            <i :class="subItem.icon"></i>
            {{ subItem.name }}
          </li>
        </ul>
      </transition>
    </div>
  </div>
</template>

<script>
import Config from '../../Config'

export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      opened: null
    }
  },
  mounted() {
   // console.log('mounted(): ', this.items)
   // console.log('mounted(): ', this.Config)
  },
  methods: {
    async getIcon(iconPath) {
    let icon = await import('@/assets/' + iconPath);
    console.log('getIcon(): ', icon.default)
    return icon.default;
  },
    toggle(index) {
      this.opened = this.opened === index ? null : index
    },
    handleSubItemClick(subItem) {
      this.$emit('subItemClick', subItem)
    },
     handleItemClick(item) {
      this.$emit('itemClick', item.name);
    },

    shouldShowSubItem(subItem) {
      if (subItem.name === 'Monochrom färg') {
        console.log('shouldShowSubItem(): ', Config.features.acceccessability.dark_mode)
        return Config.features.acceccessability.dark_mode
      }
      return true
    }
  },
  watch: {
    opened(newVal, oldVal) {
      // console.log('opened changed from', oldVal, 'to', newVal);
    }
  },
  computed: {
    plainItems() {
      //return this.items.map((item) => ({ ...item }))
      return this.items.filter(item => item.show);
    }
  }
}
</script>

<style scoped>
.icon-list {
    display: flex;
    flex-direction: row;
    padding: 10px 12px;
    justify-content: center;
    align-items: center;
    gap: 12px;
}

.icon-list:hover {
    cursor: pointer;
 /* box-shadow: 0px 10px 5px 0px rgba(0, 0, 0, 0.2); */
}

.accordion-item ul {
    display: inline-flex;
    padding: 10px 12px;
    justify-content: center;
    align-items: center;
    gap: 12px;
  }
  
  .accordion-item ul li {
    display: inline-flex;
    padding: 10px 12px;
    justify-content: center;
    align-items: center;
    gap: 12px;
  }
  
  .accordion-item ul li:first-child {
    border-top: none;
  }


ul {
 display: inline-flex;
padding: 10px 12px;
justify-content: center;
align-items: center;
gap: 12px;
}

li {
  font-size: 16px;
  background-color: rgb(178, 182, 175);
  margin: 10px 0;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
}
li:hover {
  /*background-color: rgb(125, 128, 122);*/
}
.accordion-item {
 
  /* Add other styles as needed */
  display: inline-flex;
  padding: 10px 12px;
  justify-content: center;
  align-items: center;
  gap: 12px;
}
</style>
