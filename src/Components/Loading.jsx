import React from 'react'

function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="animate-spin rounded-full border-t-8 border-gray-400 h-52 w-52"></div>
  </div>
  )
}

export default Loading