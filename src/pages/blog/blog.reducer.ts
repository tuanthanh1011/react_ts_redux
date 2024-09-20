import { createAction, createAsyncThunk, createReducer, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IPost } from '../../types/blog.type'
import { initialPostList } from '../../constants/blog'
import http from '../../utils/http'

interface BlogState {
  postList: IPost[]
}

const initalState: BlogState = {
  postList: initialPostList
}

export const getPostList = createAsyncThunk('blog/getPostList', async (_, thunkApi) => {
  const response = await http.get<IPost[]>('posts', {
    signal: thunkApi.signal
  })
  console.log(response.data)
  return response.data
})

const blogReducer = createSlice({
  name: 'blog',
  initialState: initalState,
  reducers: {
    addPost: {
      reducer: (state, action: PayloadAction<IPost>) => {
        const post = action.payload
        state.postList.push(post)
      },
      prepare: (post: Omit<IPost, 'id'>) => {
        const id = new Date().toISOString()
        return { payload: { id, ...post } }
      }
    },
    deletePost: (state, action: PayloadAction<string>) => {
      const id = action.payload
      state.postList = state.postList.filter((post) => post.id !== id)
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getPostList.fulfilled, (state, action) => {
      state.postList = action.payload
    })
  }
})

// export const addPost = createAction<IPost>('blog/addPost')

// export const deletePost = createAction<string>('blog/deletePost')

// const blogReducer = createReducer(initalState, (builder) => {
//   builder.addCase(addPost, (state, action) => {
//     const post = action.payload
//     state.postList.push(post)
//   })

//   builder.addCase(deletePost, (state, action) => {
//     const id = action.payload
//     state.postList = state.postList.filter((post) => post.id !== id)
//   })

//   builder.addDefaultCase((state, action) => {
//     console.log('Action không được xử lý:', action)
//   })
// })

export const { addPost, deletePost } = blogReducer.actions

export default blogReducer.reducer
