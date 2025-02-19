import Image from 'next/image'
import React from 'react'

const Loading = () => {
    return (
        <div className='h-full w-full flex flex-col  justify-center items-center'>
            <Image src="/loading.svg" alt='loading' width={120} height={120} className='animate-pulse duration-700'></Image>
        </div>
    )
}

export default Loading