import axios from 'axios';
import { api } from 'utils/api';
import { IEmployee } from './constants';

export const employeesRequests = {
  list: () => {
    return axios.get(`${api}/employee`).then(response => {
      return response.data;
    })
  },
  edit: (employeeID: string, employee: IEmployee) => {
    return axios.put(`${api}/employee/${employeeID}`, employee).then(response => {
      return response.data;
    })
  }
}