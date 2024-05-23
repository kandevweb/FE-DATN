import Header from '~/components/Header'
import Sidebar from '~/components/Sidebar'

interface Props {
  children: React.ReactNode
}

function MainLayout({ children }: Props) {
  return (
    <>
      <Header />
      <Sidebar />
      <main
        id='site__main'
        className='mt-[--m-top]  h-[calc(100vh-var(--m-top))] p-2.5 xl:ml-[--w-side-sm] 2xl:ml-[--w-side]'
      >
        {children}
      </main>
    </>
  )
}

export default MainLayout
