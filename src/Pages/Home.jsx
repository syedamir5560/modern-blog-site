import React from 'react'
import Search from '../Components/Search'
import IntroPost from '../Components/IntroPost'
import Blog from '../Components/Blog'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Home() {
 
  return (
    <div >
      <Search selectedTag={(tag)=>Filterpost(tag)} />
      <IntroPost />
      <Blog />
    </div>
  )
}

export default Home