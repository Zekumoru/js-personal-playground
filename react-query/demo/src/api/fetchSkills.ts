import { QueryFunctionContext } from 'react-query';
import Skills from '../types/skills.types';
import JsonDbApi from './JsonDbApi';

const fetchSkills = async (
  idOrQueryKey: string | QueryFunctionContext
): Promise<Skills> => {
  const id =
    typeof idOrQueryKey === 'string' ? idOrQueryKey : idOrQueryKey.queryKey[1];
  const response = await JsonDbApi.get(`/skills/${id}`);

  return response.data as Skills;
};

export default fetchSkills;
