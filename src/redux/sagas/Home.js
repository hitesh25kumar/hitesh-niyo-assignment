import { call, put } from 'redux-saga/effects'
import { HomeAPI } from '../api/Home';

export function* homesaga(action) {
  try {
    const response = yield call(HomeAPI,action.data);

    yield put({ type: 'HOME_DATA_SUCCESS', data: response.data,error:response.errorMessage });
  } catch (e) {
    
    yield put({ type: 'HOME_DATA_FALIURE', error: e.message });
  }
}