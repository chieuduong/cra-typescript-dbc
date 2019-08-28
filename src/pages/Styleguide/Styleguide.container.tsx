import { connect } from 'react-redux';

import { Styleguide as StyleguideComponent } from './Styleguide.component';

type IMappedProps = ReturnType<typeof mapStateToProps>;
type IDispatchedProps = typeof mapDispatchToProps;

export type IInjectedProps = IMappedProps & IDispatchedProps;

export type IProps = IInjectedProps;

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = {};

export const Styleguide = connect(
  mapStateToProps,
  mapDispatchToProps
)(StyleguideComponent);
