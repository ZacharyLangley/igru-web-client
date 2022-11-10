import React, {useState} from 'react';
import strings from '../../../../../common/assets/strings';
import AuthForm from '../../AuthForm/AuthForm';
import LoginForm, {defaultLoginFormData} from './LoginForm/LoginForm';

interface LoginProps {
  testID?: string;
  title?: string;
  form?: JSX.Element | JSX.Element[];
}

const Login: React.FC<LoginProps> = ({
  testID = 'sign-in-form-container',
  title,
  form,
}) => {
  const [formData, setFormData] = useState(defaultLoginFormData);

  const updateFormData = (key: string, value: number | string) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  return (
    <AuthForm
      title={strings.auth.login.form_title}
      form={<LoginForm formData={formData} onChange={updateFormData} />}
    />
  );
};

export default Login;
