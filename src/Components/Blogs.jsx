import React from 'react'
import { useNavigate } from 'react-router-dom'

function Blogs({ posts }) {
  const navigate = useNavigate();


  const excerpt = (str) => {
      if (str.length > 50) {
        str = str.substring(0, 100) + " ... ";
      }
      return str
    }

  return (
    <>
      <div className='w-full  flex flex-wrap items-center justify-around px-10 py-5 ' >{
        posts.map((item) => {
          return (
            <div className="max-w-md mx-auto rounded py-5 overflow-hidde shadow-lg cursor-pointer" key={item.id} onClick={() => navigate('blogdetail/' + item.id)} >
              <img className="w-full rounded-2xl hover:scale-110 transition-all " src={item.image} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{item.title}</div>
                <p className="text-gray-700 text-base"> {excerpt(item.content)}</p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-600 mr-2 mb-2">
                  {item.tags}
                </span>
              </div>
            </div>
          )
        })
      }
      </div>
    </>
  )
}

export default Blogs