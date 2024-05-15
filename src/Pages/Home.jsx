import React, { useEffect, useState } from 'react'

import Search from '../Components/Search'
import IntroPost from '../Components/IntroPost'
import Blog from '../Components/Blog'
import GlobalApi from '../GlobalApi'

function Home() {
  const [post, setPost] = useState([])
  const [orgPost, setOrgPost] = useState([])

  useEffect(() => {
    getPost();
  }, [])
  const getPost = () => {
    GlobalApi.getPost.then(resp => {
      const result = resp.data.map(item => ({
        id: item.id,
        title: item.title,
        content: item.content,
        tags: item.tags,
        image: item.image
      }));
      setPost(result);
      setOrgPost(result);
    })
  }

  const filterPost = (tag) => {
    if (tag == 'All') {
      setPost(orgPost);
      return;
    }
    const result = orgPost.filter(item => item.tags == tag);
    setPost(result);
  }
  return (
    <div >

      {/* Search */}
      <Search selectedTag={(tag) => filterPost(tag)} />
      {/* IntroPost */}
      {post.length > 0 ? <IntroPost post={post[0]} /> : null}
      {/* Blogs */}
      {post.length > 0 ? <Blog posts={post} /> : null}

    </div>
  )
}

export default Home