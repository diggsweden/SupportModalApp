<!--
SPDX-FileCopyrightText: 2023 Digg - Agency for Digital Government

SPDX-License-Identifier: MIT
-->

<template>
  <div class="icon-list-wrapper">
    <button
      v-for="(item, index) in items"
      :key="index"
      class="icon-list"
      ref="iconList"
      @click="handleItemClick(item)"
    >
      <img class="icon-image" v-if="item.icon" :src="item.icon" alt="Menu Icon" />
      <div class="icon-text">
        <div class="icon-title">{{ $t(`support.${item.label}`) }}</div>
      </div>
    </button>
  </div>
</template>

<script>
export default {
  name: 'AccordionMenu',
  props: {
    items: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  emits: ['itemClick'],
  data() {
    return {
      opened: null
    }
  },
  methods: {
    handleItemClick(item) {
      this.$emit('itemClick', item)
    }
  }
}
</script>

<style scoped>
.icon-list-wrapper {
  margin-top: 10px;
}

.icon-list {
  display: inline-flex;
  padding: 10px 12px;
  align-items: left;
  gap: 12px;
  width: 100%;
  border: none;
  background: none;
  outline-offset: -1px;
}

.icon-list:hover {
  cursor: pointer;
  background: var(--Primary-highlight, #e6ecf2);
}

.icon-list:active {
  background: var(--Primary-highlight, #e6ecf2);
}

.icon-list:focus-visible {
  outline: 2px solid var(--Primary-shade, #124562);
}

.icon-list:disabled {
  /* disabled state styles */
  background-color: var(--disabled-background-color);
  color: var(--disabled-text-color);
}

.icon-title {
  color: var(--Neutrals-dark, #4a5464);
  /* Body/text-base-semi */
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 23px; /* 143.75% */
}
</style>
