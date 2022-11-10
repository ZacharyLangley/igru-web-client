import React, {ChangeEvent} from 'react';
import {Form, FormGroup, Label, Input} from 'reactstrap';

export interface LoginFormData {
  email?: string;
  password?: string;
}

interface LoginFormProps {
  formData: LoginFormData;
  onChange: (name: string, value: string) => void;
}

export const defaultLoginFormData: LoginFormData = {
  email: undefined,
  password: undefined,
};

const LoginForm: React.FC<LoginFormProps> = ({formData, onChange}) => {
  const onFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e === undefined) return;
    e.preventDefault();
    onChange(e.target.name, e.target.value);
  };

  return (
    <Form>
      <FormGroup floating>
        <Input
          id={'email'}
          name={'name'}
          type={'email'}
          value={formData.email}
          placeholder={''}
          onChange={onFieldChange}
        />
        <Label for={'email'}>{'Email'}</Label>
      </FormGroup>
      <FormGroup floating>
        <Input
          id={'password'}
          name={'password'}
          type={'password'}
          value={formData.password}
          placeholder={''}
          onChange={onFieldChange}
        />
        <Label for={'email'}>{'Password'}</Label>
      </FormGroup>
    </Form>
  );
};

export default LoginForm;