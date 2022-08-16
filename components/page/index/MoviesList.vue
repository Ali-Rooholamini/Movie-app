<template>
  <div class="movie-list">
    <MovieCard
      v-for="movie in moviesData"
      :key="movie.id"
      :movie-data="movie"
    />
  </div>
</template>

<script>
import MovieCard from '~/components/global/MovieCard.vue'

import { getLatestMovies, getSearchedMovies } from '~/services/data'
export default {
  name: 'MoviesList',
  components: {
    MovieCard,
  },
  props: {
    searchedMovies: {
      type: String,
      required: false,
      default: '',
    },
  },
  data() {
    return {
      moviesData: {},
    }
  },
  watch: {
    searchedMovies(newValue) {
      if (newValue !== '') {
        this.searchMovies()
      } else {
        this.LatestMovies()
      }
    },
  },
  created() {
    getLatestMovies(this.$axios).then(({ data }) => {
      this.moviesData = data.results
    })
  },
  methods: {
    LatestMovies() {
      getLatestMovies(this.$axios).then(({ data }) => {
        this.moviesData = data.results
      })
    },
    searchMovies() {
      getSearchedMovies(this.$axios, this.searchedMovies).then(({ data }) => {
        this.moviesData = data.results
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.movie-list {
  display: flex;
  justify-content: center;

  flex-wrap: wrap;
  margin: 30px 0px;

  @media screen and(min-width: 768px) {
    justify-content: space-between;
  }
}
</style>
