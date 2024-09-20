import React, { useEffect, useState } from 'react'
import { IPost } from '../../../../types/blog.type'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../store'

const initialState: IPost = {
  id: '',
  description: '',
  featuredImage: '',
  pushlishDate: '',
  title: '',
  pushlished: false
}

export default function CreatePost() {
  const [formData, setFormData] = useState<IPost>(initialState)

  const dispatch = useDispatch()

  const handleCreate = () => {
    dispatch({ type: 'blog/addPost', payload: formData })
    setFormData(initialState)
  }

  return (
    <div className='max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md'>
      <form>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='title'>
            Title
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='title'
            type='text'
            placeholder='Title'
            value={formData.title}
            onChange={(event) => setFormData((prev) => ({ ...prev, title: event.target.value }))}
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='featured-image'>
            Featured Image
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='featured-image'
            type='text'
            placeholder='Url image'
            value={formData.featuredImage}
            onChange={(event) => setFormData((prev) => ({ ...prev, featuredImage: event.target.value }))}
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='description'>
            Description
          </label>
          <textarea
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='description'
            placeholder='Your description...'
            value={formData.description}
            onChange={(event) => setFormData((prev) => ({ ...prev, description: event.target.value }))}
          ></textarea>
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='publish-date'>
            Publish Date
          </label>
          <div className='flex items-center'>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='publish-date'
              type='text'
              placeholder='mm/dd/yyyy --:-- --'
              value={formData.pushlishDate}
              onChange={(event) => setFormData((prev) => ({ ...prev, pushlishDate: event.target.value }))}
            />
            <i className='fas fa-calendar-alt ml-2 text-gray-500'></i>
          </div>
        </div>
        <div className='mb-4'>
          <label className='inline-flex items-center'>
            <input
              type='checkbox'
              className='form-checkbox text-indigo-600'
              checked={formData.pushlished}
              onChange={(event) => setFormData((prev) => ({ ...prev, pushlished: event.target.checked }))}
            />
            <span className='ml-2 text-gray-700'>Publish</span>
          </label>
        </div>
        <div className='flex items-center justify-between'>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            type='button'
            onClick={handleCreate}
          >
            Publish Post
          </button>
          <button
            className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            type='button'
          >
            Update Post
          </button>
          <button
            className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            type='button'
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}
