"use client"

import Image from 'next/image'
import { CreateOrganization } from '@clerk/clerk-react'
import {
  Dialog,
  DialogContent,   
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'

const EmptyOrg = () => {
  return (
    <div className='h-full flex flex-col justify-center items-center'>
        <Image src='/elements.png' width={200} height={200} alt="Board" />
        <h1 className='text-2xl font-semibold mt-6'>Welcome to superboard!!!</h1>
        <p className='text-muted-foreground text-sm mt-2'>Create an organization to get started</p>
        <Dialog>
            <DialogTrigger asChild className='mt-6'> 
                <div className='aspect-square'>
                    <Button size="lg">Create organization</Button>
                </div>
            </DialogTrigger>
            <DialogContent className='p-0 bg-transparent border-none  max-w-[480px]'>
                <CreateOrganization></CreateOrganization>
            </DialogContent>
        </Dialog>
    </div>
  )
}

export default EmptyOrg