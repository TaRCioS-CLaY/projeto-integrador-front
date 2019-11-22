<template>

  <b-container>
  <b-navbar type="dark" variant="info">
    
    <b-navbar-nav>
      <b-nav-item href="#">Home</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
  <div><br></div>
  <b-jumbotron id="jumbo" lead="Demonstrativo de Despesas">
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
  <div style="text-align:center;">
    <b-button size="sm" v-on:click="imprimir()" >Gerar PDF</b-button>
  </div>
  </b-container>
</template>

<script>
import TabelaDemonstrativo from './components/TabelaDemonstrativo';

import { pegarBeneficiarios } from './services/beneficiarios.service';
import { pegarDespesasPorId } from './services/demonstrativos.service';

export default {
  name: "app",
  data() {
    return {
      janela: null,
      praImprimir: null,
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
        // { value: "joao", text: "João" },
        // { value: "maria", text: "Maria" },
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
      pegarDespesasPorId(pessoa).then((dados) => dados.map(e => this.items.push(e)));
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
    },
    imprimir(){
      this.praImprimir = document.getElementById('jumbo').innerHTML;
      let janelaImpressao = this.janela.open();      
      janelaImpressao.document.write(`<div v-html="${this.praImprimir}</div>`);
      janelaImpressao.print();
      janelaImpressao.close();
    },

  },
  components: {
    TabelaDemonstrativo
  },
  mounted: function () {
   this.janela = window;
    pegarBeneficiarios().then((dados) => this.options = dados);
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
