import  Navbar  from './Navbar';
import LogoHeaderInitial from '../images/stratair.png';

const Logo = () => {
  return (
    <div className='general'>
      <div className='container-img'>
        <img className='logo-header-initial' src= {LogoHeaderInitial}/>           
      </div>          
  </div>
    )
}

export default Logo