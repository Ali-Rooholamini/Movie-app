<template>
  <input
    v-model="currentValue"
    type="text"
    placeholder="Search"
    class="search-box"
  />
</template>

<script>
export default {
  name: 'MovieSearchBox',
  data() {
    return {
      currentValue: '',
    }
  },
  watch: {
    currentValue(newValue) {
      this.$emit('input', newValue)
    },
  },
}
</script>

<style lang="scss" scoped>
.search-box {
  font-size: 18px;
  padding: 5px 15px;

  &:focus-visible {
    outline: none;
  }
}
</style>
