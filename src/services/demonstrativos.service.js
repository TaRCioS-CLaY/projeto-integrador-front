import axios from 'axios';
import { trocarValorKey } from './utils.service';
const enderecoApi = process.env.API || 'https://teamb2019-com.umbler.net';
/**
 * Pega todas as despesas da base
 * @returns {Promise} Uma Promise com um array de despesas
 */
export function pegarTodasDespesas(){
    return axios.get(enderecoApi + '/despesas').then((dados) => {
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
 * Pega as despesas do beneficiário dono do Id passado
 * @param {string} id Id do beneficiário
 * @returns {Promise} Uma Promise com um array de despesas
 */
export function pegarDespesasPorId(id){
    return axios.get(enderecoApi + '/despesas', {params: {id: id}}).then((dados) => {
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