<script setup lang="ts">
import {
    NFlex,
    NTag
 } from 'naive-ui';

const props = defineProps({
    id: String,
    avatar: String,
    title: String,
    create_time: String,
    description: String,
    author: String,
    tags: Array<string>
})

</script>

<template>
    <n-flex class="post-item-container" justify="start" align="center" style="gap: 0;">
        <div class="post-item-avatar-container">
            <img class="post-item-avatar" :src="props.avatar"/>
        </div>
        <n-flex justify="start" align="start" vertical style="gap: 0;">
            <n-button tag="a" text class="post-item-title"><router-link style="text-decoration: none; color: aquamarine;" :to="'/p/' + id">{{ props.title }}</router-link></n-button>
            <n-text class="post-item-info">创建日期：{{ props.create_time }}</n-text>
            <div class="post-item-description-container">
                <n-text class="post-item-description">{{ props.description }}</n-text>
            </div>
            <n-text class="post-item-info">作者：{{ props.author }}</n-text>
            <n-text class="post-item-info" style="padding: 0 16px 32px 16px;">标签：<n-tag :bordered="false" type="info" class="post-item-tag" v-for="(tag, index) in props.tags" :key="index">{{ tag }}</n-tag></n-text>
        </n-flex>
    </n-flex>
</template>

<style scoped>
    .post-item-container {
        background-color: #00000099;
        min-height: 192px;
        min-width: 1000px;
        border-radius: 16px;
    }

    .post-item-avatar-container {
        width: 192px;
        height: 192px;
        position: relative;
    }

    .post-item-avatar {
        height: 100%;
        width: auto;
        border-radius: 16px 0 0 16px;
    }

    .post-item-title {
        margin: 32px 16px 8px 16px;
        font-size: 32px;
        height: 32px;
    }

    .post-item-time {
        padding: 0 16px;
        color: #999999;
    }

    .post-item-description {
        font-size: 18px;
        color: #FFFFFF;
    }

    .post-item-description-container {
        padding: 0 16px;
        max-width: 1690px;
    }

    .post-item-info {
        padding: 0 16px;
        color: #999999;
        width: 100%;
    }

    .post-item-tag {
        margin: 0 4px;
    }
</style>