<template>
  <div class="filter">
    <h2>Фильмы</h2>
    <div class="filter__container">
      <label>
        <input type="checkbox" id="name" @click="sort('name')" v-model="nameOption" :checked="sortOption.includes('name')">
        Отсортировать по названию
      </label>
      <label>
        <input type="checkbox" id="year" @click="sort('year')"
        v-model="yearOption" :checked="sortOption.includes('year')">
        Отсортировать по году
      </label>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
const store = useStore();

const nameOption = ref(false);
const yearOption = ref(false);
const sortOption = ref('none');

const sort = (sortingName) => {
  if(sortOption.value === sortingName) {
    sortOption.value = 'none';
    store.dispatch('updateSortOption', 'none');
  } else {
    sortOption.value = sortingName;
    store.dispatch('updateSortOption', sortingName);
  }
}
</script>

<style lang="scss" scoped>
.filter {
  border-bottom: 1px solid $gray;
  margin-bottom: 40px;

  h2 {
    font-size: 32px;
    font-weight: 500;
    color: $white;
  }

  &__container {
    margin: 16px 0;
    display: flex;
    gap: 32px;

    label {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 16px;
      color: $gray;
      cursor: pointer;

      input {
        appearance: none;
        width: 16px;
        height: 16px;
        background-color: transparent;
        border: 1px solid $gray;
        cursor: pointer;

        &:checked {
          background-color: $red-secondary;
          border-color: $red-secondary;
          background-image: url('../assets/images/arrow.png');
          background-repeat: no-repeat;
          background-position: center;
        }
      }
    }
  }
}
</style>