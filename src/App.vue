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
      switch (data.PostMessageEventName) {
        case 'closeModal':
          this.closeModal()
          break
        case 'contactUs':
        case 'toSupportPage':
        case 'toFAQ':
        case 'openChat':
          this.redirectTo(data.PostMessageEventName)
          break
        default:
          // console.log('handleDataFromChildComponent(): ', data)
          break
      }
    }
  }
}
</script>

<style scoped>
/**
* Reset Button
*/
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

<style > #app {
  max-width: 266px;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
}
</style>
