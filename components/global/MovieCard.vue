<template>
  <div class="movie-card">
    <div class="movie-card_rating">10</div>
    <div class="movie-card_desc">asdasd</div>
  </div>
</template>

<script>
export default {
  name: 'MovieCard',
  props: {
    movieData: {
      type: [Array, Object],
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.movie-card {
  margin: 20px 0px !important;
  width: 300px;
  height: 425px;
  background-color: blue;
  position: relative;
  overflow: hidden;
  margin: 0;

  .movie-card_rating {
    background-color: red;
    font-weight: 700;
    width: 35px;
    height: 30px;
    border-radius: 0 0 10px 0;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .movie-card_desc {
    padding: 5px;
    width: 100%;
    background-color: rgba(225, 18, 18, 0.8);
    position: absolute;
    bottom: -100%;
    transition: 450ms ease-in;
    left: 0;
  }
}
</style>
