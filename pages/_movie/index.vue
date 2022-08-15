<template>
  <main class="movie-page">
    <NuxtLink to="/" class="movie-page_link">Back</NuxtLink>
    <section class="movie-page_content-wrapper">
      <div class="movie-page_image">
        <img
          :src="'https://image.tmdb.org/t/p/w500' + movieData.poster_path"
          :alt="movieData.title"
        />
      </div>
      <div class="movie-page_des mt-2">
        <strong class="movie-page_des-title mb-5">
          {{ movieData.title }}</strong
        >
        <span class="movie-page_des-content mb-5">
          Tagline: {{ movieData.tagline }}
        </span>
        <span class="movie-page_des-content mb-5"
          >Release: {{ movieData.release_date }}</span
        >
        <span class="movie-page_des-content mb-5">
          Duration: {{ movieData.runtime }} m
        </span>
        <span class="movie-page_des-content mb-5">
          Revenue: {{ movieData.revenue }}</span
        >
        <p class="movie-page_des-content mb-5">
          Overview: {{ movieData.overview }}
        </p>
      </div>
    </section>
  </main>
</template>

<script>
import { getMovieById } from '~/services/data'
export default {
  name: 'MoviePage',
  data() {
    return {
      movieData: {},
    }
  },
  async created() {
    const data = getMovieById(this.$axios, this.$route.params.movie)
    const result = await data
    this.movieData = result.data
  },
}
</script>

<style lang="scss" scoped>
.movie-page {
  margin: 50px 60px;
  .movie-page_link {
    text-decoration: none;
    background-color: rgba(225, 18, 18, 0.8);
    color: white;
    padding: 5px 15px;
    border-radius: 5px;
    transition: 200ms ease-in;

    &:hover {
      background-color: rgba(130, 0, 0, 0.8);
    }
  }

  .movie-page_image {
    @media screen and(max-width: 556px) {
      width: 280px;
      height: 400px;
      overflow: hidden;

      > img {
        width: 100%;
        height: 100%;
      }
    }

    @media screen and(min-width: 556px) {
      margin-right: 30px;
    }

    @media screen and(min-width: 800px) {
      margin-right: 60px;
    }
  }

  .movie-page_content-wrapper {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and(min-width: 776px) {
      flex-direction: row;
      justify-content: flex-start;
      align-items: flex-start;
    }
  }

  .movie-page_des {
    display: flex;
    flex-direction: column;
    color: white;

    .movie-page_des-title {
      font-size: 26px;
      text-align: center;

      @media screen and(min-width: 776px) {
        font-size: 26px;
        text-align: center;
      }

      @media screen and(min-width: 900px) {
        font-size: 46px;
        text-align: left;
      }
    }

    .movie-page_des-content {
      font-size: 15px;
      font-weight: 500;
      line-height: 28px;
      text-align: center;

      @media screen and(min-width: 776px) {
        font-size: 12px;
        font-weight: 500;
        line-height: 24px;
        text-align: center;
      }

      @media screen and(min-width: 900px) {
        font-size: 20px;
        font-weight: 500;
        line-height: 32px;
        text-align: left;
      }
    }
  }
}
</style>
