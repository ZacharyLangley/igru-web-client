import React, {useState} from 'react';
import AuthForm from '../../AuthForm/AuthForm';
import RegisterForm, {
  defaultRegisterFormData,
} from './RegisterForm/RegisterForm';

interface RegisterProps {
  testID?: string;
  title?: string;
  form?: JSX.Element | JSX.Element[];
}

const Register: React.FC<RegisterProps> = ({
  testID = 'sign-up-form-container',
  title,
  form,
}) => {
  const [formData, setFormData] = useState(defaultRegisterFormData);

  const updateFormData = (key: string, value: number | string) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  return (
    <AuthForm
      title={'CREATE YOUR ACCOUNT'}
      form={<RegisterForm formData={formData} onChange={updateFormData} />}
    />
  );
};

export default Register;
