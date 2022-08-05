<template>
  <section>
    <MainHeader />
    <Nuxt />
  </section>
</template>

<script>
import MainHeader from '~/components/template/MainHeader.vue'
export default {
  name: 'MainPage',
  components: {
    MainHeader,
  },
}
</script>
