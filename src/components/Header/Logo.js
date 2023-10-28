import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import profileImg from '@/public/profile-img.png'

const Logo = () => {
  return (
    <Link   href="/" className='flex items-center text-dark dark:text-light'>
        <div className='w-12 md:w-16 rounded-full overflow-hidden border border-solid border-dark dark:border-gray md:mr-4 mr-2'>
            <Image src ={profileImg} alt="profile" className="w-full h-auto rounded-full" sizes="33vw" priority/>
        </div>
        <span className='font-bold dark:font-semibold text-lg md:text-xl'>Codes Blog</span>
    
    </Link>
  )
}

export default Logo