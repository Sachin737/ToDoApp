import { createContext, useState } from "react";

const authContext = createContext();

const AuthProvider = (props) => {
  const [user, setUser] = useState(null);

  return (
    <authContext.Provider value={[user, setUser]}>
      {props.children}
    </authContext.Provider>
  );
};

export { authContext, AuthProvider };
