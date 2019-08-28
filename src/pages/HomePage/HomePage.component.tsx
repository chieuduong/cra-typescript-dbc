import React, { Component, ReactNode } from 'react';
import { IProps } from './HomePage.container';
import cra from 'assets/images/cra.png';

export class HomePage extends Component<IProps> {
  public render(): ReactNode {
    return (
      <div className="home">
        <img className="logo" src={cra} alt="Create React App - Typescript - Redux Saga" />
        <p className="text-center">Boilerplate :  Create React App - Typescript - Redux Saga</p>
      </div>
    );
  }
}