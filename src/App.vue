<template>

  <b-container>
  <b-navbar type="dark" variant="info">
    
    <b-navbar-nav>
      <b-nav-item href="#">Home</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
  <div><br></div>
  <b-jumbotron  lead="Demonstrativo de Despesas">
    <b-form-group id="input-group-2" label="Beneficiário:" label-for="input-2">
    <b-form-select
      size="sm"
      v-model="selecionado"
      @change="listarDespesas(selecionado)"
      :options="options"
    ></b-form-select>
    </b-form-group>
  
    <TabelaDemonstrativo :items="items"></TabelaDemonstrativo>
</b-jumbotron>

    <b-button size="sm" v-b-toggle.formTabela>Testar Tabela</b-button>
    <b-collapse id="formTabela" class="mt-2">
      <b-card>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group id="input-group-1" label="Data:" label-for="input-1">
            <b-form-input id="input-1" v-model="form.data" type="date" required></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Beneficiário:" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.beneficiario"
              required
              placeholder="Insira o nome do beneficiário"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-3" label="Consulta:" label-for="input-3">
            <b-form-select id="input-3" v-model="form.consulta" :options="consultas" required></b-form-select>
          </b-form-group>

          <b-form-group id="input-group-4" label="Valor:">
            <b-input-group  prepend="R$">
<b-form-input v-model="form.valor" id="input-4" type="number" required></b-form-input>
            </b-input-group>
          </b-form-group>

          <b-button type="submit" variant="primary">Enviar</b-button>
          <b-button type="reset" variant="danger">Limpar</b-button>
        </b-form>
        <b-card class="mt-3" header="Resultado do Form">
          <pre class="m-0">{{ form }}</pre>
        </b-card>
      </b-card>
    </b-collapse>
  </b-container>
</template>

<script>
import TabelaDemonstrativo from "./components/TabelaDemonstrativo";

export default {
  name: "app",
  data() {
    return {
      selecionado: null,
      form: {
        data: "",
        beneficiario: "",
        consulta: "",
        valor: null
      },
      consultas: [
        { text: "Selecione", value: null },
        "Odonto",
        "Podologo",
        "Geral",
        "Oftamologista"
      ],
      items: [],
      options: [
        { value: "joao", text: "João" },
        { value: "maria", text: "Maria" },
      ],
      showCollapse: true,
      show: true,
      //Valores Mock
      joao: {
        despesas: [
          {
            data: "2019-05-13",
            beneficiario: "Raul",
            consulta: "Podologo",
            valor: 100
          },
          {
            data: "2019-12-05",
            beneficiario: "Betina",
            consulta: "Geral",
            valor: 50
          },
          {
            data: "2019-11-10",
            beneficiario: "José",
            consulta: "Odonto",
            valor: 60
          }
        ]
      },
      maria: {
        despesas: [
          {
            data: "2019-05-13",
            beneficiario: "Raiane",
            consulta: "Geral",
            valor: 70
          },
          {
            data: "2019-02-15",
            beneficiario: "Carla",
            consulta: "Podologo",
            valor: 30
          },
          {
            data: "2019-10-06",
            beneficiario: "Diana",
            consulta: "Odonto",
            valor: 300
          }
        ]
      }
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      this.salvarNaTabela(JSON.parse(JSON.stringify(this.form)));

      alert(JSON.parse(JSON.stringify(this.form)));
      this.onReset(evt);
    },
    listarDespesas(pessoa) {
      this.items = [];
      this.pegarDespesas(pessoa).map(e => this.items.push(e));
    },
    pegarDespesas(pessoa) {
      switch (pessoa) {
        case 'maria':
          return this.maria.despesas;
        case 'joao':
          return this.joao.despesas;
      }
    },
    salvarNaTabela(item) {
      this.items.push(item);
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.data = "";
      this.form.beneficiario = "";
      this.form.consulta = "";
      this.form.valor = null;
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  },
  components: {
    TabelaDemonstrativo
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
