<template>
  <section>
    <div id="contact" class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pb-12 md:pb-20">
        <div
          class="bg-primary rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl"
          data-aos="zoom-y-out"
        >
          <div class="flex flex-col lg:flex-row justify-between items-center">
            <div class="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left">
              <h3 class="h3 text-white mb-2">想与我们一起成功？</h3>
              <p class="hidden md:flex text-white text-lg opacity-75">
                我们需要诸如三维动画建模、动画师、文案编纂等方面的人才。戳右侧按钮详细了解
              </p>
              <p class="lg:hidden text-white text-lg opacity-75">
                我们需要诸如三维动画建模、动画师、文案编纂等方面的人才。戳下方按钮详细了解
              </p>
            </div>

            <div>
              <NuxtLink
                class="btn text-primary bg-gradient-to-r from-red-100 to-white"
                to="/join"
              >
                加入和瑛
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
