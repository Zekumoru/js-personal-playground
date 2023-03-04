import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { ButtonsContainer } from '../../styles';
import { cakeActions } from './cakeSlice';

const CakeView = () => {
  const numOfCakes = useAppSelector((state) => state.cake.numOfCakes);
  const dispatch = useAppDispatch();

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
