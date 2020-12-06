<template>
  <section class="container">
    <a href="/users"><'a'> link Users</a>
    <br>
    <router-link to="/users"><'router-link'> link Users</router-link>
    <br>
    <nuxt-link to="/users"><'nuxt-link'> link Users</nuxt-link>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
section.container {
  margin-left: 5rem;
  margin-right: 5rem;
  margin-top: 10rem;
}
</style>
