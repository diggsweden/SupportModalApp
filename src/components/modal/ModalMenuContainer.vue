<template>
    <div class="modal">
        <div class="raised-card">
            <div class="modal-header">
                <h3> Hjälpmeny </h3>
                <button @click="closeModal">Stäng X</button>
            </div>
            <div>
                <Accordion :items="items" @subItemClick="handleSubItemClick"/>
            </div>
        </div>
    </div>
</template>

<script>
import Accordion from './AccordianMenu.vue'
import Items from '../../Items';

export default {
    name: 'ModalMenuContainer',
    components: {
        Accordion
    },
    props: ['message'],
    data() {
        return {
            close: 'close modal',
            items: Items
        }
    },
    methods: {
        closeModal() {
           // console.log("closeModal from container");
            this.sendDataToParent({name: 'closeModal'});
        },
        sendDataToParent(subItem) {
            //console.log("sendDataToParent from container", subItem);
            this.$emit('childToParent', subItem);
        }, 
        handleSubItemClick(subItem) {
            //console.log('Received from child:', subItem);
            this.sendDataToParent(subItem);
        }
    },
    beforeUnmount() {
        // eslint-disable-next-line vue/no-deprecated-events-api
       // this.$off('close')
    },
}
</script>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.dark-grey {
    background-color: #4c614d;
    /* parent component color */
    color: #fff;
}

.raised-card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    /* Add other styles as needed */
}

.modal {
    width: 300px;
    height: auto;
}

.title {
    cursor: pointer;
    margin: 10px 0;

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

.accordion {
    margin: 10px 0;
    /* Add other styles as needed */
}
</style>
```