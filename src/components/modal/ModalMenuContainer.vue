<template>
    <div class="modal">
        <div class="raised-card">
            <div class="modal-header">
               <h3> Hjälpmeny </h3>
                <button @click="closeModal">Stäng X</button>
            </div>
            <div>
                <Accordion :items="items" />
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
    data() {
        return {
            showModal: true,
            isOpen: true,
            message: 'Hello from modal, via PostMessage',
            close: 'close modal',
            items: Items
        }
    },
    created() {
        window.addEventListener('message', this.receiveMessage, false);

    },
    methods: {
        postMessage() {
            this.$emit('postMessage', this.close);
        },
        receiveMessage(event) {
            console.log(event.data);
            switch (event.data) {
                case 'openModal':
                    this.show = true;
                    break;
                case 'closeModal':
                    this.show = false;
                    break;
                case 'toggleDarkMode':
                    this.toggleDarkMode();
                    break;
            }
        },
        handlePostMessage(message) {
            console.log(message);
            switch (message) {
                case 'open':
                    this.showModal = true;
                    this.openModal();
                    break;
                case 'close':
                    this.closeModal();
                    break;
                default:
                    console.log('default');
            }
        },
        closeModal() {
            this.showModal = false;
        }
    },
    mounted() {
        console.log('Module: mounted')
        $('.ui.accordion').accordion()
        this.postMessage();
    },
    closeModal() {
        console.log('close modal')
        this.showModal = false;
        window.parent.postMessage('closeModal', '*');
        this.$emit('postMesssage', 'closeModal');
    },
    openModal() {
        console.log('open modal')
        this.$emit('openModal');
    }
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