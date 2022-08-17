import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AppDispatch, RootState } from '../store';
import * as sectionSliderActions from '../actions/sectionSliderActions';

// Customized dispatch and selector hooks for the Tuner App
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useActions = () => {
  const dispatch = useAppDispatch();

  return bindActionCreators(
    {
      ...sectionSliderActions,
    },
    dispatch
  );
};
