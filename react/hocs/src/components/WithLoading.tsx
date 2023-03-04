import type { ComponentType } from 'react';
import { ListProps } from './List';

const WithLoading =
  (Component: ComponentType<ListProps>) =>
  ({ isLoading, ...props }: { isLoading: boolean } & ListProps) => {
    if (!isLoading) return <Component {...props} />;
    return <p>The data is still being fetched...</p>;
  };

export default WithLoading;
