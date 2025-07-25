"use client"
import { useRouter } from 'next/navigation'
import './globals.css'
import React, { use, useEffect } from 'react'

function page() {
   const router = useRouter()

   const [data,setData] = useState([])

   const handleClick = () => {  
    router.push('/submit')
  }

  const fetchMessages = async () => {
    const data = await fetch('/api/messages')
    const json = await data.json()  
    setData(json)
  }


  useEffect(  ()=>{
  fetchMessages()
   

  } ,[]) 


  return (
  
    <div className=' border-2 border-black flex  flex-col  justify-center space-around items-center bg-white m-10  p-10 rounded-lg shadow-lg  md:w-[90%] lg:max-w-[50%]'>
      <h1 className='font-300 text-4xl underline  '> Message Board</h1>

        <div className='flex flex-col space-y-4 mt-4'>

          {data.map((message, index) => (
            <p key={index} className='border p-4 rounded-lg shadow-md'>
                {message}
            </p>
          ))}
          
        </div>
      
        <button  onClick={handleClick} className="bg-gray-100 px-4  py-3  rounded-lg  "> Write a message</button>
    </div>
  )
}

export default page