import * as yup from 'yup';

import { i18n } from './i18n';

export const yupRefRegex = /^[a-z\d\-_.]*$/;

export const yupErrors = {
  required: 'required',
  numberExpected: 'numberExpected',
  invalidRef: 'invalidRef',
  invalidEmail: 'invalidEmail',
  invalidMinLength: 'invalidMinLength',
  minNumber: 'minNumber',
  maxNumber: 'maxNumber',
};

export const translateYupError = (errorKey: string): string => {
  return i18n.t(`yup.errors.${errorKey}`);
};

export const translateLimitNumberYupError = (errorKey: string, num: number): string => {
  return i18n.t(`yup.errors.${errorKey}`, { num });
};

export const getYupStringValidation = (required: boolean = false, isRef: boolean = false) => {
  let stringValidation = yup.string().nullable();

  if (required) {
    stringValidation = stringValidation.required(translateYupError(yupErrors.required));
  }

  if (isRef) {
    stringValidation = stringValidation.matches(yupRefRegex, translateYupError(yupErrors.invalidRef));
  }

  return stringValidation;
};

export const getYupNumberValidation = (
  required: boolean = false,
  min: number | undefined = undefined,
  max: number | undefined = undefined
) => {
  let numberValidation = yup
    .number()
    .nullable()
    .typeError(translateYupError(yupErrors.numberExpected));

  if (required) {
    numberValidation = numberValidation.required(translateYupError(yupErrors.required));
  }
  if (min) {
    numberValidation = numberValidation.min(min, translateLimitNumberYupError(yupErrors.minNumber, min));
  }
  if (max) {
    numberValidation = numberValidation.max(max, translateLimitNumberYupError(yupErrors.maxNumber, max));
  }

  return numberValidation;
};
