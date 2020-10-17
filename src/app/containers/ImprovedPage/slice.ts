import { PayloadAction } from '@reduxjs/toolkit';
import { generateRandomString } from 'utils/crypto';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the ImprovedPage container
export const initialState: ContainerState = {
  uid: generateRandomString(),
};

const improvedPageSlice = createSlice({
  name: 'improvedPage',
  initialState,
  reducers: {
    // someAction(state, action: PayloadAction<any>) {},
    sendToGoogleForm(state, action: PayloadAction<any>) {},
  },
});

export const { actions, reducer, name: sliceKey } = improvedPageSlice;
