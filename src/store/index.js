import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    sortOption: 'none', // 'none', 'name', 'year'
    movieList: null,
  },
  getters: {
    sortOption: (state) => state.sortOption,
    movieList: (state) => state.movieList
  },
  mutations: {
    SET_SORT_OPTION(state, option) {
      state.sortOption = option;
    },
    async LOAD_MOVIE_LIST(state) {
      try {
        const response = await axios.get(`${process.env.VUE_APP_API_URL}/movies`);
        if(response.data.data) {
          state.movieList = response.data.data;
        }
      } catch(e) {
        console.log(e);
        
      }
    }
  },
  actions: {
    updateSortOption({ commit }, option) {
      commit('SET_SORT_OPTION', option);
    },
    loadMovieList({ commit }) {
      commit('LOAD_MOVIE_LIST')
    }
  }
})
