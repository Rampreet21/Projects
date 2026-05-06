import React, { useEffect, useState } from "react";
import { AuthContext } from "./context";
import axios from 'axios';

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  
  useEffect(() => {
    
    axios.get('http://localhost:3000/user')
    .then((res) => {
      setUserData(res.data);
      console.log("User data from Database:", res.data);
    });
  }, []);
  
  return (
    <div>
      <AuthContext.Provider value={[userData, setUserData]}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export { AuthContext };
export default AuthProvider;
