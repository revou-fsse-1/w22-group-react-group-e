import { getCookie } from './cookies';

const checkLogin = () => {
  const token = getCookie('token');
  if (token?.length) return true;
};

export { checkLogin };
