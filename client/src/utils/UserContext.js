import { useState, useEffect, useContext, createContext } from 'react';
import cookie from "js-cookie"

export const UserContext = createContext();
export const useUser = () => useContext(UserContext);

export default function UserProvider({ children }) {
  
  const [ user, setUser ] = useState(null)

  const verifyUser = async() => {
    const authCookie = cookie.get("auth-token")
    if( authCookie ){
      const query = await fetch("/api/user/verify", {
        method: "post",
        body: JSON.stringify({}),
        headers: {
          "Content-Type": "application/json",
          "Auth-Token": authCookie
        }
      })
      const result = await query.json()

      if( result && result._id ){
        setUser(result)
      }
    }
  }

  useEffect(() => {
    verifyUser()
  },[])


  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  );
}
