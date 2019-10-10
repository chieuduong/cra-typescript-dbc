import React, { Component, ReactNode } from 'react';
import { LinearProgress } from '@material-ui/core';

export class Loading extends Component {

  public render(): ReactNode {
    return (
      <div className="loading">
        <LinearProgress />
        <LinearProgress color="secondary" variant="query" />
      </div>
    );
  }
}

