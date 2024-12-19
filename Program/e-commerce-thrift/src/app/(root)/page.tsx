"use client"

// import { Button } from '@/components/ui/button'
import Modal from '@/components/ui/modal'
// import { UserButton } from '@clerk/nextjs'
import React from 'react'

const setupPage= () => {
  return (
    <div className='p-4'>
     <Modal title='test title' description='test descrition' isOpen onClose={() => { }}>
        Children
      </Modal>
    </div>
  )
}

export default setupPage