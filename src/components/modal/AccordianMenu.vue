<template>
  <div
    class="icon-list"
    v-for="(item, index) in plainItems"
    :key="index"
    @click="handleItemClick(item)"
    ref="iconList"
    tabindex="0"
  >
    <img class="icon-image" v-if="item.svgIcon" :src="item.svgIcon" alt="Menu Icon" />
    <div class="icon-text">
      <div class="icon-title">{{ item.name }}</div>
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
.icon-list {
  display: inline-flex;
  padding: 10px 12px;
  align-items: left;
  gap: 12px;
  border-radius: 4px;
  width: 100%;
}

.icon-list:hover {
  display: inline-flex;
  padding: 10px 12px;
  justify-content: left;
  align-items: center;
  gap: 12px;

  border-radius: 4px;
  background: var(--Primary-highlight, #e6ecf2);
  width: 100%;
}

.icon-list:active {
  display: inline-flex;
  padding: 10px 12px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-radius: 4px;
  background: var(--Primary-highlight, #e6ecf2);
  width: 100%;
}

.icon-list:focus {

  display: inline-flex;
  padding: 10px 12px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-radius: 4px;
  border: 2px solid var(--Primary-shade, #124562);
  width: 100%;
}

.icon-list:disabled {
  /* disabled state styles */
  background-color: var(--disabled-background-color);
  color: var(--disabled-text-color);
}

body .icon-text {
  color: var(--Neutrals-dark, #4a5464);
  /* Body/text-base-semi */
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 23px;
}
</style>
