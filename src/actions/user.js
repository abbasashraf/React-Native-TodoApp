// @flow

import { LOGIN, LOGOUT } from "./actionsTypes";

export function login(payload: Object) {
  return {
    payload,
    type: LOGIN.REQUEST
  };
}

// export function success(data: Object) {
//   return {
//     data,
//     type: LOGIN.SUCCESS
//   };
// }

// export function failure(errorMessage: Object) {
//   return {
//     errorMessage,
//     type: LOGIN.FAILURE
//   };
// }

export function logout(payload: Object) {
  return {
    // payload,
    type: LOGOUT
  };
}

