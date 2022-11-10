import {UserActionTypes} from '../types/user';
import {
  DispatchLoginAction,
  DispatchSignOutAction,
  DispatchRegisterAction,
  DispatchResetPasswordAction,
  DispatchCreateSessionAction,
  DispatchValidateSessionAction,
  SetUserInformationAction,
} from '../interfaces/user';

export const dispatchLoginAction = (): DispatchLoginAction => ({
  type: UserActionTypes.DISPATCH_LOGIN_ACTION,
});

export const dispatchSignOutAction = (): DispatchSignOutAction => ({
  type: UserActionTypes.DISPATCH_SIGN_OUT_ACTION,
});

export const dispatchRegisterAction = (): DispatchRegisterAction => ({
  type: UserActionTypes.DISPATCH_REGISTER_ACTION,
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

export const setUserInformationAction = (): SetUserInformationAction => ({
  type: UserActionTypes.SET_USER_INFORMATION_ACTION,
  payload: {
    id: 'mock_user_id',
    firstName: 'mock_first_name',
    lastName: 'mock_last_name',
  },
});
