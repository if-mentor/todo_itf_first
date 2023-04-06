const Login = () => {
  return (
    <div className='mx-auto flex justify-center'>
        <div className='bg-green-300 py-10 px-20 my-20 rounded-2xl w-auto'>
           
                <p className='bg-green-100 text-green-700 font-bold rounded-full p-1 text-center w-36 -ml-10'>EMAIL</p>
            
            <div >
                <form className='flex justify-center flex-col'>
                    <div className='my-5'>
                        <p className='text-sm'>メールアドレス</p>
                        <input className=' bg-green-100 rounded-full px-2 py-2 w-96' type="text"/>
                    </div>
                    <div className='my-5'>
                        <p className='text-sm'>パスワード</p>
                        <input className=' bg-green-100 rounded-full px-2 py-2 w-96' type="text" />
                    </div>
                    
                    <input className=' bg-green-700 rounded-full w-36 my-5 text-white py-1 mx-auto' type="submit" value="LOGIN"/>
                </form>
            </div>
        </div>
        
    </div>
  )
}

export default Login