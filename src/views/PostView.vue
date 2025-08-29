<script setup lang="ts">
import posts from '@/posts';
import {
  NFlex,
  NScrollbar,
  NText,
  NAvatar
} from 'naive-ui';
import MarkdownIt from 'markdown-it';
import 'github-markdown-css';
import hljs from 'highlight.js/lib/common';
import mermaidMarkdownIt from 'mermaid-it-markdown';
import CommentComponent from '../components/CommentComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import { useRoute } from 'vue-router';
import { ref } from 'vue';

const route = useRoute();
const markdownIt = new MarkdownIt({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return '<div class="code" style="background-color: #00000066; padding: 8px"><span style="margin: 8px; color: #AA00AA">' + lang + '</span><br/>' + hljs.highlight(str, {language: lang}).value + '</div>';
      } catch (e) {
        console.log(e);
      }
    }

    return '';
  }
});

const id = ref('');
const title = ref('');
const content = ref('');
const avatar = ref('');
const description = ref('');
const author = ref('');
const create_time = ref('');
const tags = ref<string[]>([]);

for (let i = 0; i < posts.length; i++) {
  const post = posts[i];
  console.log(route.params.id + ", " + post.id);
  if (post.id == route.params.id) {
    id.value = post.id;
    title.value = post.title;
    avatar.value = post.avatar;
    description.value = post.description;
    author.value = post.author;
    create_time.value = post.create_time;
    tags.value = post.tags;
    content.value = await (await fetch(post.content)).text();
    break;
  }
}

markdownIt.use(mermaidMarkdownIt);
</script>

<template>
    <div class="startup"></div>
    <div class="container">
      <n-scrollbar style="max-height: 100vh;">
          <n-flex class="post-bg" justify="center" align="start">
            <n-flex class="post-page" justify="center" align="start" vertical>
              <router-link to="/" class="post-home-link">&lt; 返回主页</router-link>
              <n-flex justify="space-around">
                <n-flex class="post-content-container" vertical justify="start">
                      <n-text class="post-title">{{ title }}</n-text>
                      <div class="post-content" v-html="markdownIt.render(content)"></div>
                </n-flex>
                <n-flex class="post-props" vertical justify="start">
                  <n-avatar :src="avatar" :size="128"/>
                  <n-text class="post-item-description">{{ description }}</n-text>
                  <n-text class="post-props-text-info">作者：{{ author }}</n-text>
                  <n-text class="post-props-text-info">创建日期：{{ create_time }}</n-text>
                  <n-text class="post-props-text-info">标签：<n-tag :bordered="false" type="info" class="post-item-tag" v-for="(tag, index) in tags" :key="index">{{ tag }}</n-tag></n-text>
                </n-flex>
              </n-flex>
            </n-flex>
          <comment-component :id="id" />
          </n-flex>
          <footer-component />
      </n-scrollbar>
    </div>
</template>

<style scoped>
body {
  background: url('/header-background.webp') no-repeat;
  background-size: 100% 100%;
}

.container {
  background: url('/header-background.webp') no-repeat;
  background-size: 100% 100%;
  margin: 0;
  padding: 0;
  position: relative;
  height: 100vh;
  width: 100vw;
  z-index: 1;
}

.code {
  background-color: #00000066;
  filter: blur(16px);
  margin: 16px;
}

.post-bg {
  min-height: 100vh;
  backdrop-filter: blur(32px);
}

.post-page {
  max-width: 960px;
  min-width: 600px;
  background-color: #00000066;
  backdrop-filter: blur(16px);
  border: 0 transparent;
  padding: 32px;
  margin: 64px;
}

.post-title {
  font-size: 32px;
}

.post-content-container {
  width: 60%;
}

.post-content {
  color: #FFFFFF;
}

.post-props {
  background-color: #00000066;
  padding: 16px;
  width: 27%;
  height: 100%;
}

.post-props-text-info {
  font-size: 14px;
  color: #999999;
}

.post-home-link {
  font-size: 16px;
  color: aquamarine;
  text-decoration: none;
}

.post-item-description {
    font-size: 18px;
    color: #FFFFFF;
}

.post-item-tag {
  margin: 2px 4px;
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