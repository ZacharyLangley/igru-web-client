import {UserActionTypes} from '../types/user';
import {
  DispatchLoginAction,
  DispatchLogoutAction,
  DispatchRegisterAction,
  DispatchResetPasswordAction,
  DispatchCreateSessionAction,
  DispatchValidateSessionAction,
  SetUserInformationAction,
  UserLogin,
  UserRegister,
  User,
} from '../interfaces/user';

export const dispatchLoginAction = (
  payload: UserLogin
): DispatchLoginAction => ({
  type: UserActionTypes.DISPATCH_LOGIN_ACTION,
  payload,
});

export const dispatchLogoutAction = (): DispatchLogoutAction => ({
  type: UserActionTypes.DISPATCH_LOGOUT_ACTION,
});

export const dispatchRegisterAction = (
  payload: UserRegister
): DispatchRegisterAction => ({
  type: UserActionTypes.DISPATCH_REGISTER_ACTION,
  payload,
});

export const dispatchResetPasswordAction = (): DispatchResetPasswordAction => ({
  type: UserActionTypes.DISPATCH_RESET_PASSWORD_ACTION,
});

export const dispatchCreateSessionAction = (): DispatchCreateSessionAction => ({
  type: UserActionTypes.DISPATCH_CREATE_SESSION_ACTION,
});

export const dispatchValidateSessionAction =
  (): DispatchValidateSessionAction => ({
    type: UserActionTypes.DISPATCH_VALIDATE_SESSION_ACTION,
  });

export const setUserInformationAction = (
  payload: User
): SetUserInformationAction => ({
  type: UserActionTypes.SET_USER_INFORMATION_ACTION,
  payload,
});
