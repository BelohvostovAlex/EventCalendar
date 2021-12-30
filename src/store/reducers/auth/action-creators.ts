import { AppDispatch } from '../..';
import { IUser } from '../../../models/IUser';
import {
  authActionEnum,
  setUserAction,
  setErrorAction,
  setAuthAction,
  setIsLoadingAction,
} from './types';
import axios from 'axios';

export const AuthActionCreators = {
  setUser: (user: IUser): setUserAction => ({ type: authActionEnum.SET_USER, payload: user }),
  setIsAuth: (auth: boolean): setAuthAction => ({ type: authActionEnum.SET_AUTH, payload: auth }),
  setError: (err: string): setErrorAction => ({ type: authActionEnum.SET_ERROR, payload: err }),
  setIsLoading: (loading: boolean): setIsLoadingAction => ({
    type: authActionEnum.SET_IS_LOADING,
    payload: loading,
  }),
  login: (username: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(AuthActionCreators.setIsLoading(true));
      setTimeout(async () => {
        const response = await axios.get<IUser[]>('./users.json');
        const mockUser = response.data.find(
          (item: IUser) => username === item.username && password === item.password,
        );
        if (mockUser) {
          localStorage.setItem('auth', 'true');
          localStorage.setItem('username', mockUser.username);
          dispatch(AuthActionCreators.setUser(mockUser));
          dispatch(AuthActionCreators.setIsAuth(true));
        } else {
          dispatch(AuthActionCreators.setError('Incorrect username or pass'));
        }
        dispatch(AuthActionCreators.setIsLoading(false));
      }, 500);
    } catch (error) {
      dispatch(
        AuthActionCreators.setError('Whoops... cant login, please check ur username and pass'),
      );
    }
  },
  logout: () => async (dispatch: AppDispatch) => {
    localStorage.removeItem('auth');
    localStorage.removeItem('username');
    dispatch(AuthActionCreators.setUser({} as IUser));
    dispatch(AuthActionCreators.setIsAuth(false));
  },
};
