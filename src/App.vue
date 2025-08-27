<script setup lang="ts">
import { RouterView } from 'vue-router';
import {
  darkTheme, 
  NConfigProvider
} from 'naive-ui';
import MusicBoxComponent from './components/MusicBoxComponent.vue';
</script>

<template>
  <n-config-provider :theme="darkTheme">
    <MusicBoxComponent />
    <RouterView></RouterView>
  </n-config-provider>
</template>

<style scoped>
</style>