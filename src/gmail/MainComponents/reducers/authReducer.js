export default function authReducer(
  user = { loggedIn: null, data: null },
  action
) {
  switch (action.type) {
    case 'LOGIN':
      return { ...user, loggedIn: true, data: action.payLoad };
    case 'LOGOUT':
      return { ...user, loggedIn: false, data: null };
    default:
      return user;
  }
}
