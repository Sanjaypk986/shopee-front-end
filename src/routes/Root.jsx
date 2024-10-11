import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const Root = () => {
  return (
    <div className='h-screen'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Root
