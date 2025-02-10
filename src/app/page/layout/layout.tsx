import { Outlet } from 'react-router'
import { Header } from '../../components/header'
import { TabsProvider } from '../../context/tabs-context'

export default function Layout() {
  return (
    <div className='w-full h-screen mx-auto min-h-screen max-w-[1900px]'>
      <TabsProvider>
        <Header />
        <div className='mt-16 px-20 flex flex-col mx-auto'>
          <Outlet />
        </div>
      </TabsProvider>
    </div>
  )
}
