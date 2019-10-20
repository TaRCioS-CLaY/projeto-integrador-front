import axios from 'axios';
import { trocarValorKey } from './utils.service';

/**
 * Pega todos os demonstrativos da base
 * @returns {Promise} Uma Promise com um array de demontratativos
 */
export function pegarTodosDemonstrativos(){
    return axios.get('http://localhost:3333/demonstrativos').then((dados) => {
      const array = dados.data.map((e) => {
        e = trocarValorKey('dt_atendimento', 'data', e);
        e = trocarValorKey('ds_credenciado', 'beneficiario', e);
        e = trocarValorKey('ds_procedimento', 'consulta', e);
        e = trocarValorKey('vl_procedimento', 'valor', e);
        return e;
      });
      return array;
    });
  }

/**
 * Pega o demonstrativo do beneficiário dono do Id passado
 * @param {string} id Id do beneficiário
 * @returns {Promise} Uma Promise com um array de demontratativos
 */
export function pegarDemonstrativosPorId(id){
    return axios.get('http://localhost:3333/demonstrativos', {params: {id: id}}).then((dados) => {
      const array = dados.data.map((e) => {
        e = trocarValorKey('dt_atendimento', 'data', e);
        e = trocarValorKey('ds_credenciado', 'credenciado', e);
        e = trocarValorKey('ds_procedimento', 'consulta', e);
        e = trocarValorKey('vl_procedimento', 'valor', e);
        return e;
      });
      return array;
    });
  }