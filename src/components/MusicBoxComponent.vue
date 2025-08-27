<script setup lang="ts">
import {
  NSlider
} from 'naive-ui'
import {
  PlaySkipBack,
  PlaySkipForward,
  Play,
  VolumeHigh,
  VolumeMedium,
  VolumeLow,
  VolumeMute,
  Pause,
  MusicalNotes
} from '@vicons/ionicons5'

import { ref, watch, type Ref } from 'vue';
import { getRandomInt } from '../util';

interface musicInfo {
  name: string,
  audioFile: string,
  coverFile: string
}

const musicAudio = ref()
const musicBoxInvisible: Ref<boolean> = ref<boolean>(false);
const musicIsPlaying: Ref<boolean> = ref<boolean>(false);
const musicVolume: Ref<number> = ref<number>(100);
const musicVolumeTemp: Ref<number> = ref<number>(100);
const musics: musicInfo[] = [
  {
    name: '',
    audioFile: '',
    coverFile: ''
  },
  {
    name: '老张 - 草东没有派对',
    audioFile: '/music/audio/老张 - 草东没有派对.mp3',
    coverFile: '/music/cover/瓦合.webp'
  },
  {
    name: '床 - 草东没有派对',
    audioFile: '/music/audio/床 - 草东没有派对.mp3',
    coverFile: '/music/cover/瓦合.webp'
  },
  {
    name: '缸 - 草东没有派对',
    audioFile: '/music/audio/缸 - 草东没有派对.mp3',
    coverFile: '/music/cover/瓦合.webp'
  },
  {
    name: '浴室 - Deca Joins',
    audioFile: '/music/audio/浴室 - Deca Joins.mp3',
    coverFile: 'music/cover/浴室.webp'
  }
]
const musicIndex: Ref<number | undefined> = ref<number | undefined>(undefined);

const musicPause = () => {
  musicIsPlaying.value = false;
  musicAudio.value.pause();
};

const musicPlay = () => {
  if (!musicIndex.value) {
    musicForward();
  }
  musicIsPlaying.value = true;
  musicAudio.value.play();
};

const musicForward = () => {
  if (!musicIndex.value) {
    musicIndex.value = getRandomInt(1, musics.length - 1);
  }
  if (musicIndex.value == musics.length - 1) {
    musicIndex.value = 1;
  } else {
    musicIndex.value += 1;
  }
  musicAudio.value.load();
  musicPlay();
}

const musicBack = () => {
  if (!musicIndex.value) {
    musicIndex.value = getRandomInt(1, musics.length - 1);
  }
  if (musicIndex.value == 1) {
    musicIndex.value = musics.length - 1;
  } else {
    musicIndex.value -= 1;
  }
  musicAudio.value.load();
  musicPlay();
}

const musicVolumnMute = () => {
  musicVolumeTemp.value = musicVolume.value;
  musicVolume.value = 0;
}

const musicVolumnUnmute = () => {
  musicVolume.value = musicVolumeTemp.value;
}

watch(musicVolume, () => {
  musicAudio.value.volume = musicVolume.value / 100;
})
</script>

<template>
    <audio id="music-player" ref="musicAudio" @ended="musicForward()">
        <source :src="musics[musicIndex || 0].audioFile" type="audio/mpeg">
        您的浏览器无法播放音频
    </audio>
    <div class="music-box">
        <n-flex justify="center" v-if="musicBoxInvisible">
            <img class="music-cover" :src="musics[musicIndex || 0].coverFile" :alt="musics[musicIndex || 0].name" @click="musicBoxInvisible = false">
            <n-flex vertical justify="space-around" align="start">
                <n-text class="music-title">{{ musics[musicIndex || 0].name }}</n-text>
                <n-flex justify="center" align="center">
                    <n-button quaternary style="width: 32px; padding: 0;" @click="musicBack"><n-icon :component="PlaySkipBack" size="20px" /></n-button>
                    <n-button quaternary v-if="musicIsPlaying" @click="musicPause" style="width: 32px; padding: 0;"><n-icon :component="Pause" size="20px" /></n-button>
                    <n-button quaternary v-if="!musicIsPlaying" @click="musicPlay" style="width: 32px; padding: 0;"><n-icon :component="Play" size="20px" /></n-button>
                    <n-button quaternary style="width: 32px; padding: 0;" @click="musicForward"><n-icon :component="PlaySkipForward" size="20px" /></n-button>
                    <n-flex justify="center" align="center" style="height: 100%; flex-wrap: nowrap; gap: 0px;">
                    <n-button quaternary v-if="60 < musicVolume && musicVolume <= 100" style="width: 32px; padding: 0;" @click="musicVolumnMute"><n-icon :component="VolumeHigh" size="20px" /></n-button>
                    <n-button quaternary v-if="30 < musicVolume && musicVolume <= 60" style="width: 32px; padding: 0;" @click="musicVolumnMute"><n-icon :component="VolumeMedium" size="20px" /></n-button>
                    <n-button quaternary v-if="0 < musicVolume && musicVolume <= 30" style="width: 32px; padding: 0;" @click="musicVolumnMute"><n-icon :component="VolumeLow" size="20px" /></n-button>
                    <n-button quaternary v-if="musicVolume == 0" style="width: 32px; padding: 0;" @click="musicVolumnUnmute"><n-icon :component="VolumeMute" size="20px" /></n-button>
                    <n-slider v-model:value="musicVolume" :step="1" :min="0" :max="100" keyboard style="width: 64px;"/>
                    </n-flex>
                </n-flex>
            </n-flex>
        </n-flex>
    </div>
    <div class="music-box-folded" v-if="!musicBoxInvisible">
        <n-button quaternary style="height: 40px; width: 40px; padding: 0;" @click="musicBoxInvisible = true">
            <n-icon :component="MusicalNotes" size="32px" />
        </n-button>
    </div>
</template>

<style scoped>

.music-box {
  padding: 24px;
  border-radius: 16px;
  position: absolute;
  z-index: 3;
  background-color: #00000066;
  backdrop-filter: blur(16px);
  left: 64px;
  top: 64px;
  animation: music-box-unfold 150ms ease-out 1;
}

.music-box-folded {
  padding: 16px;
  border-radius: 16px;
  position: absolute;
  z-index: 3;
  background-color: #00000066;
  backdrop-filter: blur(16px);
  left: 64px;
  top: 64px;
  animation: music-box-fold 150ms ease-out 1;
}
.music-cover {
  height: 90px;
  border-radius: 16px;
}

.music-title {
  font-size: 24px;
}

.header-container {
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

@keyframes music-box-fold {
  0% {
    padding: 24px;
    border-radius: 16px;
    width: 378px;
    height: 138px;
  }
  100% {
    padding: 16px;
    border-radius: 16px;
    width: 74px;
    height: 74px;
  }
}

@keyframes music-box-unfold {
  0% {
    padding: 16px;
    border-radius: 16px;
    width: 74px;
    height: 74px;
  }
  100% {
    padding: 24px;
    border-radius: 16px;
    width: 378px;
    height: 138px;
  }
}
</style>