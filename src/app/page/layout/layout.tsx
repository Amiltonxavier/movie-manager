import { Outlet } from 'react-router'
import { Header } from '../../components/header'

export default function Layout() {
  return (
    <div className='w-full h-full'>
          <Header />
        <div className='mt-16 px-20 flex flex-col'>
                <Outlet />
        </div>
    </div>
  )
}
