import { select, takeLatest } from 'redux-saga/effects';
import moment from 'moment';
import { sendNetworkLog } from 'utils/googleForm';
import { actions } from './slice';
import { selectUid } from './selectors';

// export function* doSomething() {}

export function* sendToGoogleForm({ payload }: any) {
  const uid = yield select(selectUid);
  const { eventname, target, info } = payload;
  const timestamp = moment().format('DD-MM-YYYY hh:mm:ss');
  sendNetworkLog({
    uid,
    timestamp,
    eventname,
    target,
    info,
  });
}

export function* improvedPageSaga() {
  yield takeLatest(actions.sendToGoogleForm.type, sendToGoogleForm);
}
