export function openSendMsg() {
  return { type: 'SENDMSG', payLoad: true };
}

export function closeSendMsg() {
  return { type: 'REMOVE', payLoad: false };
}

export function selectMail(mailData) {
  return { type: 'SELECTMAIL', payLoad: mailData };
}

export function logIn(userData) {
  console.log('hey here actions');
  return { type: 'LOGIN', payLoad: userData };
}

export function logOut() {
  return { type: 'LOGOUT' };
}
