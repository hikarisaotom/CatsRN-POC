import {AuthState} from './AuthContext';
type AuthAction =
  | {
      type: 'signIn';
    }
  | {type: 'viewChanged'; payload: string}
  | {
      type: 'logOut';
    }
  | {
      type: 'changeUsername';
      payload: string;
    };

export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'signIn':
      return {
        ...state,
        isLoggedIn: true,
        username: 'no-username-yet',
      };

    case 'viewChanged':
      return {
        ...state,
        favoriteIcon: action.payload,
      };
    case 'logOut':
      return {
        ...state,
        isLoggedIn: false,
        favoriteIcon: undefined,
        username: undefined,
      };
    case 'changeUsername':
      return {
        ...state,
        username: action.payload,
      };

    default:
      return state;
  }
};
