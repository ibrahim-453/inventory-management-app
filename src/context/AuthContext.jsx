import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("user");
    if (data) {
      setUser(JSON.parse(data));
    }
  }, []);

  const signup = (username, email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const signupuser = users.find((data) => data.username === username);

    if (signupuser) {
      alert("User Already Exist or Username Already Taken");
      return false;
    }

    const newUser = {
      id: crypto.randomUUID(),
      username,
      email,
      password,
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("user", JSON.stringify(newUser));
    setUser(newUser);
    return true;
  };

  const login = (username, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const loginuser = users.find(
      (data) => data.username === username && data.password === password
    );

    if (!loginuser) {
      alert("Username or Password is incorrect");
      return false;
    }

    localStorage.setItem("user", JSON.stringify(loginuser));
    setUser(loginuser);
    return true;
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
