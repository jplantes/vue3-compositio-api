<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">

      <nav>
        <RouterLink to="/">Home</RouterLink> | 
        <RouterLink to="/about">About</RouterLink> | 
        <RouterLink :to="{ name: 'counter' }">Counter</RouterLink> | 
        <RouterLink :to="{ name: 'user' }">Users</RouterLink> | 
        <RouterLink :to="{ name: 'pokemon-search' }">Búscar Pokemon</RouterLink> |
        <RouterLink :to="{ name: 'todo' }">Todo</RouterLink> |
        <RouterLink :to="{ name: 'slots' }">Slots</RouterLink> 
      </nav>
    </div>
  </header>


  <!-- con el v-slot obtengo el complete que se esta obteniendo al navegar y se lo paso al <component ...> --> 
  <RouterView v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </RouterView>

</template>

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


</style>
