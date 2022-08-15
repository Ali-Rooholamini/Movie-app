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

import getLatestMovies from '~/services/data'
export default {
  name: 'MoviesList',
  components: {
    MovieCard,
  },
  data() {
    return {
      moviesData: {},
    }
  },
  created() {
    getLatestMovies(this.$axios)
      .then(({ data }) => {
        console.log(data.results)
        this.moviesData = data.results
      })
      .catch((e) => {
        console.error(e)
      })
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
