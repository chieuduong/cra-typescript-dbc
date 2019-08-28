const GET_EMPLOYEE = 'cra/Employees/GET_EMPLOYEE';
const GET_EMPLOYEE_SUCCESS = 'cra/Employees/GET_EMPLOYEE_SUCCESS';
const GET_EMPLOYEE_FAILURE = 'cra/Employees/GET_EMPLOYEE_FAILURE';

export {
  GET_EMPLOYEE,
  GET_EMPLOYEE_SUCCESS,
  GET_EMPLOYEE_FAILURE,
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
