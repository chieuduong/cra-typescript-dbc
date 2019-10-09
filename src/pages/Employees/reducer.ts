import { IEmployeeActions } from './actions';
import {
  GET_EMPLOYEE,
  GET_EMPLOYEE_SUCCESS,
  OPEN_EDITION_FORM,
  CLOSE_FORM_EMPLOYEE,
  IEmployee,
  OPEN_CREATION_FORM
} from './constants';

export interface IEmployeesState {
  list?: IEmployee[],
  loadingEmployees: boolean;
  isOpenForm: boolean;
  dataEmployee?: IEmployee;
}

export const initialState = {
  list: [],
  loadingEmployees: false,
  isOpenForm: false,
  dataEmployee: undefined,
};

export const employeesReducer = (
  state: IEmployeesState = initialState,
  action: IEmployeeActions
): IEmployeesState => {
  switch (action.type) {
    case GET_EMPLOYEE:
      return {
        ...state,
        loadingEmployees: true,
      };
    case GET_EMPLOYEE_SUCCESS:
      return {
        ...state,
        loadingEmployees: false,
        list: action.payload.employeesData,
      };
    case OPEN_CREATION_FORM:
      return {
        ...state,
        isOpenForm: true,
      }
    case OPEN_EDITION_FORM:
      return {
        ...state,
        isOpenForm: true,
        dataEmployee: action.payload.employeeData,
      }
    case CLOSE_FORM_EMPLOYEE:
      return {
        ...state,
        isOpenForm: false,
        dataEmployee: undefined,
      }
    default:
      return state;
  }
};
