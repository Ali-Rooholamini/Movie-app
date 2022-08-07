<template>
  <section class="main-header">
    <img src="_nuxt/img/movieHero.jpg" alt="Now Streaming WebSite" />
    <div class="main-header_content-wrapper">
      <span v-if="!$nuxt.isOffline">Now Streaming</span>
      <span v-else class="offline">You Are Offline</span>
      <h1>Now Streaming</h1>
      <button class="main-header_button">View Movies</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MainHeader',
}
</script>

<style lang="scss" scoped>
.main-header {
  width: 100%;
  height: 550px;
  overflow: hidden;
  position: relative;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(50%);
  }

  .main-header_content-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 99;
    position: absolute;
    top: 0;

    @media screen and (min-width: 750px) {
      align-items: flex-start;
      margin-left: 50px;
    }

    @media screen and (min-width: 970px) {
      margin-left: 150px;
    }

    .offline {
      background-color: rgb(255, 0, 0);
    }

    > span {
      font-size: 12px;
      background-color: rgb(142, 198, 58);
      color: white;
      padding: 5px 10px;
      border-radius: 5px;
    }

    > h1 {
      font-size: 32px;
      margin-top: 20px;
      margin-bottom: 20px;
      color: white;

      @media screen and (min-width: 540px) {
        font-size: 42px;
      }

      @media screen and (min-width: 750px) {
        margin-top: 0;
        font-size: 64px;
      }
    }

    .main-header_button {
      background-color: rgb(190, 0, 0);
      color: white;
      border-radius: 5px;
      font-size: 18px;
      padding: 3px 8px 4px 8px;

      &:hover {
        background-color: rgb(226, 5, 5);
      }

      &:active {
        background-color: rgb(192, 4, 4);
      }
    }
  }
}
</style>
