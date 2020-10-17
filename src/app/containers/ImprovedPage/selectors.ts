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
