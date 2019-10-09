import React, { PureComponent, ReactNode } from 'react';
import TextField, { FilledTextFieldProps } from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';

interface IProps {
  className?: string,
  errorText?: string,
}

export class TextFields extends PureComponent<IProps & Partial<FilledTextFieldProps>> {

  public render(): ReactNode {
    const { value, name, type, onBlur, error, onChange, label, className, errorText } = this.props;
    return (
      <>
        <TextField
          error={error}
          onChange={onChange}
          aria-describedby="component-helper-text"
          onBlur={onBlur}
          value={value}
          type={type}
          name={name}
          label={label}
          className={`text-field ${className}`}
        // variant="outlined"
        />
        {!!errorText && (
          <Typography variant="body2" gutterBottom className="label-error">
            {errorText}
          </Typography>
        )}
      </>
    );
  }
}
