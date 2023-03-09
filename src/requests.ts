import { useMutation } from 'react-query';
import axios from 'axios';
import { API_URL } from './util';

const URL = API_URL();

export const contact = async (rData: URLSearchParams|FormData) => {
  const { data } = await axios.post(`${URL}/contact.php`, rData);
  return data;
}
export const useContact = (options?: any) => {
  return useMutation(contact, options);
}