<template>
    <b-table striped hover :items="items">
    <template v-slot:cell(data)="data">{{ formatDate(data) }}</template>
  </b-table>
</template>

<script>
import moment from "moment";

export default {
  props: {
    items: Array
  },
  name: "TabelaDemonstrativo",
  data() {
    return {
      selecionado: null,
      form: {
        data: "",
        credenciado: "",
        consulta: null,
        valor: null
      },
      consultas: [
        { text: "Selecione", value: null },
        "Odonto",
        "Podologo",
        "Geral",
        "Oftamologista"
      ],
      show: true
      //   items: [
      //     { Data: 40, credenciado: 'José', Consulta: 'Odonto', valor: 'Macdonald' },
      //     // { Data: 21, credenciado: 'Raul', Consulta: 'Podologo', valor: 'Shaw' },
      //     // { Data: 89, credenciado: 'Maria', Consulta: 'Geral', valor: 'Wilson' },
      //     // { Data: 38, credenciado: 'José', Consulta: 'Odonto', valor: 'Carney' },
      //   ],
    };
  },
  methods: {
    formatDate(data) {
      return moment(data.value).format('DD/MM/YYYY')
    }
  }
};
</script>

<style>
</style>
