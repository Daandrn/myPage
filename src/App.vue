<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <ul>
          <RouterLink to="/">{{ about }}</RouterLink>
        </ul>
        <ul>
          <RouterLink to="/projects">{{ projects }}</RouterLink>
        </ul>
        <ul>
          <RouterLink to="/contacts">{{ contacts }}</RouterLink>
        </ul>
      </nav>
    </div>
  </header>

  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>
export default {
  data() {
    return {
      about: "Home",
      projects: "Projetos",
      contacts: "Contatos",
    }
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

header {
  display: flex;
  line-height: 1.5;
  max-height: 100vh;
  justify-content: end;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

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

nav ul {
  padding: 0 20px 0 0;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);

  display: flex;

  align-items: center;

  width: max-content;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 430px) {
  nav {
    flex-direction: row;
  }

  nav ul {
    padding: 0 30px 0 0;
  }
}

@media (min-width: 1024px) {
  header {
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
    flex-wrap: nowrap;

    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
