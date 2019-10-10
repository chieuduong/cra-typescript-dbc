import React, { Component, ReactNode } from 'react';
import { Grid, Typography, TableHead, Table, TableRow, TableCell, TableBody, IconButton, Fab } from '@material-ui/core';
import { IProps } from './EmployeesList.container';
import { IEmployee } from '../constants';
import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty';
import { i18n } from 'utils/lib/i18n';
import { EmployeeForm } from '../EmployeeForm';
import { Loading } from 'components/Loading';
import AddIcon from '@material-ui/icons/Add';

export class EmployeesList extends Component<IProps> {

  public componentDidMount(): void {
    this.props.getEmployees();
  }

  public onEditEmployee = (data: IEmployee) => {
    return (): void => {
      this.props.openEmployeeEditionForm(data);
    }
  }

  public onCreateEmployee = () => {
    return (): void => {
      this.props.openCreationForm();
    }
  }


  public render(): ReactNode {
    const { dataEmployees, loadingEmployees } = this.props;

    return (
      <div className="employees">
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <Typography variant="h5" className="mg-10 color-primary">{i18n.t('employees.title')}</Typography>
          </Grid>
          <Grid item xs={4} >
            <Typography variant="h5" className="mg-10 color-primary" align="right">
              <Fab
                size="small"
                color="primary"
                aria-label="add"
                onClick={this.onCreateEmployee()}
              >
                <AddIcon />
              </Fab>
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>{i18n.t('employees.table.header.id')}</TableCell>
                  <TableCell>{i18n.t('employees.table.header.photo')}</TableCell>
                  <TableCell>{i18n.t('employees.table.header.employeeName')}</TableCell>
                  <TableCell>{i18n.t('employees.table.header.role')}</TableCell>
                  <TableCell>{i18n.t('employees.table.header.address')}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {loadingEmployees && (
                  <TableRow>
                    <TableCell colSpan={5} className="loading-row">
                      <Loading />
                    </TableCell>
                  </TableRow>
                )}
                {!isEmpty(dataEmployees) && (
                  map(dataEmployees, (data: IEmployee, index: number): ReactNode => (
                    <TableRow key={index} onClick={this.onEditEmployee(data)}>
                      <TableCell>{data.id}</TableCell>
                      <TableCell>
                        <div className="photo">
                          <img src={data.avatar} alt={data.name} />
                        </div>
                      </TableCell>
                      <TableCell>{data.name}</TableCell>
                      <TableCell>{data.position}</TableCell>
                      <TableCell>{data.address}</TableCell>
                    </TableRow>
                  )))}
              </TableBody>
            </Table>
          </Grid>
        </Grid>
        <EmployeeForm />
      </div>
    );
  }
}