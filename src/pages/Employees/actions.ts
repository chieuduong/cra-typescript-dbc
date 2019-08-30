import { Action } from 'redux';
import {
  GET_EMPLOYEE,
  GET_EMPLOYEE_SUCCESS,
  OPEN_EDITION_FORM,
  CLOSE_FORM_EMPLOYEE,
  OPEN_CREATION_FORM,
  IEmployee
} from './constants';

export interface IFetchEmployeesAction extends Action<'cra/Employees/GET_EMPLOYEE'> { }
export const getEmployeesAction = (): IFetchEmployeesAction => ({
  type: GET_EMPLOYEE,
});

export interface IFetchEmployeesSuccessAction extends Action<'cra/Employees/GET_EMPLOYEE_SUCCESS'> {
  payload: {
    employeesData: IEmployee[],
  };
}
export const getEmployeesSuccessAction = (employeesData: IEmployee[]): IFetchEmployeesSuccessAction => ({
  type: GET_EMPLOYEE_SUCCESS,
  payload: {
    employeesData,
  }
});

export interface IEmployeeEditionFormAction extends Action<'cra/Employees/OPEN_EDITION_FORM'> {
  payload: {
    employeeData: IEmployee;
  };
}

export const openEmployeeEditionFormAction = (employeeData: IEmployee): IEmployeeEditionFormAction => ({
  type: OPEN_EDITION_FORM,
  payload: {
    employeeData,
  },
});

export interface IOpenCreationFormAction extends Action<'cra/Employees/OPEN_CREATION_FORM'> { }
export const openCreationFormAction = (): IOpenCreationFormAction => ({
  type: OPEN_CREATION_FORM,
});

export interface ICloseFormAction extends Action<'cra/Employees/CLOSE_FORM_EMPLOYEE'> { }
export const closeFormAction = (): ICloseFormAction => ({
  type: CLOSE_FORM_EMPLOYEE,
});

export type IEmployeeActions = IFetchEmployeesAction
  | IFetchEmployeesSuccessAction
  | IEmployeeEditionFormAction
  | IOpenCreationFormAction
  | ICloseFormAction;
