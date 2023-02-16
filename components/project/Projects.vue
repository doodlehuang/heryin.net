<template>
  <section>
    <div class="carousel w-full">
      <div
        v-for="(i, index) in projectConent"
        :key="i.title"
        :id="`slide${index}`"
        class="carousel-item relative w-full"
      >
        <NuxtLink :to="i.link">
          <div
            class="h-screen w-screen bg-cover bg-center"
            :style="`background-image: url(${i.img})`"
          ></div>
          <div
            class="absolute transform bottom-0 w-full p-10 bg-gradient-to-t from-red-900"
          >
            <h1
              class="text-4xl md:text-5xl lg:text-6xl text-white"
              style="font-family: Heryin"
            >
              {{ i.title }}
            </h1>
            <p class="text-white text-md md:text-xl">
              {{ i.text }}
            </p>
          </div>
        </NuxtLink>
        <div
          class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
        >
          <NuxtLink :to="`#slide${index - 1}`" class="btn btn-circle">
            ❮
          </NuxtLink>
          <NuxtLink :to="`#slide${index + 1}`" class="btn btn-circle">
            ❯
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import Img1Zhongzhou0 from 'assets/images/project/1-Zhongzhou-0.webp'
import Img2Media0 from 'assets/images/project/2-Media-0.webp'
import Img3MCSvr0 from 'assets/images/project/3-MCSvr-0.webp'
import Img4Arial0 from 'assets/images/project/4-Arial-0.webp'

const projectConent = [
  {
    title: '中州纪元',
    text: '中州纪元是一款国风开放世界 RPG 型 Minecraft 基岩版多人服务器，也是和瑛社主营的项目。',
    img: Img1Zhongzhou0,
    link: '#zhongzhou',
  },
  {
    title: '自媒体事业',
    text: '我们运营自媒体账号，专注于产出高质量 Minecraft 实况、模组介绍、VR 视频等内容。',
    img: Img2Media0,
    link: '#media',
  },
  {
    title: 'MC 服务器运维',
    text: '除中州纪元外，和瑛还运营着和瑛领域、云南大学 Minecraft 服务器、夏纪社区等多个 MC 服务器。',
    img: Img3MCSvr0,
    link: '#mcsvr',
  },
  {
    title: '航测建模及制图',
    text: '基于我们在 Minecraft 中还原场景的需求，我们衍生出了无人机航测、建模、制图等的业务。',
    img: Img4Arial0,
    link: '#arial',
  },
]
</script>
