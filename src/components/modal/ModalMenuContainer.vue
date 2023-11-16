<template>
    <div class="modal">
        <div class="ui raised link card">
            <P>Hjälpmeny
            <button class="ui button" @click="closeModal">Stäng X</button>
        </P>
            <div class="ui accordion">
                <div class="title">
                    <i class="dropdown icon"></i>
                    Support
                </div>
                <div class="content">
                    <p>Öppna Chatten</p>
                    <p>Till Support Sidan</p>
                    <p>Till Frågor och Svar</p>
                </div>
                <div class="title">
                    <i class="dropdown icon"></i>
                    Tillgänglighet
                </div>
                <div class="content">
                    <p>Ljud</p>
                    <p>Monochrom färg</p>
                    <p>Stor text</p>
                    <p>High Contrast</p>
                    <p>Text till tal</p>
                </div>
                <div class="title">
                    <i class="dropdown icon"></i>
                    Change Language
                </div>
                <div class="content">
                    <p>English</p>
                    <p>Svenska</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ModalMenuContainer',
    data() {
        return {
            showModal: true,
            isOpen: true,
            message: 'Hello from modal, via PostMessage'
        }
    },
    methods: {
        postMessage() {
            this.$emit('postMessage', this.message);
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
        }
    },
    mounted() {
        console.log('mounted')
        $('.ui.accordion').accordion()
        this.postMessage();
    }, closeModal() {
        console.log('close modal')
        this.showModal = false;
        window.parent.postMessage('close', '*');
        this.$emit('closeModal');
    }, openModal() {
        console.log('open modal')
        this.$emit('openModal');
    }
}
</script>

<style scoped></style>
```