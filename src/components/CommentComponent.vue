<script setup lang="ts">
import Gitalk from 'gitalk';
import { onMounted } from 'vue';

const props = defineProps({
    id: String
})

const gitalk = new Gitalk({
    id: props.id,
    clientID: 'Ov23liOXsHKaPFNOxlMq',
    clientSecret: 'ec86dfc031560df8f6a009d1b5f51cba7b64cca9',
    repo: 'sblog-comments',
    owner: 'SeaMite43981045',
    admin: ['SeaMite43981045'],
    labels: ['SeaMite43981045'],
    perPage: 50,
    distractionFreeMode: false
})

onMounted(() => {
    gitalk.render("gitalk-container")
})
</script>

<template>
    <div id="gitalk-container"></div>
</template>

<style scoped>
</style>