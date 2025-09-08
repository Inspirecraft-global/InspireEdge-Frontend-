import Cookies from 'js-cookie';

export const setAuthTokens = (accessToken, refreshToken) => {
  // Store the access token (the main token used for API calls)
  Cookies.set('Inspire-token', accessToken, {
    expires: 7, // 7 days
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict'
  });
  
  // Optionally store refresh token if provided
  if (refreshToken) {
    Cookies.set('Inspire-refresh-token', refreshToken, {
      expires: 30, // 30 days (longer than access token)
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict'
    });
  }
};

export const getAuthTokens = () => {
  return {
    token: Cookies.get('Inspire-token')
  };
};

export const removeAuthTokens = () => {
  Cookies.remove('Inspire-token');
  Cookies.remove('Inspire-refresh-token');
};

export const isAuthenticated = () => {
  return !!Cookies.get('Inspire-token');
}; 