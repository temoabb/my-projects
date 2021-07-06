import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext({
  isLoggedIn: false,
  onLogout: () => { },
  onLogin: (email, password) => { }
})


export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');
    if (storedUserLoggedInInformation === '1') {
      setIsLoggedIn(true);
    } else {
      console.log('App - not "1"');
    }
  }, []);


  const loginHandler = () => {
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  }

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler
      }}>
      {props.children}
    </AuthContext.Provider>
  )
};



export default AuthContext;