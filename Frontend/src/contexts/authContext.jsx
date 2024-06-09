import { createContext, useEffect, useState } from "react";
import Axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const [role, setRole] = useState(null);

  const login = async (inputs) => {
    const res = await Axios.post(
      `${import.meta.env.VITE_API_URL}/auth/login`,
      inputs,
      {
        withCredentials: true,
      }
    );
    setCurrentUser(res.data);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  useEffect(() => {
    const fetchUserRole = async () => {
      if (currentUser && currentUser.id) {
        try {
          const res = await Axios.get(
            `${import.meta.env.VITE_API_URL}/users/usuario/${currentUser.id}`
          );
          setRole(res.data[0].role);
          console.log(role);
        } catch (error) {
          console.log(error);
        }
      }
    };
    fetchUserRole();
  }, [currentUser]);

  const logout = async () => {
    await Axios.post(`${import.meta.env.VITE_API_URL}/auth/logout`);
    setCurrentUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ currentUser, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
