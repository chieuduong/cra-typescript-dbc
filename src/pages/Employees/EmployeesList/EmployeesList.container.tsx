import { connect } from 'react-redux';
import { getEmployeesAction, openEmployeeEditionFormAction } from '../actions';
import { EmployeesList as EmployeesListComponent } from './EmployeesList.component';
import { IRootState } from 'configs/rootReducers';
import { selectEmployees } from '../selectors';

interface IOwnProps { };

type IMappedProps = ReturnType<typeof mapStateToProps>;
type IDispatchedProps = typeof mapDispatchToProps;
type IInjectedProps = IMappedProps & IDispatchedProps;
export type IProps = IOwnProps & IInjectedProps;

const mapStateToProps = (state: IRootState) => ({
  dataEmployees: selectEmployees(state),
});

const mapDispatchToProps = {
  getEmployees: getEmployeesAction,
  openEmployeeEditionForm: openEmployeeEditionFormAction,
};

export const EmployeesList = connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeesListComponent);