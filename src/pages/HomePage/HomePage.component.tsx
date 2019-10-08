import React, { Component, ReactNode } from 'react';
import { IProps } from './HomePage.container';
import cra from 'assets/images/cra.png';
import { Grid } from '@material-ui/core';
import { Buttons } from 'components/Buttons';
import { i18n } from 'utils/lib/i18n';

export class HomePage extends Component<IProps> {


  public render(): ReactNode {
    const changeLanguages = (lng: string) => {
      i18n.changeLanguage(lng);
      return window.location.reload(false);
    }
    return (
      <div className="home">
        <img className="logo" src={cra} alt="Create React App - Typescript - Redux Saga" />
        <p className="text-center">Boilerplate :  Create React App - Typescript - Redux Saga</p>
        <Grid container spacing={3}>
          <Grid item xs={12} className='text-center'>
            <Buttons text="English" color="primary" onClick={() => changeLanguages('en')} />
            <Buttons text="Vietnamese" color="primary" onClick={() => changeLanguages('vn')} />
          </Grid>
        </Grid>
      </div >
    );
  }
}