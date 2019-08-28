import { IRootState } from 'configs/rootReducers';
import { IEmployee } from './constants';

export const selectEmployees = (state: IRootState): IEmployee[] | undefined => {
  return state.employees.list;
}