<template>
  <div class="card" 
    :class="animated ? 'animated' : 'lifting'"
  >
    <div class="card__image">
      <img 
        alt="Постер" 
        :src="movie.frames[0]" 
        class="card__img" 
        v-if="movie.frames"
      >
    </div>

    <div class="card__preview">
      <router-link 
        :to="{ name: 'film', params: { id: movie.id } }"
      >
        <h3>{{ movie.title }}</h3>
      </router-link>

      <div class="card__info">
        <span>{{ movie.year }}, {{ formatText(movie.genres) }}</span>
        <span v-if="movie.directors">Режиссёр: {{ formatText(movie.directors) }}</span>

        <div class="card__actors" v-if="movie.actors">
          <span>Актеры:</span>
          <p>{{ formatText(movie.actors) }}</p>
        </div>
      </div>
      
      <p class="card__description" v-if="movie.description">
        {{ movie.description }}
      </p>

      <div class="card__duration" v-if="movie.collapse && movie.collapse.duration">
        <p>{{ movie.collapse.duration.toString() }}</p>
        <img src="../assets/images/Vector.svg" alt="">
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  movie: {
    type: Object,
    required: true
  },
  animated: {
    type: Boolean,
    default: false
  }
});

const formatText = (array) => {
  if(array && array.length) {
    return array.join(', ');
  } else {
    return '';
  }
}
</script>

<style lang="scss" scoped>
.card {
  display: grid;
  grid-template-columns: 168px 1fr;
  background-color: $gray-card-back;
  line-height: 1;
  position: relative;
  cursor: pointer;

  &__image {
    background-color: $gray;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      max-width: 168px;
    }
  }

  &__preview {
    padding: 32px 32px 32px 24px;
  }

  h3 {
      font-size: 36px;
      font-weight: 700;
      color: $white;
      margin-bottom: 12px;
    }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-size: 12px;

    p {
      font-weight: 400;
      color: $light-gray-secondary-font;
    }

    span {
      font-weight: 700;
      color: $gray-secondary-font;
    }
  }

  &__actors {
    display: flex;
    gap: 10px;
    line-height: 1.25;
  }

  &__description {
    padding: 0;
    margin-top: 16px;
    color: $white;
    line-height: 1.25;
  }

  &__duration {
    padding: 6px 28px 6px 18px;
    background-color: $gray;
    color: transparent;
    position: absolute;
    top: 32px;
    right: 0;
    font-size: 12px;
    font-weight: 700;
    display: flex;
    gap: 12px;
    align-items: center;
    color: $black;
    clip-path: polygon(5% 1%, 100% 0, 100% 100%, 0% 100%);
  }
}

.animated:hover {
  box-shadow: 0px 4px 4px 0px #00000040;
  transform: translateY(-8px);
  transition: 0.5s;
}

.lifting {
  animation: lift 1s ease-out forwards;
  margin-top: 50px;
}

@keyframes lift {
  from {
    transform: translateY(100px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>