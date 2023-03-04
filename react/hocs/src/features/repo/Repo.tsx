import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/store';
import ListWithLoading from '../../components/ListWithLoading';
import { fetchRepos } from './repoSlice';

const Repo = () => {
  const dispatch = useAppDispatch();
  const { loading, repos } = useAppSelector((state) => state.repo);

  useEffect(() => {
    dispatch(fetchRepos());
  }, []);

  return <ListWithLoading isLoading={loading} repos={repos} />;
};

export default Repo;
