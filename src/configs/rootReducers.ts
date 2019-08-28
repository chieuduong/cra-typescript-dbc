import { IEmployeesState, employeesReducer } from "pages/Employees/reducer";
import { combineReducers, Action } from "redux";

export interface IRootState {
  employees: IEmployeesState,
}

export const appReducer = combineReducers({
  employees: employeesReducer
});

export const rootReducer = (state: IRootState | undefined, action: Action) => {
  if (action.type === 'RESET_APP') {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};