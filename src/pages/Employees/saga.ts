import {
  put,
  takeEvery,
  call,
} from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { GET_EMPLOYEE } from './constants';
import { getEmployeesSuccessAction } from './actions';
import { employeesRequests } from './requests';

function* getEmployeesSaga(): SagaIterator {
  const employee = yield call(employeesRequests.list);
  yield put(getEmployeesSuccessAction(employee));
}

export function* employeesActionSaga(): Generator {
  yield takeEvery(GET_EMPLOYEE, getEmployeesSaga);
}