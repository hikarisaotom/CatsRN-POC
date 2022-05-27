import {FirebaseAuthTypes} from '@react-native-firebase/auth';
export interface AuthState {
  status: 'checking' | 'authenticated' | 'not-authenticated';
  token: string | null;
  errorMessage: string;
  message: string;
  user: FirebaseAuthTypes.User | null;
}

export interface RegisterData {
  email: string;
  password: string;
}

type AuthAction =
  | {type: 'signUp'; payload: {token: string; user: FirebaseAuthTypes.User}}
  | {type: 'addError'; payload: string}
  | {type: 'addMsg'; payload: string}
  | {type: 'removeError'}
  | {type: 'removeMsg'}
  | {type: 'notAuthenticated'}
  | {type: 'logout'};

export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'addMsg':
      return {
        ...state,
        message: action.payload,
      };
    case 'removeMsg':
      return {
        ...state,
        message: '',
      };
    case 'addError':
      return {
        ...state,
        user: null,
        status: 'not-authenticated',
        token: null,
        errorMessage: action.payload,
      };

    case 'removeError':
      return {
        ...state,
        errorMessage: '',
      };

    case 'signUp':
      return {
        ...state,
        errorMessage: '',
        status: 'authenticated',
        token: action.payload.token,
        user: action.payload.user,
      };

    case 'logout':
      return {
        errorMessage: '',
        status: 'not-authenticated',
        token: null,
        user: null,
        message:''
      };
    case 'notAuthenticated':
      return {
        ...state,
        status: 'not-authenticated',
        token: null,
        user: null,
      };

    default:
      return state;
  }
};
