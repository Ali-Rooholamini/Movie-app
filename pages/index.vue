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
      <div class="row"></div>
    </section>
  </main>
</template>

<script>
import MainHeader from '~/components/template/MainHeader.vue'
import MovieSearchBox from '~/components/page/index/MovieSearchBox.vue'
export default {
  name: 'IndexPage',
  components: {
    MainHeader,
    MovieSearchBox,
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
