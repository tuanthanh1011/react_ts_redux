import { createAction, createReducer } from '@reduxjs/toolkit'
import { IPost } from '../../types/blog.type'
import { initialPostList } from '../../constants/blog'

interface BlogState {
  postList: IPost[]
}

const initalState: BlogState = {
  postList: initialPostList
}

export const addPost = createAction<IPost>('blog/addPost')

export const deletePost = createAction<string>('blog/deletePost')

const blogReducer = createReducer(initalState, (builder) => {
  builder.addCase(addPost, (state, action) => {
    const post = action.payload
    state.postList.push(post)
  })

  builder.addCase(deletePost, (state, action) => {
    const id = action.payload
    state.postList = state.postList.filter((post) => post.id !== id)
  })
})

export default blogReducer
