import { PayloadAction } from '@reduxjs/toolkit';
import { generateRandomString } from 'utils/crypto';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the ImprovedPage container
export const initialState: ContainerState = {
  uid: generateRandomString(),
  use_menu_a: 'true',
  list_length: 'medium',
  size: 'small',
};

const improvedPageSlice = createSlice({
  name: 'improvedPage',
  initialState,
  reducers: {
    // someAction(state, action: PayloadAction<any>) {},
    sendToGoogleForm(state, action: PayloadAction<any>) {},
    changeQueryParams(state, action: PayloadAction<any>) {
      const { use_menu_a, list_length, size } = action.payload;
      state.use_menu_a = use_menu_a;
      state.list_length = list_length;
      state.size = size;
    },
  },
});

export const { actions, reducer, name: sliceKey } = improvedPageSlice;
