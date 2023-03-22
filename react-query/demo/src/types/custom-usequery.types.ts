import { UseQueryResult } from 'react-query';

type UseCustomQueryResult<PropertyName extends string, DataResult> = Omit<
  UseQueryResult,
  'data'
> & {
  [P in PropertyName]: DataResult | undefined;
};

export default UseCustomQueryResult;
