<template>
  <div class="accordian">
    <div class="accordian-item" v-for="(item, index) in plainItems" :key="index">
      <div class="icon-list" @click="handleItemClick(item)">
        <img v-if="item.svgIcon" :src="item.svgIcon" alt="Menu Icon" />
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
      default: () => []
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
      let icon = await import(/* @vite-ignore */ '@/assets/' + iconPath)
      console.log('getIcon(): ', icon.default)
      return icon.default
    },
    handleItemClick(item) {
      this.$emit('itemClick', item)
    }
  },
  computed: {
    plainItems() {
      //return this.items.map((item) => ({ ...item }))
      return this.items.filter((item) => item.show)
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

.accordian-item ul {
  display: inline-flex;
  padding: 10px 12px;
  justify-content: center;
  align-items: center;
  gap: 12px;
}

.accordian-item ul li {
  display: inline-flex;
  padding: 10px 12px;
  justify-content: center;
  align-items: center;
  gap: 12px;
}

.accordian-item ul li:first-child {
  border-top: none;
}

.accordian-item {
  /* Add other styles as needed */
  display: inline-flex;
  padding: 10px 12px;
  justify-content: center;
  align-items: center;
  gap: 12px;
}
</style>
