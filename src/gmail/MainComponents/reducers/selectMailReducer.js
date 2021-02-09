export default function selectMailReducer(mail = {}, action) {
  switch (action.type) {
    case 'SELECTMAIL':
      return { ...action.payLoad };
    default:
      return mail;
  }
}
