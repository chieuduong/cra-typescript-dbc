const GET_EMPLOYEE = 'cra/Employees/GET_EMPLOYEE';
const GET_EMPLOYEE_SUCCESS = 'cra/Employees/GET_EMPLOYEE_SUCCESS';
const GET_EMPLOYEE_FAILURE = 'cra/Employees/GET_EMPLOYEE_FAILURE';
const OPEN_CREATION_FORM = 'cra/Employees/OPEN_CREATION_FORM';
const OPEN_EDITION_FORM = 'cra/Employees/OPEN_EDITION_FORM';
const CLOSE_FORM_EMPLOYEE = 'cra/Employees/CLOSE_FORM_EMPLOYEE';

export {
  GET_EMPLOYEE,
  GET_EMPLOYEE_SUCCESS,
  GET_EMPLOYEE_FAILURE,
  OPEN_EDITION_FORM,
  CLOSE_FORM_EMPLOYEE,
  OPEN_CREATION_FORM,
}

// --- interfaces ---
export interface IEmployee {
  id: string;
  createdAt: string;
  name: string;
  avatar: string;
  address: string;
  position: string;
}

export interface IEmployeeFormValues {
  id: string;
  name: string;
  address: string;
  position: string;
}
