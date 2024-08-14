<template>
  <main>
    <router-link class="link" :to="{ name: 'list' }">
      <img src="../assets/images/arrow.svg" alt="">
      <p>Назад к списку</p>
    </router-link>
    <Loader v-if="isLoading"/>
    <Card :movie="movie" v-if="movie"/>
    <p class="error" v-if="isNotFound">К сожалению, по вашему запросу ничего не найдено...</p>
  </main>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import Card from '@/components/Card.vue';
import Loader from '@/components/Loader.vue';
import axios from 'axios';

const store = useStore();
const route = useRoute();
const filmId = route.params.id;
const movie = ref(null);
const isLoading = ref(true);
const isNotFound = ref(false);

onBeforeMount(() => {
  if(store.getters.movieList) {
    movie.value = store.getters.movieList.find(item => item.id == filmId);
  } else {
    loadFilmById();
  }
  isLoading.value = false;
})

const loadFilmById = async () => {
  try {
    const response = await axios.get(`${process.env.VUE_APP_API_URL}/movie/${filmId}`);
    if(response.data.data) {
      movie.value = response.data.data;
    }
  } catch(e) {
    isNotFound.value = true;
  }
}


</script>

<style lang="scss" scoped>
.link {
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
  padding-bottom: 20px;
  border-bottom: 1px solid $gray;

  p {
    font-size: 20px;
    color: $red-secondary;
    text-decoration: underline;
  }
}

.error {
  font-size: 32px;
  font-weight: 500;
  color: $white;
}
</style>
