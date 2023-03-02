import { useSelector, useDispatch } from 'react-redux/es/exports';
import { IRootState } from '../../app/store';
import { ButtonsContainer } from '../../styles';
import { cakeActions } from './cakeSlice';

const CakeView = () => {
  const numOfCakes = useSelector((state: IRootState) => state.cake.numOfCakes);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of cakes: {numOfCakes}</h2>
      <ButtonsContainer>
        <button onClick={() => dispatch(cakeActions.ordered())}>
          Order Cake
        </button>
        <button onClick={() => dispatch(cakeActions.restocked(5))}>
          Restock Cakes
        </button>
      </ButtonsContainer>
    </div>
  );
};

export default CakeView;
