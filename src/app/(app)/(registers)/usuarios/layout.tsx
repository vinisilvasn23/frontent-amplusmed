'use client'
import { CompaniesContextProvider } from '@/contexts/CompanyContext'
import { UsersContextProvider } from '@/contexts/UserContext'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <CompaniesContextProvider>
      <UsersContextProvider>{children}</UsersContextProvider>
    </CompaniesContextProvider>
  )
}