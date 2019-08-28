import { IEmployeeActions } from './actions';
import { GET_EMPLOYEE, GET_EMPLOYEE_SUCCESS, IEmployee } from './constants';

export interface IEmployeesState {
  list?: IEmployee[],
  loadingEmployees: boolean;
}

export const initialState = {
  list: [],
  loadingEmployees: false,
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
        loadingEmployees: false,
        list: action.payload.employeesData,
      };
    default:
      return state;
  }
};
