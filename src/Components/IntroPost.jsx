import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


function IntroPost({post}) { 
  const navigate=useNavigate();  
  return (
    <div className='grid grid-cols-1 cursor-pointer
     md:grid-cols-2 mt-10 px-10 md:px-15 lg:px-32 gap-8'  
     onClick={()=>navigate('blogdetail/'+post.id)}>
        <img src={post.image} className='
        rounded-2xl object-cover w-full h-full'/>
        <div>
            <h4 className='text-red-500'>{post.tags}</h4>
            <h2 className='text-[23px] font-bold mt-5'>{post.title}</h2>
            <h4 className='line-clamp-6 text-gray-400 mt-5'>{post.content}</h4>
       
        </div>
    </div>
  )
}

export default IntroPost