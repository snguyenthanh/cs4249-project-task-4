import { select, takeLatest } from 'redux-saga/effects';
import moment from 'moment';
import { sendNetworkLog } from 'utils/googleForm';
import { actions } from './slice';
import {
  selectUid,
  selectUseMenuA,
  selectListLength,
  selectSize,
} from './selectors';

// export function* doSomething() {}

export function* sendToGoogleForm({ payload }: any) {
  const uid = yield select(selectUid);
  const use_menu_a = yield select(selectUseMenuA);
  const list_length = yield select(selectListLength);
  const size = yield select(selectSize);

  const { eventname, target, info } = payload;
  const timestamp = moment().format('DD-MM-YYYY hh:mm:ss');
  sendNetworkLog({
    uid,
    timestamp,
    eventname,
    target,
    info,
    use_menu_a,
    list_length,
    size,
  });
}

export function* improvedPageSaga() {
  yield takeLatest(actions.sendToGoogleForm.type, sendToGoogleForm);
}
