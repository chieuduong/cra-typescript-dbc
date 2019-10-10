import { IRootState } from 'configs/rootReducers';
import { IEmployee } from './constants';

export const selectEmployees = (state: IRootState): IEmployee[] | undefined => {
  return state.employees.list;
}

export const selectLoadingEmployees = (state: IRootState): boolean => {
  return state.employees.loadingEmployees;
}

export const selectEmployeeDetail = (state: IRootState): IEmployee | undefined => {
  return state.employees.dataEmployee;
}

export const openFormEmployees = (state: IRootState): boolean => {
  return state.employees.isOpenForm;
}