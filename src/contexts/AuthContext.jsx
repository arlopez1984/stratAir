import {createContext, useState} from 'react'

export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {    
 
    const[userLogin,setUserLogin] =  useState({id: '', username: '',  password:'', name:'', lastname:''});

    const data ={
        userLogin,
        setUserLogin
    }

  return (
         <AuthContext.Provider value = {data} >
                 {children}
            </AuthContext.Provider>
  )
}
export default AuthContextProvider