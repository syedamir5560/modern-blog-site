import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Loading from './Loading'

function Blog() {

  let [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false);

  let navigate = useNavigate()

  useEffect(() => {
    loadBlogsData()
  }, [])

  const loadBlogsData = async () => {
    setIsLoading(true);
    try {
      let response = await axios.get('https://66433b303c01a059ea220c27.mockapi.io/blog')
      setData(response.data)

    }
    catch (error) {
      console.error('Error fetching data:', error);
    }
    finally {
      setIsLoading(false);
    }
  };

  const excerpt = (str) => {
    if (str.length > 50) {
      str = str.substring(0, 100) + " ... ";
    }
    return str
  }

  console.log(data)

  return (
    <>
      {isLoading ? (
        <Loading/>
      ) : (
        <div className='w-full  flex flex-wrap items-center justify-around px-10 py-5 ' onClick={() => navigate('/BlogDetails')}>{
          data.map((item) => {
            return (
              <div className="max-w-md mx-auto rounded py-5 overflow-hidde shadow-lg cursor-pointer">
                <img className="w-full rounded-2xl" src={item.image} />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{item.title}</div>
                  <p className="text-gray-700 text-base"> {excerpt(item.content)}</p>
                  <h3 className='mt-2 text-[20px] font-mono '>{item.author}</h3>
                </div>
                <div className="px-6 pt-4 pb-2">

                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {item.tags}
                  </span>

                </div>
              </div>
            )
          })
        }
        </div>
      )
      }
    </>
  )
}

export default Blog