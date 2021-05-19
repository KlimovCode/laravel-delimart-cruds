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
    }),
    created() {
      fetch("http://localhost:8000/api/test")
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });
    }
  }
</script>