import { axios } from '@/lib/axios';
import { EXPLANATION_URL } from '../constant';
import { ExplanationResponseType } from '../types';

export const fetchExplanationFn= (): Promise<ExplanationResponseType> => {
  return axios.get( EXPLANATION_URL );
};