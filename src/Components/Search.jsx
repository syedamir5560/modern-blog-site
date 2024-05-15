import React, { useState } from "react";

function Search() {

    let tags = [
        {
            id: 1,
            name: 'All'
        },
        {
            id: 2,
            name: 'React'
        },
        {
            id: 3,
            name: 'React Native'
        },
        {
            id: 4,
            name: 'JavaScript'
        },
        {
            id: 5,
            name: 'UI/UX'
        },


    ]

    let [activeIndex,setActiveIndex]=useState(0)

    return (
        <div>
            <div className="relative">
                {/* Banner Image */}
                <img
                    src="./src/Images/bannners.jpg"
                    alt="Banner"
                    className="w-[70%] mx-auto   rounded-2xl md:h-[50vh] object-cover"
                />

                {/* Search Input */}
                <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-center">
                    <div className="bg-white  md:w-1/2 lg:w-1/3 xl:w-1/4 rounded-lg shadow-lg">
                        <div className="flex items-center border-b border-gray-300 px-4">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full py-4 focus:outline-none"
                            />
                            <button className="ml-2 focus:outline-none">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 11a4 4 0 11-8 0 4 4 0 018 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17.5 17.5l2.5 2.5"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
          <div className="flex md:gap-16 sm:gap-5 justify-center mt-5 text-[15px] sm:text-[20px] md:text-2xl  gap-5 sm:px-2 ">
          {
                tags.map((items,index) => (
                    <ul key={items.id} onClick={()=>setActiveIndex(index )} className={`${index==activeIndex?'bg-blue-600 px-5  rounded-full cursor-pointer':null}`}>
                        <li className="cursor-pointer hover:scale-110 " >{items.name}</li>
                    </ul>
                )

                )
            }
          </div>
        </div>
    );
}

export default Search;
