import { createRouter, createWebHistory } from 'vue-router'
import FilmList from '../views/MovieList.vue'
import FilmCard from '../views/MovieCard.vue'

const routes = [
  {
    path: '/',
    name: 'list',
    component: FilmList
  },
  {
    path: '/film/:id',
    name: 'film',
    component: FilmCard
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
