<template>
  <div>
    <div class="movie-card">
      <img
        class="movie-card_background-image"
        :src="'https://image.tmdb.org/t/p/w500' + movieData.poster_path"
        alt=""
      />
      <div class="movie-card_rating">{{ movieData.vote_average }}</div>
      <div class="movie-card_desc">{{ movieData.overview }}</div>
    </div>
    <div class="movie-more-info">
      <strong class="movie-name mb-1">{{ movieData.title }}</strong>
      <span class="movie-release-date mb-3"
        >Release : {{ movieData.release_date }}</span
      >
      <NuxtLink class="movie-link-button" :to="'/' + movieData.id"
        >Get More Info</NuxtLink
      >
    </div>
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
  created() {
    console.log(this.movieData)
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
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  &:hover {
    .movie-card_desc {
      transform: translateY(-100%);
    }
  }

  .movie-card_background-image {
    width: 100%;
    height: 100%;
    display: block;
  }

  .movie-card_rating {
    background-color: rgb(199, 0, 0);
    color: white;
    font-weight: 500;
    width: 40px;
    height: 40px;
    border-radius: 0 0 15px 0;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .movie-card_desc {
    padding: 5px;
    color: white;
    width: 100%;
    font-size: 14px;
    line-height: 28px;
    user-select: none;
    background-color: rgba(225, 18, 18, 0.8);
    position: absolute;
    transform: translateY(100%);
    transition: transform 350ms ease-in-out;
    left: 0;
  }
}

.movie-more-info {
  display: flex;
  flex-direction: column;
  color: white;

  .movie-release-date {
    color: rgb(165, 162, 162);
  }

  .movie-link-button {
    text-decoration: none;
    color: rgba(225, 18, 18, 0.8);
    padding: 5px 10px;
    border: 2px solid rgba(225, 18, 18, 0.8);
    border-radius: 5px;
    text-align: center;
    transition: 250ms ease-in-out;

    &:hover {
      background-color: rgba(225, 18, 18, 0.8);
      color: white;
    }
  }
}
</style>
