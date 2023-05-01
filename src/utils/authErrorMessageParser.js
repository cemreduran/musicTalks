const errorMessageMapper = {
  'auth/invalid-email': 'Geçersiz e-posta adresi',
  'auth/email-already-in-use': 'Bu e-posta adresi zaten alınmış',
  'auth/email-already-exists': 'Kullanıcı zaten kayıtlı',
  'auth/user-not-found': 'Kullanıcı bulunamadı',
  'auth/weak-password': 'Parola çok zayıf',
  'auth/wrong-password': 'Parola geçersiz',
};

function authErrorMessageParser(errorCode) {
  return errorMessageMapper[errorCode];
}

export default authErrorMessageParser;
