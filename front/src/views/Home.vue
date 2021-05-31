<template>
  <div class="wrapper">
      <h1>Cruds</h1>
      <div class="cruds__wrapper">
        <CrudComponent
            v-for="crud in cruds"
            v-bind="crud"
            :key="crud.id"
            @update="update"
            @delete="del"
        ></CrudComponent>
      </div>
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
        cruds: [],
        mute: false
      }
    },
    methods: {
        async read() {
            this.mute = true
            const { data } = await axios.get('api/cruds')
            data.forEach(crud => this.cruds.push(new Crud(crud)))
            this.mute = false
        },
        async update(id, color) {
            this.mute = true
            await axios.put(`/api/cruds/${id}`, { color })
            this.cruds.find(crud => crud.id === id).color = color
            this.mute = false
        },
        async del(id) {
            this.mute = true
            await axios.delete(`api/cruds/${id}`)
            let index = this.cruds.findIndex(crud => crud.id === id)
            this.cruds.splice(index, 1)
            this.mute = false
        },
        async create() {
            this.mute = true
            const { data } = await axios.get('api/cruds/create')
            console.log(data);
            this.cruds.push(new Crud(data))
            this.mute = false
        }
    },
    created() {
        this.read()
    },
    watch: {
      mute(val) {
        document.getElementById('mute').className = val ? "on" : "";
      }
    },
}
</script>

<style>
    .cruds__wrapper {
        display: flex;
        flex-wrap: wrap;
        margin: 1em 2em;
    }
</style>