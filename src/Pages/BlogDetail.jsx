import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import GlobalApi from '../Services/GlobalApi';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

function BlogDetail() {
    const { id } = useParams();
    const [post, setPost] = useState([])
    useEffect(() => {
        console.log("Id", id)
        getBlogById();
    }, [])

    const getBlogById = () => {
        GlobalApi.getPostById(id).then(resp => {

            const item = resp.data
            const result = {
                id: item.id,
                title: item.title,
                content: item.content,
                tags: item.tags,
                image: item.image,
            };
            setPost(result);
            console.log("Result", result);
        })
    }
    return (
        <div>

            <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
                <img
                    className="w-full h-64 object-cover rounded-t-lg"
                    src={post.image}
                    alt={post.title}
                />
                <div className="p-6">
                    <h1 className="text-2xl font-bold mb-4 text-black">{post.title}</h1>
                    <p className="text-gray-700 text-[1.2rem] mb-6">{post.content}</p>
                    <h1 className="text-2xl font-bold mb-4 text-black">{post.tags}</h1>
                </div>
            </div>

        </div>
    )
}

export default BlogDetail