<template>
  <ModalMenuContainer
    @childToParent="handleDataFromModalsChildComponent"
    @close="closeModal"
  ></ModalMenuContainer>
</template>

<script>
import ModalMenuContainer from './components/modal/ModalMenuContainer.vue'
import PostMessageService from './services/PostMessageService.js'

export default {
  name: 'App',
  components: {
    ModalMenuContainer
  },
  data() {
    return {
      show: false,
      isDarkMode: false
    }
  },
  mounted() {
    //window.addEventListener('message', this.handleMessage);
    PostMessageService.registerHandler('message', this.handleMessage)
    PostMessageService.listen()
  },
  unmounted() {
    // window.removeEventListener('message', this.handleMessage);
    PostMessageService.unlisten()
    PostMessageService.removeHandler('message')
  },
  methods: {
    handleMessage(event) {
      console.log('handleMessage():', event.data)
    },
    closeModal() {
      this.show = false
      PostMessageService.sendMessage('closeModal')
    },
    redirectTo(url) {
      PostMessageService.sendMessage('redirectTo', url)
    },
    handleDataFromModalsChildComponent(data) {
      console.log('Send to Wrapper: ', data)
      switch (data.name) {
        case 'closeModal':
          this.closeModal()
          break
        case 'contactUs':
        case 'toSupportPage':
        case 'toFAQ':
          this.redirectTo(data.name)
          break
        default:
          console.log('handleDataFromChildComponent(): ', data)
      }
    }
  }
}
</script>

<style scoped></style>
