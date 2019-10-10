<template>
  <b-container>
    <b-navbar>
      <b-navbar-brand href="#">Projeto Integrador</b-navbar-brand>
    </b-navbar>
    <b-form-select size="sm" v-model="selecionado" :options="options"></b-form-select>
    <div>{{selecionado}}</div>
    <b-table striped hover :items="items"></b-table>

    <b-button size="sm" v-b-toggle.formTabela>Testar Tabela</b-button>
    <b-collapse id="formTabela" class="mt-2">
      <b-card>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group id="input-group-1" label="Data:" label-for="input-1">
            <b-form-input id="input-1" v-model="form.data" type="date" required></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Credenciado:" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.credenciado"
              required
              placeholder="Insira o nome do credenciado"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-3" label="Consulta:" label-for="input-3">
            <b-form-select id="input-3" v-model="form.consulta" :options="consultas" required></b-form-select>
          </b-form-group>

          <b-form-group id="input-group-4" label="Valor:">
            <b-form-input v-model="form.valor" id="input-4" type="number" required></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
        <b-card class="mt-3" header="Resultado do Form">
          <pre class="m-0">{{ form }}</pre>
        </b-card>
      </b-card>
    </b-collapse>
  </b-container>
</template>

<script>
import moment from "moment";

export default {
  name: "app",
  data() {
    return {
      dataBr: new moment().locale("pt-br"),
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
      show: true,
      items: [
        // { Data: 40, credenciado: 'José', Consulta: 'Odonto', valor: 'Macdonald' },
        // { Data: 21, credenciado: 'Raul', Consulta: 'Podologo', valor: 'Shaw' },
        // { Data: 89, credenciado: 'Maria', Consulta: 'Geral', valor: 'Wilson' },
        // { Data: 38, credenciado: 'José', Consulta: 'Odonto', valor: 'Carney' },
      ],
      options: [
        { value: "joao", text: "João" },
        { value: "maria", text: "Maria" },
        { value: "jose", text: "José" },
        { value: "pedro", text: "Pedro" }
      ],
      showCollapse: true,
      show: true
    };
  },
  methods: {
    moment: function() {
      return moment();
    },
    onSubmit(evt) {
      evt.preventDefault();
      let itemTabela = {
        data: this.form.data,
        credenciado: this.form.credenciado,
        consulta: this.form.consulta,
        valor: this.form.valor
      };
      this.salvarNaTabela(itemTabela);
      this.onReset(evt);
      console.log(this.items);
      alert(JSON.stringify(itemTabela));
      this.onReset(evt);
    },
    salvarNaTabela(item) {
      this.items.push(item);
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.data = moment().format('dddd')
      this.form.credenciado = "";
      this.form.consulta = null;
      this.form.valor = null;
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
