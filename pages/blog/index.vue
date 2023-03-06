<template>
  <div>home</div>
  <ContentList path="/blog" v-slot="{ list }">
    <div
      class="card w-96 bg-base-100 shadow-xl"
      v-for="article in list"
      :key="article._path"
    >
      <div class="card-body">
        <h2 class="card-title">{{ article.title }}</h2>
        <p>{{ article.description }}</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">阅读全文</button>
        </div>
      </div>
    </div>
  </ContentList>
</template>
