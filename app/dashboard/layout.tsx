import { Header, Sidebar } from '@/components/dashboard'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <Sidebar />
      <div className='min-h-screen mt-5 ml-16 dark:text-white'>
        {children}
      </div>
    </>
  )
}