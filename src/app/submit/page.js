"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

function page() {

  const router = useRouter()

  const goBack = () => {
    console.log("first")
    router.push("/")
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const message = formData.get('message');  
    // Handle form submission logic here
    console.log("Name:", name);
    console.log("Message:", message);
    console.log("Form submitted")
    
    await fetch('/api/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, message }),
    });
    // router.push('/')
  }
  return (
    <form  onSubmit={handleSubmit} className=' gap-4 border-2 border-black flex  flex-col  justify-center space-around items-center bg-white m-10  p-10 rounded-lg shadow-lg  md:w-[90%] lg:max-w-[50%]'>
      <h1 className='font-300 text-4xl underline  '> Write a Message</h1>
      
      <div>
        <label className='text-lg font-semibold'>Name</label>
        <input type="text" name='name' className='border-2 border-gray-300 p-2 rounded-lg w-full mt-2' placeholder='Enter your name' />
      </div>

      <div>
        <label className='text-lg font-semibold'>Message</label>
        <input type="text" name='message' className='border-2 border-gray-300 p-2 rounded-lg w-full mt-2' placeholder='Enter your name' />
      </div>
       
      
      <div className=' flex  justify-between gap-4   '>
        <button type='submit' className="bg-gray-100   rounded-lg px-2 py-1.5 "> Submit</button>
        <button onClick={goBack}  className="bg-gray-100  rounded-lg px-2 py-1.5 "> Go back</button>
      </div>
    </form>
  )
}

export default page

