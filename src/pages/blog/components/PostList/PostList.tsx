import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../store'
import PostItem from '../PostItem'

export default function PostList() {
  const postList = useSelector((state: RootState) => state.blog.postList)

  return (
    <div className='container mx-auto p-6'>
      <h1 className='text-3xl font-bold text-center mb-2'>Blog</h1>
      <p className='text-center text-gray-600 mb-8'>.</p>
      {postList.map((post) => (
        <PostItem post={post} key={post.id}></PostItem>
      ))}
    </div>
  )
}
