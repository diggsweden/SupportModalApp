<template>
  <ModalMenuContainer @childToParent="handleDataFromChild" 
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
    }
  },
  mounted() {
    window.addEventListener('message', this.handleMessage);
  },
  unmounted() {
    window.removeEventListener('message', this.handleMessage);
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
    },
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      document.body.classList.toggle('dark', this.isDarkMode);
      window.parent.postMessage('toggleDarkMode', '*');
    },
    handleDataFromChild(data) {
      console.log("Data: ", data.name);
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
