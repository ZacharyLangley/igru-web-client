import {Action} from 'redux';
import {UserActionTypes} from '../types/user';

export interface User {
  id?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
}

export interface DispatchLoginAction extends Action {
  type: UserActionTypes.DISPATCH_LOGIN_ACTION;
}

export interface DispatchSignOutAction extends Action {
  type: UserActionTypes.DISPATCH_SIGN_OUT_ACTION;
}

export interface DispatchRegisterAction extends Action {
  type: UserActionTypes.DISPATCH_REGISTER_ACTION;
}

export interface DispatchResetPasswordAction extends Action {
  type: UserActionTypes.DISPATCH_RESET_PASSWORD_ACTION;
}

export interface DispatchCreateSessionAction extends Action {
  type: UserActionTypes.DISPATCH_CREATE_SESSION_ACTION;
}

export interface DispatchValidateSessionAction extends Action {
  type: UserActionTypes.DISPATCH_VALIDATE_SESSION_ACTION;
}

export interface SetUserInformationAction extends Action {
  type: UserActionTypes.SET_USER_INFORMATION_ACTION;
  payload: User;
}
