<template>
  <div class="wrapper">
      <h1>Cruds</h1>
      <Crud />
      <Crud />
      <Crud />
  </div>
</template>

<script>
import Crud from '../components/Crud.vue'
import axiosBase from 'axios'
const axios = axiosBase.create({
  baseURL: 'http://api.laravel-demiart-cruds/back/public/'
});

function Crud({ id, color, name}) {
    this.id = id;
    this.color = color;
    this.name = name;
}

export default {
    components: { Crud },
    data() {
      return {
        cruds: []
      }
    },
    methods: {
        async read() {
            const data = axios.get('api/cruds')
            console.log(data);
        }
    },
    created() {
        this.read()
    }
}
</script>

<style>

</style>