import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import AuthLogin from '../components/AuthLogin'

const Login = () => {
   const {data} = useContext(AuthContext)   
  return (    
    <AuthLogin/>  )
}

export default Login