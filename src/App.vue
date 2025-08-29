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
    <Suspense>
      <RouterView></RouterView>
    </Suspense>
  </n-config-provider>
</template>

<style scoped>
</style>