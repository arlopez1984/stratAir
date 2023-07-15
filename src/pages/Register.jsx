import { useContext } from "react";
import RegisterEmployed from "../components/RegisterEmployed"
import { AuthContext } from "../contexts/AuthContext"

const Register = () => {
  const {userLogin} = useContext(AuthContext); 
  return (
      <>
        {userLogin.name !== '' &&(
          <>         
              <h6><strong>Active admin :</strong> "{userLogin.name} {userLogin.lastname}"</h6>
              <RegisterEmployed/>
          </>          
          )}
          <div>
            you dont acces!!!
          </div>       
      </>
  )
}

export default Register