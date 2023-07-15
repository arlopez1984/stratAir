import {createContext, useState} from 'react'

export const WorkLinesContext = createContext();

const WorkLinesContextContextProvider = ({children}) => {    
 
    const[workLines,setWorkLines] =  useState({id: '', lineName: '',  amountWorkers:0});

    const lines ={
        workLines,
        setWorkLines
    }

  return (
         <WorkLinesContextContextProvider.Provider value = {lines} >
                 {children}
            </WorkLinesContextContextProvider.Provider>
  )
}
export default WorkLinesContextContextProvider