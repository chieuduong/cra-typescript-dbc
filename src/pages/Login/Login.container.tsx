import { connect } from 'react-redux';

import { Login as LoginComponent } from './Login.component';

type IMappedProps = ReturnType<typeof mapStateToProps>;
type IDispatchedProps = typeof mapDispatchToProps;

export type IInjectedProps = IMappedProps & IDispatchedProps;

export type IProps = IInjectedProps;

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = {};

export const Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent);
