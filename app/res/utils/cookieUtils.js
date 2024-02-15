import Cookies from 'js-cookie';

export const setTokenCookie = (token) => {

  Cookies.set('token', token, {
    expires: 30, 
    secure: process.env.NODE_ENV === 'production', 
    sameSite: 'Lax',
  });
};

export const getTokenFromCookie = () => {
    
    let tok =  Cookies.get('token');
  return tok
};
export const removeTokenFromCookie = () => {
  return Cookies.remove('token');
};
