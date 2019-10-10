import { connect } from 'react-redux';
import { getEmployeesAction, openEmployeeEditionFormAction, openCreationFormAction } from '../actions';
import { EmployeesList as EmployeesListComponent } from './EmployeesList.component';
import { IRootState } from 'configs/rootReducers';
import { selectEmployees, selectLoadingEmployees } from '../selectors';

interface IOwnProps { };

type IMappedProps = ReturnType<typeof mapStateToProps>;
type IDispatchedProps = typeof mapDispatchToProps;
type IInjectedProps = IMappedProps & IDispatchedProps;
export type IProps = IOwnProps & IInjectedProps;

const mapStateToProps = (state: IRootState) => ({
  dataEmployees: selectEmployees(state),
  loadingEmployees: selectLoadingEmployees(state),
});

const mapDispatchToProps = {
  getEmployees: getEmployeesAction,
  openEmployeeEditionForm: openEmployeeEditionFormAction,
  openCreationForm: openCreationFormAction,
};

export const EmployeesList = connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeesListComponent);
