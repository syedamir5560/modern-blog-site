import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function BlogDetails() {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [isDataLoaded, setIsDataLoaded] = useState(false);

    useEffect(() => {
        if (id) {
            singleBlogData();
        }
    }, [id]);

    const singleBlogData = async () => {
        try {
            const response = await axios.get(`https://6643cb3f6c6a6565870858dc.mockapi.io/blog/${id}`);
            setData(response.data);
            setIsDataLoaded(true);
            console.log(response.data);
        } catch (error) {
            console.log("Error fetching data:", error);
        }
    };

    useEffect(() => {
        let timer;
        if (isDataLoaded) {
            timer = setTimeout(() => {
                // Render the component after 2 seconds
                console.log("Data loaded. Rendering component after 2 seconds.");
            }, 2000);
        }
        return () => clearTimeout(timer);
    }, [isDataLoaded]);

    return (
        <div>
            {isDataLoaded && (
                <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
                    <img
                        className="w-full h-64 object-cover rounded-t-lg"
                        src={data.image}
                        alt={data.title}
                    />
                    <div className="p-6">
                        <h1 className="text-2xl font-bold mb-4">{data.title}</h1>
                        <p className="text-gray-700 mb-6">{data.content}</p>
                        <div className="text-gray-900 font-semibold">Author: {data.author}</div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default BlogDetails;
