import { fork, ForkEffectDescriptor, SimpleEffect } from 'redux-saga/effects';
import { employeesActionSaga } from 'pages/Employees/saga';

export function* rootSaga(): IterableIterator<SimpleEffect<'FORK', ForkEffectDescriptor>> {
  yield fork(employeesActionSaga);
}
