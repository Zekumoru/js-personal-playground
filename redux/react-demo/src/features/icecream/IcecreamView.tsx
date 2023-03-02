import { useSelector, useDispatch } from 'react-redux/es/exports';
import { IRootState } from '../../app/store';
import { ButtonsContainer } from '../../styles';
import { icecreamActions } from './icecreamSlice';

const IcecreamView = () => {
  const dispatch = useDispatch();
  const numOfIcecreams = useSelector(
    (state: IRootState) => state.icecream.numOfIcecreams
  );

  return (
    <div>
      <h2>Number of icecreams: {numOfIcecreams}</h2>
      <ButtonsContainer>
        <button onClick={() => dispatch(icecreamActions.ordered())}>
          Order Icecream
        </button>
        <button onClick={() => dispatch(icecreamActions.restocked(5))}>
          Restock Icecreams
        </button>
      </ButtonsContainer>
    </div>
  );
};

export default IcecreamView;
