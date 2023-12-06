<template>
  <ModalMenuContainer @childToParent="handleDataFromChild" 
    @close="closeModal"></ModalMenuContainer>
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
      isDarkMode: false,
    }
  },
  mounted() {
    //window.addEventListener('message', this.handleMessage);
    PostMessageService.registerHandler('message', this.handleMessage);
    PostMessageService.listen();
  },
  unmounted() {
   // window.removeEventListener('message', this.handleMessage);
    PostMessageService.unlisten();
    PostMessageService.removeHandler('message');
  },
  methods: {
    handleMessage(event) {
      console.log("handleMessage():", event.data);
      if (event.data === 'openModal') this.show = true;
      if (event.data === 'closeModal') this.closeModal();
      if (event.data === 'toggleDarkMode') this.toggleDarkMode();
    },
    closeModal() {
      this.show = false;
      PostMessageService.sendMessage('message', 'closeModal');
    },
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
     /* document.body.classList.toggle('dark', this.isDarkMode);
      window.parent.postMessage('toggleDarkMode', '*'); */
      PostMessageService.sendMessage('toggleDarkMode', '*');
    },
    handleDataFromChild(data) {
      console.log("Send to Wrapper: ", data);
      switch (data.name) {
        case 'closeModal':
          this.show = false;
          //console.log("closeModal - in container");
          this.closeModal();
          break;
        case 'Monochrom färg':
          this.toggleDarkMode();
          break;
      }
    }
  }
};


</script>



<style scoped>

</style>
