<template>
    <div class="accordion">
        <div class="accordion-item" v-for="(item, index) in plainItems" :key="index">
            <div class="title" @click="toggle(index)">
                {{ item.title }}
                <i :class="opened === index ? 'arrow up icon' : 'arrow down icon'"></i>
            </div>
            <transition name="slide-fade">
                <ul v-if="opened === index">
                    <li v-for="(subItem, subIndex) in item.content" :key="subIndex" @click="handleClick(subItem)">
                        <i :class="subItem.icon"></i>
                        {{ subItem.name }}
                    </li>
                </ul>
            </transition>
        </div>
    </div>
</template>

<script>
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
    methods: {
        toggle(index) {
            this.opened = this.opened === index ? null : index
        },
        handleClick(subItem) {
            this.$emit('subItemClick', subItem);
        }
    },
    watch: {
        opened(newVal, oldVal) {
           // console.log('opened changed from', oldVal, 'to', newVal);
        },
    },
    computed: {
            plainItems() {
                return this.items.map(item => ({ ...item }));
            }
        }
}
</script>

<style scoped>
.title {
    font-size: 18px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
}

.title:hover {
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
}

.content {
    padding: 1rem;
    background-color: #f5f5f5;
    border: 1px solid #e5e5e5;
    border-top: none;
}

.custom-content {
    padding: 1rem;
    background-color: #f5f5f5;
    border: 1px solid #e5e5e5;
    border-top: none;

}

.slide-fade-enter-active {
    transition: all .3s ease;
}

.slide-fade-leave-active {
    
}

.slide-fade-enter,
.slide-fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
}

ul {
    
    list-style-type: none;
    padding-left: 10pt;
    background-color: rgb(178, 182, 175);
    box-shadow: inset 0px 0px 10px rgba(0,0,0,0.3);
}

li {
    font-size: 16px;
    background-color: rgb(178, 182, 175);
    margin: 10px 0;
    padding: 10px 0;
    border-bottom: 1px solid #ccc;
}
li:hover {
    background-color: rgb(125, 128, 122);
}
.arrow {
    color: green;
    /* Add other styles as needed */
}
.accordion-item {
    margin: 15px 0;
    /* Add other styles as needed */
}
</style>