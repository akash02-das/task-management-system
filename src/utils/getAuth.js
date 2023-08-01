export const getAuth = () => {
  const user = sessionStorage.getItem('email');
  if (user === '' || user === null) {
    return false;
  }

  return true;
};

export const currentUser = () => {
  const user = sessionStorage.getItem('email');

  if (getAuth()) {
    return user;
  }
};
