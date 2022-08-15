<template>
  <main>
    <MainHeader />
    <section class="container">
      <div class="row search-box_wrapper">
        <MovieSearchBox
          v-model="searchBoxValue"
          class="col-12 col-md-5 col-lg-3"
        />
      </div>
      <div class="row movies-list_wrapper">
        <MovieList />
      </div>
    </section>
  </main>
</template>

<script>
import MainHeader from '~/components/template/MainHeader.vue'
import MovieSearchBox from '~/components/page/index/MovieSearchBox.vue'
import MovieList from '~/components/page/index/MoviesList.vue'
export default {
  name: 'IndexPage',
  components: {
    MainHeader,
    MovieSearchBox,
    MovieList,
  },
  data() {
    return {
      searchBoxValue: '',
    }
  },
}
</script>

<style lang="scss" scoped>
.search-box_wrapper {
  margin-top: 40px;
}
</style>
