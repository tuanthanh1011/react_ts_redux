import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '../../../../store'
import PostItem from '../PostItem'
import http from '../../../../utils/http'
import { getPostList } from '../../blog.reducer'

// Call API trong useEffect()

export default function PostList() {
  const postList = useSelector((state: RootState) => state.blog.postList)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const promise = dispatch(getPostList())
    return () => {
      promise.abort()
    }
  }, [dispatch])

  // useEffect(() => {
  //   const controller = new AbortController()
  //   http
  //     .get('posts', {
  //       signal: controller.signal
  //     })
  //     .then((res) => {
  //       console.log(res?.data)
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })

  //   return () => {
  //     controller.abort()
  //   }
  // }, [])

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
