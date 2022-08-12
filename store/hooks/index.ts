import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AppDispatch, RootState } from '../store';
import * as gameActions from '../actions/gameActions';
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useActions = () => {
  const dispatch = useAppDispatch();

  return bindActionCreators(
    {
      ...gameActions,
    },
    dispatch
  );
};
