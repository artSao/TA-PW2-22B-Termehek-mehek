import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import React from 'react'

export default function Home() {
  return (
    <div className='p-4'>
      <UserButton />
    </div>
  )
}
