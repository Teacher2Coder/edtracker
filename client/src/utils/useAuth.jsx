/* eslint-disable react-refresh/only-export-components */
import { useState, useEffect, createContext, useContext } from "react";

const Authcontext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken]= useState(localStorage.getItem('token'))

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  }, [token]);

  const login = async (credentials) => {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (response.ok) {
      const data = await response.json();
      setUser(data.user);
      setToken(data.token);
    } else {
      throw new Error('Login failed');
    }
  }

  const logout = () => {
    setUser(null);
    setToken(null);
  };

  const value = {
    user,
    token,
    login,
    logout,
    setToken
  };

  return (
    <Authcontext.Provider value={value}>
      {children}
    </Authcontext.Provider>
  );
}

export const useAuth = () => {
  return useContext(Authcontext);
};