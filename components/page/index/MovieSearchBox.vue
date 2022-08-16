<template>
  <div class="search">
    <input
      v-model="currentValue"
      type="text"
      placeholder="Search"
      class="search-box"
    />
    <button class="clear-button" @click="clearInput">Clear</button>
  </div>
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
  methods: {
    clearInput() {
      this.currentValue = ''
    },
  },
}
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media screen and(max-width: 782px) {
    justify-content: center;
  }
}

.search-box {
  font-size: 18px;
  padding: 5px 15px;

  &:focus-visible {
    outline: none;
  }
}

.clear-button {
  background-color: rgba(225, 18, 18, 0.8);
  color: white;
  font-size: 18px;
  padding: 6px 15px;
  border-radius: 0px 10px 10px 0px;

  &:focus-visible {
    outline: none;
  }
}
</style>
