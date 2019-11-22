import axios from 'axios';
import { trocarValorKey } from './utils.service';
const enderecoApi = process.env.API || 'https://teamb2019-com.umbler.net';
/**
 * Pega todos os beneficiários da base
 * @returns {Promise} Uma Promise com um array de beneficiários
 */
export function pegarBeneficiarios(){
    return axios.get(enderecoApi + '/beneficiarios').then((dados) => {
      const array = dados.data.map((e) => {
        e = trocarValorKey('nr_matricula', 'value', e);
        e = trocarValorKey('nm_beneficiario', 'text', e);
        return e;
      });
      return array;
    });
  }