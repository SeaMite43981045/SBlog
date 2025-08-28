<script setup lang="ts">
import {
    NFlex,
    NCard,
    NScrollbar,
    NThing,
    NAvatar
} from 'naive-ui';
</script>

<template>
    <div class="startup"></div>
    <div class="bg">
        <n-scrollbar>
            <n-flex justify="center">
                <div class="container">
                    <n-flex style="padding: 64px 128px;" vertical justify="center">
                        <router-link to="/" class="home-link">&lt; 返回主页</router-link>
                        <n-flex class="card-container" justify="start">
                            <n-card class="link-card" style="border: 4px solid #077955;">
                                <n-thing content-indented>
                                    <template #avatar>
                                        <n-avatar src="https://nocp.space/static/icon.png"/>
                                    </template>
                                    <template #header>
                                        <div class="name-box" style="width: 113.44px;">
                                            <a class="link-card-link" href="https://nocp.space/">Norcleeh's Site</a>
                                        </div>
                                    </template>
                                    由一条咸鱼搭建的网站
                                </n-thing>
                            </n-card>
                        </n-flex>
                    </n-flex>
                </div>
            </n-flex>
        </n-scrollbar>
    </div>
</template>

<style scoped>
.bg {
  height: 100vh;
  width: 100vw;
  position: absolute;
  background: url('/header-background.webp');
  background-size: 100% 100%;
}

.container {
  height: 100vh;
  width: 80vw;
  position: absolute;
  backdrop-filter: blur(16px);
  background-color: #00000099;
}

.home-link {
  font-size: 16px;
  color: aquamarine;
  text-decoration: none;
}

.card-container {
    padding: 32px;
}

.link-card {
    width: auto;
    padding: 16px 32px;
    margin: 32px;
    border-radius: 16px;
}

.link-card-link {
    color: aquamarine;
    text-decoration: none;
}

.name-box {
  position: relative;
}

.link-card-link::before {
  content: '';
  height: 4px;
  background: #B5B5B5;
  display: inline-block;
  position: absolute;
  bottom: -6px;
  width: 0;
  transition: width 0.36s;
}

.link-card-link:hover::before {
  width: 100%;
}

.startup {
  height: 100vh;
  position: absolute;
  background-color: #00000099;
  backdrop-filter: blur(64px);
  z-index: 114514;
  animation: startup-animate 1s ease-in-out 1;
}

@keyframes startup-animate {
  0% {
      width: 100vw;
  }
  100% {
    width: 0px;
  }
}
</style>