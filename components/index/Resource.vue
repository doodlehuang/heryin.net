<template>
  <section class="relative">
    <!-- Section background (needs .relative class on parent and next sibling elements) -->
    <div
      class="absolute inset-0 bg-gray-100 pointer-events-none mb-16"
      aria-hidden="true"
    ></div>

    <div id="how-to-work" class="relative max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-12 md:pt-20">
        <div class="md:grid md:grid-cols-12 md:gap-6">
          <div
            class="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
            data-aos="fade-right"
          >
            <div class="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
              <h3 class="h3 mb-3">我们的资源优势</h3>
              <p class="text-xl text-gray-600">
                和瑛社有各种各样的无论资金、人脉、技术以及实体设备资源，为社内项目的实施提供强有力的保障。
              </p>
            </div>
            <div class="mb-8 md:mb-0">
              <button
                v-for="i in tabContent"
                :key="i.title"
                :class="`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3
                  ${
                    currentTab !== tabContent.indexOf(i)
                      ? 'bg-white shadow-md border-red-200 hover:shadow-lg'
                      : 'bg-red-100 border-transparent'
                  }`"
                @click="
                  (e) => {
                    currentTab = tabContent.indexOf(i)
                  }
                "
              >
                <div>
                  <div class="font-bold leading-snug tracking-tight mb-1">
                    {{ i.title }}
                  </div>
                  <div class="text-gray-600">
                    {{ i.text }}
                  </div>
                </div>
                <div
                  class="flex justify-center items-center w-8 h-8 bg-white text-red-600 rounded-full shadow shrink-0 ml-3"
                  v-html="i.icon"
                ></div>
              </button>
            </div>
          </div>

          <div
            class="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
          >
            <div class="relative flex flex-col text-center lg:text-right">
              <Transition
                v-for="j in tabContent"
                :key="j.title"
                class="w-full"
                enter-active-class="transition ease-in-out duration-700 transform order-first"
                enter-from-class="opacity-0 translate-y-16"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition ease-in-out duration-300 transform absolute"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 -translate-y-16"
              >
                <div
                  class="relative inline-flex flex-col"
                  v-show="currentTab == tabContent.indexOf(j)"
                >
                  <img
                    class="md:max-w-none mx-auto rounded"
                    :src="j.img"
                    width="500"
                    height="375"
                    alt="Tab 03"
                  />
                </div>
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import icons from 'assets/icons/index/resource'
import Tab01 from 'assets/images/index/resource/3.webp'
import Tab02 from 'assets/images/index/resource/1.webp'
import Tab03 from 'assets/images/index/resource/2.webp'

const currentTab = ref(0)

const tabContent = [
  {
    title: '各领域杰出人才',
    text: '服务器运维、三维建模、视频制作、音乐制作、文案编纂、配音……各方面杰出人才汇聚和瑛。',
    icon: icons.moon,
    img: Tab01,
  },
  {
    title: '稳定的服务器',
    text: '以 Minecraft 为主题的和瑛社拥有高性能服务器用以支持中州纪元等多个 MC 服务器项目的运行。',
    icon: icons.thunder,
    img: Tab02,
  },
  {
    title: '高性能工作站',
    text: '一台高性能工作站可以协助我们完成诸如 3D 渲染、航测计算、视频渲染等众多计算密集型繁重任务。',
    icon: icons.arrow,
    img: Tab03,
  },
]
</script>
