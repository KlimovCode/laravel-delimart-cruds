<template>
  <div>
      <h1>Hello Vue</h1>
      <h2>{{ message }}</h2>
      <hr>
      <img src="assets/img/vue.png" alt="">
      <img src="assets/img/webpack.png" alt="">
  </div>
</template>

<script>
export default {
    data() {
        return {
            message: null
        }
    },
    created() {
        this.message = this.$store.getters.getMessage
    }
}
</script>

<style scoped>
    img {
        width: 300px;
    }
    h1 {
        text-decoration: underline;
    }
</style>