<template>
  <div>
    <TheHeader @sidenavToggle="displaySidenav = !displaySidenav"/>
    <TheSidenav :show="displaySidenav"
                @close="displaySidenav = false"/>
    <nuxt/>
  </div>
</template>
<script>
import TheHeader from '../components/Navigation/TheHeader';
import TheSidenav from '../components/Navigation/TheSidenav';

export default {
  components: {TheSidenav, TheHeader},
  data() {
    return {
      displaySidenav: false,
    };
  },
};
</script>
<style>
html {
  font-family: 'JetBrains Mono', monospace;
}

body {
  margin: 0;
}
</style>
