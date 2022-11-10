import React, {ChangeEvent} from 'react';
import {Form, FormGroup, Label, Input} from 'reactstrap';
import strings from '../../../../../../common/assets/strings';

export interface LoginFormData {
  email?: string;
  password?: string;
  confirmPassword?: string;
}

interface RegisterFormProps {
  formData: LoginFormData;
  onChange: (name: string, value: string) => void;
}

export const defaultRegisterFormData: LoginFormData = {
  email: undefined,
  password: undefined,
  confirmPassword: undefined,
};

const RegisterForm: React.FC<RegisterFormProps> = ({formData, onChange}) => {
  const invalidConfirmPassword: boolean = formData.confirmPassword !== undefined && formData.confirmPassword !== formData.password;

  const onFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e === undefined) return;
    e.preventDefault();
    onChange(e.target.name, e.target.value);
  };

  const emailField = (
    <FormGroup floating>
      <Input
        id={'email'}
        name={'name'}
        type={'email'}
        value={formData.email}
        placeholder={''}
        onChange={onFieldChange}
      />
      <Label for={'email'}>{strings.auth.register.form_input_email_label}</Label>
    </FormGroup>
  );

  const passwordField = (
    <FormGroup floating>
      <Input
        id={'password'}
        name={'password'}
        type={'password'}
        value={formData.password}
        placeholder={''}
        onChange={onFieldChange}
      />
      <Label for={'password'}>{strings.auth.register.form_input_password_label}</Label>
    </FormGroup>
  );

  const confirmPasswordField = (
    <FormGroup floating>
      <Input
        id={'confirmPassword'}
        name={'confirmPassword'}
        type={'password'}
        value={formData.confirmPassword}
        placeholder={''}
        onChange={onFieldChange}
        invalid={invalidConfirmPassword}
      />
      <Label for={'confirm-password'}>{strings.auth.register.form_input_confirm_password_label}</Label>
    </FormGroup>
  );

  return (
    <Form>
      {emailField}
      {passwordField}
      {confirmPasswordField}
    </Form>
  );
};

export default RegisterForm;
