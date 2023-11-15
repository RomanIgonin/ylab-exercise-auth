import { makeAutoObservable } from 'mobx';
import { UserSession } from '@src/modules/auth/domain/interfaces/UserSession';
import { AuthData } from '@src/modules/auth/domain/interfaces/AuthData';
import { getAuth, postLogin, postRegistration } from '@src/modules/auth/store/actions';

class AuthStore {
  session: UserSession | null = null;
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  registration = async (data: AuthData) => {
    this.setLoading(true);
    const res = await postRegistration(data);
    this.setLoading(false);
    return res;
  };

  login = async (data: AuthData) => {
    this.setLoading(true);
    const res = await postLogin(data);
    if (res.data) {
      this.setSession(res.data);
    }
    this.setLoading(false);
    return res;
  };

  logout = async () => {
    this.setLoading(true);
    this.setSession(null);
    await localStorage.removeItem('token');
    this.setLoading(false);
  };

  auth = async () => {
    this.setLoading(true);
    const res = await getAuth();
    if (res.data.user) {
      this.setSession(res.data);
    } else {
      this.setSession(null);
    }
    this.setLoading(false);
    return res;
  };

  private setSession = (user: UserSession | null) => {
    this.session = user;
  };

  private setLoading = (bool: boolean) => {
    this.isLoading = bool;
  };
}

const authStore = new AuthStore();
export default authStore;
