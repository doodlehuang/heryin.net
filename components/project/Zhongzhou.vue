<template>
  <section class="my-20" id="zhongzhou">
    <div class="m-10">
      <h2 class="text-5xl text-primary" style="font-family: Heryin">
        中州纪元
      </h2>
      <p class="text-xl">
        《中州纪元》是由和瑛社团开发的国风开放世界RPG型Minecraft基岩版多人服务器。<br />
        服务器的核心玩法是探索开放世界，体验架空世界观和剧情，<br />
        体验不同于Minecraft原版的新添加元素。<br />
        <NuxtLink
          to="https://mc.heryin.net"
          target="_blank"
          class="link link-primary"
          >前往项目官网了解详情</NuxtLink
        >
      </p>
    </div>

    <div class="carousel w-full">
      <div
        v-for="(i, index) in images"
        :key="index"
        :id="`b1-slide${index}`"
        class="carousel-item relative w-full"
      >
        <div
          class="h-96 w-screen bg-cover bg-center"
          :style="`background-image: url(${i})`"
        ></div>
        <div
          class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
        >
          <NuxtLink :to="`#b1-slide${index - 1}`" class="btn btn-circle">
            ❮
          </NuxtLink>
          <NuxtLink :to="`#b1-slide${index + 1}`" class="btn btn-circle">
            ❯
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Img1Zhongzhou1 from 'assets/images/project/1-Zhongzhou-1.webp'
import Img1Zhongzhou2 from 'assets/images/project/1-Zhongzhou-2.webp'
import Img1Zhongzhou3 from 'assets/images/project/1-Zhongzhou-3.webp'
import Img1Zhongzhou4 from 'assets/images/project/1-Zhongzhou-4.webp'
import Img1Zhongzhou5 from 'assets/images/project/1-Zhongzhou-5.webp'

const images = [
  Img1Zhongzhou1,
  Img1Zhongzhou2,
  Img1Zhongzhou3,
  Img1Zhongzhou4,
  Img1Zhongzhou5,
]
</script>
