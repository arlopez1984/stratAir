import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"

const Home = () => {
  const {userLogin,setUserLogin} = useContext(AuthContext); 
  return (
    <>
      {userLogin.name !== '' &&(
         <div>         
            <h6><strong>Active admin :</strong> "{userLogin.name} {userLogin.lastname}"</h6>
        </div>)} 
    <div>Hola</div>
    </>
  )
}

export default Home