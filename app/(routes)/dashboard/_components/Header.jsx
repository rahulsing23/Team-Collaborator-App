"use client"
import React from 'react'
import Logo from "@/app/_components/Logo"
import { OrganizationSwitcher, UserButton, useAuth } from '@clerk/nextjs'
function Header() {
    const {orgId} = useAuth()
    console.log(orgId)
  return (
    <div className="flex justify-between items-center p-3 shadow-md">
      <Logo/>
      <OrganizationSwitcher 
        afterLeaveOrganizationUrl = {'/dashboard'}
        afterCreateOrganizationUrl={'/dashboard'} />
      <UserButton/>
    </div>
  )
}

export default Header
