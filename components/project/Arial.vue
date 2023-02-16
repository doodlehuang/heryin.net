<template>
  <section class="my-20" id="arial">
    <div class="m-10 text-right">
      <h2 class="text-5xl text-primary" style="font-family: Heryin">
        航测建模及制图
      </h2>
      <p class="text-xl">
        基于我们在 Minecraft
        中还原场景的需求，我们衍生出了无人机航测、建模、制图等的业务。
      </p>
    </div>

    <div class="carousel w-full">
      <div
        v-for="(i, index) in content"
        :key="index"
        :id="`b4-slide${index}`"
        class="carousel-item relative w-full"
      >
        <div
          class="w-screen bg-cover bg-center"
          :style="`background-image: url(${i.img});`"
          style="height: 75vh"
        ></div>
        <div
          class="absolute transform bottom-0 w-full p-10 bg-gradient-to-t from-red-900"
        >
          <h1 class="text-4xl text-white" style="font-family: Heryin">
            {{ i.title }}
          </h1>
          <p class="text-white text-md md:text-xl" v-html="i.text"></p>
        </div>
        <div
          class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
        >
          <NuxtLink :to="`#b4-slide${index - 1}`" class="btn btn-circle">
            ❮
          </NuxtLink>
          <NuxtLink :to="`#b4-slide${index + 1}`" class="btn btn-circle">
            ❯
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Img4Arial0 from 'assets/images/project/4-Arial-0.webp'
import Img4Arial1 from 'assets/images/project/4-Arial-1.webp'
import Img4Arial2 from 'assets/images/project/4-Arial-2.webp'
import Img4Arial3 from 'assets/images/project/4-Arial-3.webp'

const content = [
  {
    img: Img4Arial0,
    title: '保定钟楼',
    text: `图中所示为保定市钟楼的三维扫描模型，由我们的无人机航测团队在 2022 年 12 月拍摄。<br />
    该模型使用大疆 Mavic 3 拍摄，使用Context Capture、Blender 等软件进行制作。`,
  },
  {
    img: Img4Arial1,
    title: '军校广场雕塑',
    text: `图中所示为保定市军校广场中央的雕塑，由我们的无人机航测团队在 2022 年 12 月拍摄。<br />
    该模型使用大疆 Mavic 3 拍摄，使用Context Capture、Blender 等软件进行制作。`,
  },
  {
    img: Img4Arial2,
    title: '保定人民广场纪念碑',
    text: `图中所示为保定市人民广场中央的纪念碑三维扫描模型，由我们的无人机航测团队在 2023 年 1 月拍摄。<br />
    该模型使用大疆 Mavic 3 拍摄，使用Context Capture、Blender 等软件进行制作。`,
  },
  {
    img: Img4Arial3,
    title: '军校广场彩虹门',
    text: `图中所示为保定市军校广场极具标志性的彩虹门，由我们的无人机航测团队在 2023 年 1 月拍摄。<br />
    该模型使用大疆 Mavic 3 拍摄，使用Context Capture、Blender 等软件进行制作。`,
  },
]
</script>
