<template>
  <div>
    <nuxt/>
  </div>
</template>

<script>
import TheHeader from "../components/Navigation/TheHeader";
import TheSidenav from "../components/Navigation/TheSidenav";
export default {
  name: "admin",
  components: {TheSidenav, TheHeader},
  data() {
    return {
      displaySidenav: false,
    }
  }
}
</script>

<style scoped>
html {
  font-family: 'JetBrains Mono', monospace;
}
body {
  margin: 0;
}
</style>
