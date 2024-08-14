<template>
  <main>
    <Filter />
    <Loader v-if="isLoading"/>
    <div class="card-list" v-if="sortedMovieList">
      <Card 
        v-for="movie in sortedMovieList"
        :key="movie.id"
        :movie="movie"
        :animated="true"
      />
    </div>
  </main>
</template>

<script setup>
import { ref, onBeforeMount, computed } from 'vue';
import { useStore } from 'vuex';
import Filter from '@/components/Filter.vue';
import Loader from '@/components/Loader.vue';
import Card from '@/components/Card.vue';

const store = useStore();
const isLoading = ref(true);

onBeforeMount(() => {
  store.dispatch('loadMovieList');
  store.dispatch('updateSortOption', 'none')
})

const sortedMovieList = computed(() => {
  if(store.state.movieList && sortOption.value) {
    isLoading.value = false;
    return sort();
  }
})

const sortOption = computed(() => {
  return store.state.sortOption;
})

const sort = () => {
  if(sortOption.value === 'name') {
    return store.state.movieList.slice().sort((a, b) => a.title.localeCompare(b.title, 'en', { sensitivity: 'base' }));
  } else if(sortOption.value === 'year') {
    return store.state.movieList.slice().sort((a, b) => a.year - b.year);
  } else {
    return store.state.movieList;
  }
}
</script>

<style lang="scss">
.card-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
</style>