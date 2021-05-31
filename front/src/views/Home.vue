<template>
  <div class="wrapper">
      <h1>Cruds</h1>
      <CrudComponent
        v-for="crud in cruds"
        v-bind="crud"
        :key="crud.id"
        @update="update"
        @delete="del"
      ></CrudComponent>
      <div>
         <button @click="create">Add</button>
      </div>
  </div>
</template>

<script>
import CrudComponent from '../components/Crud.vue'
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
    components: { CrudComponent },
    data() {
      return {
        cruds: []
      }
    },
    methods: {
        async read() {
            const { data } = await axios.get('api/cruds')
            data.forEach(crud => this.cruds.push(new Crud(crud)))
        },
        async update(id, color) {
            await axios.put(`/api/cruds/${id}`, { color })
            this.cruds.find(crud => crud.id === id).color = color
        },
        async del(id) {
            await axios.get('api/cruds')
            let index = this.cruds.findIndex(crud => crud.id === id)
            this.cruds.splice(index, 1)
        },
        async create() {
            const { data } = await axios.get('api/cruds/create')
            console.log(data);
            this.cruds.push(new Crud(data))
        }
    },
    created() {
        this.read()
    }
}
</script>

<style>

</style>