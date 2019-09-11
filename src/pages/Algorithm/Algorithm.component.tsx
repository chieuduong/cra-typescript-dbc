import React, { Component, ReactNode, FC } from 'react';
import algorithm from 'assets/images/algorithm.png';
import { Typography, Tab, Tabs, Grid, Paper, Divider } from '@material-ui/core';
import { algorithms } from './algorithms';
import { i18n } from 'utils/lib/i18n';
import ViewAgenda from '@material-ui/icons/ViewAgenda';

interface ITabPanel {
  value: string;
  isPanel: string;
  children: ReactNode;
}

interface IState {
  selectTab: string;
}

const TabPanel: FC<ITabPanel> = ({ children, isPanel, value }) => {
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={isPanel !== value}
      id={value}
      aria-labelledby={`vertical-tab-${value}`}
    >
      <div>{children}</div>
    </Typography>
  );
}

export class Algo extends Component {
  public state: IState = {
    selectTab: 'palindrome',
  }

  public handleChange = (_event: object, value: string): void => {
    this.setState({
      selectTab: value,
    })
  };

  public render(): ReactNode {
    const { selectTab } = this.state;
    return (
      <div className="algorithm">
        <img className="full-image" src={algorithm} alt="Cra - Algorithm" />
        <div className="list-algo">
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Paper className="content-code">
                <Typography variant="body2" className="mg-10" align="center">
                  <ViewAgenda /> <span className="title">{i18n.t('algorithm.menu.list')}</span>
                </Typography>
                <Divider className="mg-20" />
                <Tabs
                  orientation="vertical"
                  variant="scrollable"
                  value={selectTab}
                  onChange={this.handleChange}
                  aria-label="Vertical tabs example"
                  indicatorColor="primary"
                >
                  {
                    algorithms.map((algo, index) => (
                      <Tab
                        className="algo-menu"
                        key={algo.id}
                        label={`${++index}. ${algo.label}`}
                        value={algo.id}
                        aria-controls={`vertical-tabpanel-${algo.id}`}
                      />
                    ))}
                </Tabs>
              </Paper>
            </Grid>
            <Grid item xs={9}>
              <Paper className="content-code">
                {algorithms.map(algo => (
                  <div key={algo.id}>
                    <TabPanel
                      isPanel={selectTab}
                      value={algo.id}
                    >
                      <Typography variant="h6" className="header-code">
                        {algo.label}
                      </Typography>
                      <div className="preview-code">
                        {algo.content}
                      </div>
                    </TabPanel>
                  </div>
                ))}
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}