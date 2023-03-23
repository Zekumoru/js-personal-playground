import { QueryFunctionContext } from 'react-query';
import Color from '../types/colors.types';
import JsonDbApi from './JsonDbApi';

const fetchColorsLength = async (): Promise<number> => {
  const response = await JsonDbApi.get('/colors-length');
  const data = response.data as { length: number };
  return data.length;
};

type FetchColorsOption = {
  limit: number;
  page: number;
};

const fetchColors = async (
  optionsOrQueryKey: FetchColorsOption | QueryFunctionContext
): Promise<Color[]> => {
  const options =
    'queryKey' in optionsOrQueryKey
      ? (optionsOrQueryKey.queryKey[1] as FetchColorsOption)
      : optionsOrQueryKey;
  const response = await JsonDbApi.get(
    `/colors?_limit=${options.limit}&_page=${options.page}`
  );

  return response.data as Color[];
};

export default fetchColors;
export { fetchColorsLength };
export type { FetchColorsOption };
