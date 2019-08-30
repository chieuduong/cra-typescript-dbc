import React, { PureComponent, ReactNode } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import 'assets/style.scss';
import { HomePage } from 'pages/HomePage';
import { EmployeesList } from 'pages/Employees/EmployeesList';
import { Styleguide } from 'pages/Styleguide';
import { Login } from 'pages/Login';
import Routes from 'utils/routes';
import { TopBar } from 'components/TopBar';
import { Sidebar } from 'components/Sidebar';
import history from 'utils/history';
import store from 'configs/createStore';
import { Provider } from 'react-redux';

export class App extends PureComponent<{}> {
  public render(): ReactNode {
    return (
      <Provider store={store}>
        <div className="app">
          <header className="app-header">
            <TopBar />
          </header>
          <Router history={history}>
            <Sidebar />
            <div className="content-wrapper">
              <Switch>
                <Route
                  path={Routes.login.pathname}
                  component={Login}
                />
                <Route
                  exact
                  path={Routes.home.pathname}
                  component={HomePage}
                />
                <Route
                  exact
                  path={Routes.employee.pathname}
                  component={EmployeesList}
                />
                <Route
                  path={Routes.styleguide.pathname}
                  component={Styleguide}
                />
              </Switch>
            </div>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
