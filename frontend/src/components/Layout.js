import { Outlet } from 'react-router-dom'
import Header from './Header'
//one parent so that we can easily add static components if needed
const Layout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}

export default Layout