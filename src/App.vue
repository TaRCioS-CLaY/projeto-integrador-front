<template>
<div class="container">
  <b-navbar>
    <b-navbar-brand href="#">Projeto Integrador</b-navbar-brand>
  </b-navbar>
  <b-form-select size="sm" v-model="selecionado" :options="options"></b-form-select>
  <div>
    {{selecionado}}
  </div>
   <b-table  striped hover :items="items"></b-table>
</div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      selecionado: null,
      items: [
        { Data: 40, credenciado: 'José', Consulta: 'Odonto', valor: 'Macdonald' },
        { Data: 21, credenciado: 'Raul', Consulta: 'Podologo', valor: 'Shaw' },
        { Data: 89, credenciado: 'Maria', Consulta: 'Geral', valor: 'Wilson' },
        { Data: 38, credenciado: 'José', Consulta: 'Odonto', valor: 'Carney' },
      ],
      options: [
        {value: 'joao', text: 'João'},
        {value: 'maria', text: 'Maria'},
        {value: 'jose', text: 'José'},
        {value: 'pedro', text: 'Pedro'},
      ],
      show: true
    }
  },
  methods: {
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
