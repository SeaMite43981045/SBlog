<script setup lang="ts">
import {
  NFlex,
  NAvatar,
  NGradientText,
  NText,
  NScrollbar,
  NButton,
  NIcon
} from 'naive-ui';
import {
  LogoGithub,
  LogoTwitch
} from '@vicons/ionicons5';
import PostComponent from '../components/PostComponent.vue';
import posts from '@/posts';
import FooterComponent from '@/components/FooterComponent.vue';

</script>

<template>
    <div class="startup"></div>
    <div class="container">
      <n-scrollbar style="max-height: 100vh;">
        <div class="header-bg">
          <div class="header-container">
            <div class="bar"></div>
            <n-flex class="header-page" justify="space-between" align="center" vertical>
              <n-flex class="center-container" vertical justify="center">
                <n-flex style="padding: 60px 140px;">
                  <div class="info-box">
                    <n-flex vertical justify="center" align="end">
                      <div class="name-box">
                        <n-gradient-text
                          class="name-text"
                          :size="32"
                          :gradient="{
                            deg: 90,
                            from: '#D10CBF',
                            to: '#8545D1'
                          }"
                        >
                          SeaMite43981045
                        </n-gradient-text>
                      </div>  
                      <n-text style="font-size: 20px; color: #8C8C8C;">
                        个人博客
                      </n-text>
                    </n-flex>
                    <n-avatar round src="/avatar.webp" style="width: 120px; height: 120px;"/>
                  </div>
                </n-flex>
                <div class="header-title">欢迎来到 SeaMite43981045 的小屋~</div>
                <n-flex justify="center" align="center" vertical class="header-link-box">
                  <n-flex style="max-width: 640px;">
                    <n-button tag="a" text href="https://github.com/SeaMite43981045" class="header-link">
                      <n-icon :component="LogoGithub" size="24px"/>
                      Github
                    </n-button>
                    <n-button tag="a" text href="https://space.bilibili.com/1762773060" class="header-link">
                      <n-icon size="24px">
                        <svg t="1755584973392" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1494"><path d="M306.005333 117.632L444.330667 256h135.296l138.368-138.325333a42.666667 42.666667 0 1 1 60.373333 60.373333l-78.037333 77.952L789.333333 256A149.333333 149.333333 0 0 1 938.666667 405.333333v341.333334a149.333333 149.333333 0 0 1-149.333334 149.333333h-554.666666A149.333333 149.333333 0 0 1 85.333333 746.666667v-341.333334A149.333333 149.333333 0 0 1 234.666667 256h88.96L245.632 177.962667a42.666667 42.666667 0 0 1 60.373333-60.373334zM789.333333 341.333333h-554.666666a64 64 0 0 0-63.701334 57.856L170.666667 405.333333v341.333334a64 64 0 0 0 57.856 63.701333L234.666667 810.666667h554.666666a64 64 0 0 0 63.701334-57.813334L853.333333 746.666667v-341.333334A64 64 0 0 0 789.333333 341.333333zM341.333333 469.333333a42.666667 42.666667 0 0 1 42.666667 42.666667v85.333333a42.666667 42.666667 0 1 1-85.333333 0v-85.333333a42.666667 42.666667 0 0 1 42.666666-42.666667z m341.333334 0a42.666667 42.666667 0 0 1 42.666666 42.666667v85.333333a42.666667 42.666667 0 1 1-85.333333 0v-85.333333a42.666667 42.666667 0 0 1 42.666667-42.666667z" p-id="1495"></path></svg>
                      </n-icon>
                      Bilibili
                    </n-button>
                    <n-button tag="a" text href="https://www.twitch.tv/seamite43981045" class="header-link">
                      <n-icon :component="LogoTwitch" size="24px"></n-icon>
                      Twitch
                    </n-button>
                  </n-flex>
                  <n-flex style="max-width: 640px;">
                    <n-button tag="a" text class="header-link">
                      <router-link to="/links" style="color: aquamarine;">友链 -></router-link>
                    </n-button>
                  </n-flex>
                </n-flex>
              </n-flex>
            </n-flex>
            
            <div class="bar"></div>
          </div>
        </div>
        <n-flex class="post-container" align="center" justify="center" vertical style=" height: 100%; padding: 64px; margin: 0;background-color: #00000099; backdrop-filter: blur(16px);">
          <post-component v-for="(post, key) in posts.values()" :key="key" :id="post.id" :avatar="post.avatar" :title="post.title" :create_time="post.create_time" :description="post.description" :author="post.author" :tags="post.tags"/>
        </n-flex>
        <footer-component />
      </n-scrollbar>
    </div>
</template>

<style scoped>
.center-container {
  flex: 1;
  align-items: center;
}

.container {
  background: url('/header-background.webp') no-repeat;
  background-size: 100% 100%;
  margin: 0;
  padding: 0;
  position: relative;
  height: 100vh;
  width: 100vw;
  z-index: 0;
}

.music-background-marquee {
  margin: 0;
  padding: 0;
  background-color: #000000;
  backdrop-filter: blur(32px);
}

.music-background {
  margin: 0;
  padding: 0;
  height: 256px;
  background-color: #000000;
  backdrop-filter: blur(32px);
  opacity: 0.7;
}

.header-title {
  color: #F5F5F5;
  font-size: 32px;
  padding: 20px 40px;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(8px);
}

.header-link-title {
  color: white;
  font-size: 16px;
}

.header-link {
  color: white;
  font-size: 16px;
  padding: 0 8px;
}

.header-link-box {
  width: 100vw;
  padding: 8px 0;
  background-color: #00000066;
}

.info-box {
  display: flex;
  gap: 16px;
  text-align: center;
  backdrop-filter: blur(4px);
  background-color: #00000066;
  border-radius: 16px;
  padding: 40px;
  z-index: 1;
}

.header-bg {
  background: url('/header-background.webp') no-repeat;
  background-size: 100% 100%;
}

.header-page {
  height: 100vh;
  width: 100vw;
  background: url('/header-background.webp') no-repeat;
  background-size: auto 100%;
  background-position: center;
  backdrop-filter: blur(64px);
}

.name-box {
  width: 274.03px;
  position: relative;
}

.name-text::before {
  content: '';
  height: 4px;
  background: #B5B5B5;
  display: inline-block;
  position: absolute;
  bottom: -6px;
  width: 0;
  transition: width 0.36s;
}

.name-text:hover::before {
  width: 100%;
}

body {
  background-color: #B388D1;
  margin: 0;
  padding: 0;
}

.name-text {
  animation: text-shadow 0.3s linear infinite;
}

.name-text:hover {
  transition: 1s ease-in-out;
}

.header-container {
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.bar {
  width: 100vw;
  height: 360px;
  background-color: #000000aa;
  backdrop-filter: blur(8px);
}
@keyframes text-shadow {
  0% ,
  25% {
      text-shadow: 2px 2px 2px #D10CBF;
  }

  50% {
      text-shadow: 2px -2px 2px #D10CBF;
  }

  75% {
      text-shadow: -2px 2px 2px #D10CBF;
  }

  100% {
      text-shadow: -2px -2px 2px #D10CBF;
  }
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