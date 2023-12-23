<template>
  <div class="accordian-menu">
    <div class="accordian-item" v-for="(item, index) in plainItems" :key="index">
      <div class="icon-list" @click="handleItemClick(item)" ref="iconList" tabindex="0">
        <img class="icon-image" v-if="item.svgIcon" :src="item.svgIcon" alt="Menu Icon" />

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
    this.$refs.iconList[0].focus()
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

.icon-list {
  color: var(--neutrals-dark, #4a5464);
  font: 600 16px Lato;
  cursor: pointer;
  display: flex;
  padding: 10px 12px;
  gap: 12px;
}

.icon-list:hover {
  cursor: pointer;
  color: var(--neutrals-dark, #15191f);
}

.accordian-item ul {
  display: flex;
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
}

.accordian-item ul li:first-child {
  border-top: none;
}

.accordian-item {
  padding: 10px 12px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-radius: 4px;
}
</style>
