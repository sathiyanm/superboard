"use client"
import React from 'react'
import {
    Dialog,
    DialogContent,   
    DialogTrigger,
} from "@/components/ui/dialog"
import { Plus } from 'lucide-react'
import { CreateOrganization } from '@clerk/clerk-react'
import { Hint } from '../hint'
const InputButton = () => {
    return (
        <Dialog>
            <DialogTrigger asChild> 
                <div className='aspect-square'>
                    <Hint label="create organization"  side='right' align='start' sideOffset={18}>
                    <button className='bg-white/25 h-full w-full rounded-md flex items-center justify-center opacity-60 hover:opacity-100 transition'>
                        <Plus className='text-white'></Plus>
                    </button>
                    </Hint>
                </div>
            </DialogTrigger>
            <DialogContent className='p-0 bg-transparent border-none max-w-[480px]'>
                <CreateOrganization></CreateOrganization>
            </DialogContent>
        </Dialog>
    )
}

export default InputButton