<template>
  <ModalMenuContainer :message="message" @childToParent="handleDataFromChild" @postMessage="receiveMessage"
    @close="closeModal"></ModalMenuContainer>
</template>


<script>
import ModalMenuContainer from './components/modal/ModalMenuContainer.vue'

export default {
  name: 'App',
  components: {
    ModalMenuContainer
  },
  data() {
    return {
      show: false,
      isDarkMode: false,
      message: 'closeModal'
    }
  },
  created() {
    window.addEventListener('message', this.receiveMessage, false);
  },
  beforeUnmount() {
    window.removeEventListener('message', this.receiveMessage);
  },
  unmounted() {
    window.removeEventListener('message', this.receiveMessage);
  },
  methods: {
    receiveMessage(event) {
      console.log("recieveMessage():", event.data);
      switch (event.data) {
        case 'openModal':
          this.show = true;
          break;
        case 'closeModal':
          this.show = false;
          //console.log("closeModal - in container");
          this.closeModal();
          break;
        case 'toggleDarkMode':
          //console.log("toggleDarkMode - in container");
          this.toggleDarkMode();
          break;
      }
    },
    closeModal() {
      // console.log("closeModal function in container");

    }, beforeDestroy() {
      window.removeEventListener('message', this.receiveMessage);
    },
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      document.body.classList.toggle('dark', this.isDarkMode);
      window.parent.postMessage('toggleDarkMode', '*');
    },
    handleDataFromChild(data) {
      console.log("Data: ", data.name);
    }
  }
};


</script>



<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
