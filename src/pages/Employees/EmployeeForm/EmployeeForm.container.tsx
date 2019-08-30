import { connect } from 'react-redux';
import { IRootState } from 'configs/rootReducers';
import { EmployeeForm as EmployeeFormComponent } from './EmployeeForm.component';
import { openFormEmployees, selectEmployeeDetail } from '../selectors';
import { closeFormAction } from '../actions';

interface IOwnProps { };

type IMappedProps = ReturnType<typeof mapStateToProps>;
type IDispatchedProps = typeof mapDispatchToProps;
type IInjectedProps = IMappedProps & IDispatchedProps;
export type IProps = IOwnProps & IInjectedProps;

const mapStateToProps = (state: IRootState) => ({
  openForm: openFormEmployees(state),
  employee: selectEmployeeDetail(state),
});

const mapDispatchToProps = {
  closeForm: closeFormAction,
};

export const EmployeeForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeeFormComponent);
