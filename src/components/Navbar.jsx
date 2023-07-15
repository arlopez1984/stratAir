import { Link } from "react-router-dom"
import iconoAdmin from '../images/iconoAdministrator.png'
import closeSecction from '../images/close-secction.png'
import '../css/Home/style.css'
import Swal from 'sweetalert2'
import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const navigate = useNavigate(); 
  const {userLogin,setUserLogin} = useContext(AuthContext)
  
  const Logout=()=>{
    if(userLogin.name !== '')        
    {
      Swal.fire({
        title: 'Are you sure?',
        text: "Close your secction!",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes!'
      }).then((result) => { 
        if (result.isConfirmed) {
          CerrarSecction();       
        }
      })     
    }else{
      Swal.fire('Unregistered administrator!')      
      navigate("/home");
    }
  function CerrarSecction(){
    if(userLogin.name !== ''){
      setUserLogin({id: '', username: '',  password:'', name:'', lastname:''})
      Swal.fire('Secction Close!')      
      navigate("/home");
    }  
  }
  
  }
  return (
    <div className='container-navbar'>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to='/home' className="navbar-brand">Home</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"> Administration</a>  
                <ul className="dropdown-menu navbar-dark bg-dark">                
                <li><Link to= '/worklines' className="dropdown-item">Lines of work</Link></li>
                <li><Link to='/register' className="dropdown-item">Register employees</Link></li>
                <li><Link to= '/invento' className="dropdown-item">Employee distribution</Link></li>
                <li><Link to= '/login' className="dropdown-item">Login</Link></li>
              </ul>          
              </li>
              <li className="nav-item">
                <Link to='/about' className="nav-link">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" Link to="/contact">Contact</Link>
              </li>                       
            </ul>            
            <div className='login-admin-icono'>
              <img className='icono-admin' src={iconoAdmin}  alt="iconoAmin" />
              <Link className="nav-link-login" Link to="/login">Login</Link>
            </div>
            <div className='logout'>
              <img className='logout-admin' src={closeSecction}  alt="closeSecction" />
              <Link className="nav-link-logout" onClick={Logout} Link to="/Home">Logout</Link>
            </div>
          </div>         
        </div>       
        </nav> 
    </div>    
  )
}

export default Navbar