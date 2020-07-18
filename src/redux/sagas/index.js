import { takeLatest, all } from 'redux-saga/effects';

import { homesaga } from './Home';
 
function* actionWatcher(){
yield takeLatest('HOME_DATA_REQUEST', homesaga)
}

export default function* rootSaga() {
  yield all([
    actionWatcher()
  ]);


}