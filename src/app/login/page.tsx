import React from 'react'

const page = () => {
  return (
    <div className='h-full translate-y-36'>
      <article className='article p-10 h-full flex flex-col justify-center'>
        <h1 className="px-2 font-bold py-2 text-3xl">Login</h1>
        <form action="" method="post" className='mt-5 '>
          <input type="text" name="name" className='bg-gradient-to-r border border-1 border-[#1c2b31] from-[#1c2b31] to-[#233b3f] w-full h-10 my-2 py-3 px-2 rounded-lg text-sm' id="" placeholder='Enter Username/Email' />
          <input type="password" className="bg-gradient-to-r border border-1 border-[#1c2b31] from-[#1c2b31] to-[#233b3f] w-full h-10 my-2 py-3 px-2 rounded-lg text-sm" name="password" id="" placeholder='Enter Password' />
          <button type="submit" className='my-5 bg-gradient-to-tr from-[#62cdcb] to-[#4599db] w-full p-2 rounded-lg'>Login</button>
        </form>
        <div className='text-center'>
          <p>No Account? <span><a href="/register" className='text-[#908975] font-bold'>Register here</a></span></p>
        </div>
      </article>
    </div>
  )
}

export default page