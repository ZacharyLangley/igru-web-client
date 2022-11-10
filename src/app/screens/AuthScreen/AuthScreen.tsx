import React from 'react';
import {Location, Outlet, useLocation, useNavigate} from 'react-router-dom';
import Logo from '../../../common/components/Logo/Logo';
import {RoutePath} from '../../types/routes';

import AuthDialog from './AuthDialog/AuthDialog';
import AuthFooter, {AuthFooterProps} from './AuthFooter/AuthFooter';
import './styles.scss';

interface AuthScreenProps {
  testID?: string;
}

const LoginFooter: AuthFooterProps = {
  title: 'Need an account?',
  linkUrl: RoutePath.REGISTER,
  linkTitle: 'Click Here',
  buttonTitle: 'LOGIN',
};

const RegisterFooter: AuthFooterProps = {
  title: 'Already registed?',
  linkUrl: RoutePath.HOME,
  linkTitle: 'Click Here',
  buttonTitle: 'REGISTER',
};

const determineFooter = (location: Location) => {
  const {pathname} = location;
  if (pathname === RoutePath.HOME) return LoginFooter;
  if (pathname === RoutePath.REGISTER) return RegisterFooter;
  return LoginFooter;
};

const AuthScreen: React.FC<AuthScreenProps> = ({testID = 'auth-screen'}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const branding = (
    <div className={'auth-screen-branding'}>
      <Logo height={100} width={100} hideName />
      <div className={'auth-screen-title'}>{'IGRU'}</div>
    </div>
  );

  const onClick = () => {
    const {pathname} = location;
    if (pathname === RoutePath.HOME) {
      // TODO: ZL | Dispatch Login Action to Execute Login Saga
      navigate(RoutePath.HOME);
    }
    if (pathname === RoutePath.REGISTER) {
      // TODO: ZL | Dispatch Register Action to Execute Register Saga
      navigate(RoutePath.HOME);
    }
  };

  const footerConfig = determineFooter(location);
  return (
    <div id={'auth-screen'} className={'auth-screen-container'}>
      <div className={'auth-screen-content'}>
        <AuthDialog
          header={branding}
          body={<Outlet />}
          footer={<AuthFooter {...footerConfig} onButtonClick={onClick} />}
        />
      </div>
    </div>
  );
};

export default AuthScreen;
