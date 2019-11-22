<template>
<b-container>
    <b-table :responsive="true" striped hover :items="items">
    <template v-slot:cell(data)="data">{{ formatDate(data) }}</template>
    <template v-slot:cell(valor)="valor">{{'R$ ' +formatValor(valor) }}</template>
  </b-table>
  <div v-if="total() != 0">Valor Total: R$ {{total()}}</div>
  </b-container>
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
    },
    total(){
      return this.items.reduce((acc, e) => acc + e.valor,0);
    }
  }
};
</script>

<style>
</style>
