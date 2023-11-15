import axios from 'axios';
import { AuthData } from '@src/modules/auth/domain/interfaces/AuthData';

const API_URL = process.env.REACT_APP_API_URL;
const PREFIX = 'auth';

export const postRegistration = async (data: AuthData) => {
  const { email, password, firstName, lastName } = data;
  try {
    const response = await axios.post(API_URL + `${PREFIX}/registration`, {
      email,
      password,
      firstName,
      lastName,
    });
    alert(response.data.message);
    return response;
  } catch (e: any) {
    alert(e.response.data.message);
    return e.response;
  }
};

export const postLogin = async (data: AuthData) => {
  const { email, password } = data;
  try {
    const response = await axios.post(API_URL + `${PREFIX}/login`, { email, password });
    await localStorage.setItem('token', response.data.token);
    return response;
  } catch (e: any) {
    alert(e.response.data.message);
    return e.response;
  }
};

export const getAuth = async () => {
  try {
    const token = await localStorage.getItem('token');
    const response = await axios.get(API_URL + `${PREFIX}/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    await localStorage.setItem('token', response.data.token);
    return response;
  } catch (e: any) {
    console.log(e.response.data.message);
    await localStorage.removeItem('token');
    return e.response;
  }
};
