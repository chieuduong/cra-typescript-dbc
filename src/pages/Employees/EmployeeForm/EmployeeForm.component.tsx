import React, { Component, ReactNode } from 'react';
import { IProps } from './EmployeeForm.container';
import { FormDrawer } from 'components/FormDrawer';
import { i18n } from 'utils/lib/i18n';
import { Typography, Divider, Grid, Paper } from '@material-ui/core';

export class EmployeeForm extends Component<IProps> {

  public closeForm = (): void => {
    this.props.closeForm();
  }

  public render(): ReactNode {
    const { openForm, employee } = this.props;
    return (
      <div className="employee-form">
        <FormDrawer openDrawer={openForm} closeAndResetForm={this.closeForm}>
          <Typography
            className="form-title"
            variant="subtitle1"
            gutterBottom
            align="center"
          >
            {employee ? employee.name : i18n.t('employees.form.title')}
          </Typography>
          <Divider />
          <br />
          {employee && (
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper>{employee.id}</Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper>{employee.position}</Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper>{employee.address}</Paper>
              </Grid>
            </Grid>
          )}
        </FormDrawer>
      </div>
    );
  }
}