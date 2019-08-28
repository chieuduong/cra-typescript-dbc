import {
  put,
  takeEvery,
  call,
} from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { GET_EMPLOYEE } from './constants';
import { getEmployeesSuccessAction } from './actions';

const getEmployee = async () => {
  try {
    const data = await fetch('http://5d64d48426046800144d78fa.mockapi.io/employee');
    return data.json();
  } catch (error) {
    console.log(error);
  }
}

function* getEmployeesSaga(): SagaIterator {
  const employee = yield call(getEmployee);
  yield put(getEmployeesSuccessAction(employee));
}

export function* employeesActionSaga(): Generator {
  yield takeEvery(GET_EMPLOYEE, getEmployeesSaga);
}