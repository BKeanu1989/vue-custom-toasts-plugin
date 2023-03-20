<script setup lang="ts">
import { useCustomToast } from './composables/UseCustomToast';

const usableCustomToast = useCustomToast()

</script>

<template>
  <div>
    <the-custom-toast></the-custom-toast>
    <button type="button" @click="usableCustomToast.addMessage('tet')">Test add message</button>

  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
