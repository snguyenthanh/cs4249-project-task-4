import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.improvedPage || initialState;

export const selectImprovedPage = createSelector(
  [selectDomain],
  improvedPageState => improvedPageState,
);

export const selectUid = createSelector(
  [selectDomain],
  improvedPageState => improvedPageState.uid,
);

export const selectUseMenuA = createSelector(
  [selectDomain],
  improvedPageState => improvedPageState.use_menu_a,
);

export const selectListLength = createSelector(
  [selectDomain],
  improvedPageState => improvedPageState.list_length,
);

export const selectSize = createSelector(
  [selectDomain],
  improvedPageState => improvedPageState.size,
);
