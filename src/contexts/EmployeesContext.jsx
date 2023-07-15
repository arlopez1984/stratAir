import {createContext, useState} from 'react'

export const EmployeesContext = createContext();

const EmployessContextProvider = ({children}) => {    
 
    const[userRegister,setUserRegister] =  useState([]);

    const data ={
        userRegister,
        setUserRegister
    }

  return (
         <EmployeesContext.Provider value = {data} >
                 {children}
            </EmployeesContext.Provider>
  )
}
export default EmployessContextProvider