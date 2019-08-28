import { connect } from 'react-redux';
import { getEmployeesAction } from './actions';
import { Employees as EmployeesComponent } from './Employees.component';
import { IRootState } from 'configs/rootReducers';
import { selectEmployees } from './selectors';

interface IOwnProps { };

type IMappedProps = ReturnType<typeof mapStateToProps>;
type IDispatchedProps = typeof mapDispatchToProps;
type IInjectedProps = IMappedProps & IDispatchedProps;
export type IProps = IOwnProps & IInjectedProps;

const mapStateToProps = (state: IRootState) => ({
  dataEmployees: selectEmployees(state),
});

const mapDispatchToProps = {
  getEmployeesAction: getEmployeesAction,
};

export const Employees = connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeesComponent);
