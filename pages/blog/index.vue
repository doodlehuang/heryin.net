<template>
  <!-- <div>{{ contentQuery }}</div> -->
  <div
    class="card w-96 bg-base-100 shadow-xl"
    v-for="article in list"
    :key="article.link"
  >
    <div class="card-body">
      <h2 class="card-title">{{ article.title }}</h2>
      <p>{{ article.desc }}</p>
      <div class="card-actions justify-end">
        <NuxtLink class="btn btn-primary" :to="article.link">阅读全文</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
type Article = {
  title: string
  date: Date
  desc: string
  link: string
}

const contentQuery = await queryContent().find()
const list = reactive([] as Article[])
for (const article of contentQuery) {
  list.push({
    title: article.title || '无标题',
    date: new Date(article.date),
    desc: article.description,
    link: article._path || '#',
  })
}

list.sort((a, b) => (a.date > b.date ? -1 : 1))

console.log(list)
</script>
