import { connect } from 'react-redux';

import { HomePage as HomePageComponent } from './HomePage.component';

type IMappedProps = ReturnType<typeof mapStateToProps>;
type IDispatchedProps = typeof mapDispatchToProps;

export type IInjectedProps = IMappedProps & IDispatchedProps;

export type IProps = IInjectedProps;

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = {};

export const HomePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePageComponent);
