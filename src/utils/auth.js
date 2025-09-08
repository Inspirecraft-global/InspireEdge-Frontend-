import Cookies from 'js-cookie';

export const setAuthTokens = (accessToken, refreshToken) => {
  Cookies.set('Inspire-token', accessToken, {
    expires: 7,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
  });

  if (refreshToken) {
    Cookies.set('Inspire-refresh-token', refreshToken, {
      expires: 30,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
    });
  }
};

export const getAuthTokens = () => {
  return {
    token: Cookies.get('Inspire-token'),
  };
};

export const removeAuthTokens = () => {
  Cookies.remove('Inspire-token');
  Cookies.remove('Inspire-refresh-token');
};

export const isAuthenticated = () => {
  return !!Cookies.get('Inspire-token');
};
