import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AppDispatch, RootState } from '../store';
import * as sectionSliderActions from '../actions/sectionSliderActions';
import * as contactFormActions from '../actions/contactFormActions';
import * as gameActions from '../actions/gameActions';
import * as languageActions from '../actions/languageActions';
import { useMemo } from 'react';

// Customized dispatch and selector hooks for the Tuner App
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useActions = () => {
  const dispatch = useAppDispatch();

  const boundActions = useMemo(
    () =>
      bindActionCreators(
        {
          ...sectionSliderActions,
          ...contactFormActions,
          ...gameActions,
          ...languageActions,
        },
        dispatch
      ),
    [dispatch]
  );

  return boundActions;
};
