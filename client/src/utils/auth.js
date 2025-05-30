import { jwtDecode } from 'jwt-decode';

class AuthService {

  getProfile() {
    return jwtDecode(this.getToken())
  }

  isTeacher() {
    if (this.loggedIn()) {
      const token = this.getToken();
      const decoded = jwtDecode(token);

      if (decoded.data.teacherEmail) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  isStudent() {
    if (this.loggedIn()) {
      const token = this.getToken();
      const decoded = jwtDecode(token);

      if (decoded.data.studentEmail) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  loggedIn() {
    const token = this.getToken();

    return token && !this.isTokenExpired(token) ? true : false;
  }

  isTokenExpired(token) {
    const decoded = jwtDecode(token);

    if (decoded.exp < Date.now() / 1000) {
      localStorage.removeItem('id_token');
      return true;
    }
    return false;
  }

  getToken() {
    return localStorage.getItem('id_token');
  }

  login(idToken) {
    localStorage.setItem('id_token', idToken);
  }

  logout() {
    localStorage.removeItem('id_token');
    window.location.assign('/');
  }

}

export default new AuthService();