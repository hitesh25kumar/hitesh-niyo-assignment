
import axios from 'axios';
import { BASE_URL } from '../../helpers/helpers';

export async function HomeAPI(data){
    console.log('data: ', data);
   return axios.get(`${BASE_URL}`,{
    params: data
  })
    .then(res => {
        return res
    }).catch(err => {
        return err.response.data
    })
}