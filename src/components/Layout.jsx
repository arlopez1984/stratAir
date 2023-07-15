import { Outlet } from 'react-router-dom'
import Logo from './Logo'
import Navbar from './Navbar'


const Layout = () => {
  return (
    <div>
        <Logo/>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Layout