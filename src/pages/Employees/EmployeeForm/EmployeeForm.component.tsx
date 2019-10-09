import React, { Component, ReactNode } from 'react';
import { IProps } from './EmployeeForm.container';
import { FormDrawer } from 'components/FormDrawer';
import { i18n } from 'utils/lib/i18n';
import { translateYupError, yupErrors } from 'utils/lib/yup';
import { Typography, Divider, Grid, Paper } from '@material-ui/core';
import { TextFields } from 'components/TextFields';
import { Formik, FormikProps } from 'formik';
import { IEmployeeFormValues } from '../constants';
import * as yup from 'yup';
import { Buttons } from 'components/Buttons';
import AddCircle from '@material-ui/icons/AddCircleOutlineOutlined';
import EditRounded from '@material-ui/icons/EditRounded';

export class EmployeeForm extends Component<IProps> {

  private form: Formik<IEmployeeFormValues> | null = null;

  public componentWillUnmount(): void {
    this.props.closeForm();
  }

  private validationSchema = yup.object().shape({
    name: yup
      .string()
      .nullable()
      .required(translateYupError(yupErrors.required)),
    position: yup
      .string()
      .nullable()
      .required(translateYupError(yupErrors.required)),
    address: yup
      .string()
      .nullable()
      .required(translateYupError(yupErrors.required)),
  }) as yup.ObjectSchema<IEmployeeFormValues>;

  public employeeForm = (formikProps: FormikProps<IEmployeeFormValues>): ReactNode => {
    return (
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextFields
            error={!!formikProps.errors.name}
            errorText={formikProps.errors.name}
            label={i18n.t('employees.form.employeeName')}
            value={formikProps.values.name}
            onChange={formikProps.handleChange}
            onBlur={formikProps.handleBlur}
            name="name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextFields
            error={!!formikProps.errors.name}
            errorText={formikProps.errors.name}
            label={i18n.t('employees.form.role')}
            value={formikProps.values.position}
            onChange={formikProps.handleChange}
            onBlur={formikProps.handleBlur}
            name="position"
          />
        </Grid>
        <Grid item xs={12}>
          <TextFields
            error={!!formikProps.errors.name}
            errorText={formikProps.errors.name}
            label={i18n.t('employees.form.address')}
            value={formikProps.values.address}
            onChange={formikProps.handleChange}
            onBlur={formikProps.handleBlur}
            name="address"
          />
        </Grid>
        <Grid item xs={12}>
          <Buttons
            icon={!!formikProps.values.id ? <EditRounded /> : <AddCircle />}
            text={!!formikProps.values.id ? i18n.t('employees.form.update') : i18n.t('employees.form.add')}
            color="primary"
          />
        </Grid>
      </Grid>
    );
  }

  public render(): ReactNode {
    const { openForm, employee } = this.props;
    const initialValues: IEmployeeFormValues = {
      id: employee ? employee.id : '',
      name: employee ? employee.name : '',
      address: employee ? employee.address : '',
      position: employee ? employee.position : '',
    };

    const onSubmit = () => {
      return;
    }

    return (
      <>
        <div className="employee-form">
          <FormDrawer openDrawer={openForm} closeAndResetForm={this.closeForm}>
            <Typography
              className="form-title"
              variant="subtitle1"
              gutterBottom
              align="center"
            >
              {employee ? i18n.t('employees.form.edit') : i18n.t('employees.form.create')}
            </Typography>
            <Divider />
            <br />
            <Formik
              initialValues={initialValues}
              enableReinitialize
              onSubmit={onSubmit}
              validationSchema={this.validationSchema}
              render={this.employeeForm}
              ref={(el: Formik<IEmployeeFormValues> | null): void => {
                this.form = el;
              }}
            />
          </FormDrawer>
        </div>
      </>
    );
  }

  public closeForm = (): void => {
    this.props.closeForm();
  }
}