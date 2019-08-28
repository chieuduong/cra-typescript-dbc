import React, { Component, ReactNode } from 'react';
import { IProps } from './Login.container';

export class Login extends Component<IProps> {
  public render(): ReactNode {
    return (
      <div className="home">
        login page
      </div>
    );
  }
}