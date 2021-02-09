export default function sendMsgReducer(compose = false, action) {
  if (action.type === 'SENDMSG') {
    return action.payLoad;
  }
  if (action.type === 'REMOVE') {
    return action.payLoad;
  }
  return compose;
}
