import React, { FormEvent, useState } from 'react'
import { auth } from '../../lib/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'next/router';

const SignUp = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const router = useRouter()

    const handleSignUp = async(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await createUserWithEmailAndPassword(auth, email, password) ;   
        router.push("/") ;
    }

    const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement> ) => {
        setEmail(e.currentTarget.value);
    }

    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement> ) => {
        setPassword(e.currentTarget.value);
    }

  return (
    <div className='mx-auto flex justify-center'>
        <div className='bg-green-300 py-10 px-20 my-20 rounded-2xl w-auto'>
                <p className='bg-green-100 text-green-700 font-bold rounded-full p-1 text-center w-36 -ml-10'>EMAIL</p>   
            <div >
                <form className='flex justify-center flex-col' onSubmit={handleSignUp}>
                    <div className='my-5'>
                        <p className='text-sm'>メールアドレス</p>
                        <input className=' bg-green-100 rounded-full px-2 py-2 w-96' type="email" name="email"  onChange={handleChangeEmail}/>
                    </div>
                    <div className='my-5'>
                        <p className='text-sm'>パスワード</p>
                        <input className=' bg-green-100 rounded-full px-2 py-2 w-96' type="password" name="password" onChange={handleChangePassword} />
                    </div>
                    
                    <input className=' bg-green-700 rounded-full w-36 my-5 text-white py-1 mx-auto' type="submit" value="SIGN UP"/>
                </form>
            </div>
        </div>
        
    </div>
  )
}

export default SignUp