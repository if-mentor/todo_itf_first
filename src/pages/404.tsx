import Header from '@/components/Header'
import Link from 'next/link';
import { useRouter } from 'next/router'
import React from 'react'

const Page404: React.FC = () => {
    const router = useRouter();
    return (
        <>
            <Header />
            <div className='w-full text-center'>
                <p className='font-["roboto"] text-4xl font-bold my-10'>
                    404
                </p>
                <p className='text-lg font-bold mb-10'>This is not web page you are looking for.</p>
                <Link 
                    href='/'
                    className='border border-black bg-red-100 rounded-full px-6 pb-2 pt-1 font-bold'
                >
                    Top
                </Link>
            </div>
        </>
    )
}

export default Page404