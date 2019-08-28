import { Action } from 'redux';
import { GET_EMPLOYEE, GET_EMPLOYEE_SUCCESS, IEmployee } from './constants';

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

export type IEmployeeActions = IFetchEmployeesAction | IFetchEmployeesSuccessAction;
