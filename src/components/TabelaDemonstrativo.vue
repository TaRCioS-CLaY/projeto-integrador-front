<template>
    <b-table :responsive="true" striped hover :items="items">
    <template v-slot:cell(data)="data">{{ formatDate(data) }}</template>
    <template v-slot:cell(valor)="valor">{{'R$ ' +formatValor(valor) }}</template>
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
        beneficiario: "",
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
    };
  },
  methods: {
    formatDate(data) {
      return moment(data.value).format('DD/MM/YYYY')
    },
    formatValor(valor){
      return valor.value;
    }
  }
};
</script>

<style>
</style>
