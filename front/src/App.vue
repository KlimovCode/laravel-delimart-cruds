<template>
  <div id="app">
    <h1>Hello Vue!</h1>
    <h2>{{ test }}</h2>
  </div>
</template>

<style lang="scss">

</style>

<script>
  export default {
    data: () => ({
      test: 'test'
    })
  }
</script>