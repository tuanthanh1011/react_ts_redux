import React, { MouseEventHandler } from 'react'
import { IPost } from '../../../../types/blog.type'
import { useDispatch } from 'react-redux'
import { deletePost } from '../../blog.reducer'

interface IPropPost {
  post: IPost
}

export default function PostItem({ post }: IPropPost) {
  const dispatch = useDispatch()
  const handleClickDelete = (id: string) => {
    dispatch(deletePost(id))
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
      <div className='bg-white rounded-lg shadow-md overflow-hidden'>
        <div className='flex'>
          <img
            alt='A scenic view of a city street with palm trees and a sunset'
            className='w-1/3 object-cover'
            height='200'
            src='https://oaidalleapiprodscus.blob.core.windows.net/private/org-BVbpSZmLndA7MfHIxv2ahIKS/user-IBY8IaMXtVn7IVIdZeyvjx16/img-PLIKFJal2YZJPJJ1mQkBKBwM.png?st=2024-09-19T05%3A18%3A54Z&amp;se=2024-09-19T07%3A18%3A54Z&amp;sp=r&amp;sv=2024-08-04&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2024-09-19T01%3A59%3A31Z&amp;ske=2024-09-20T01%3A59%3A31Z&amp;sks=b&amp;skv=2024-08-04&amp;sig=awYMPHrXS0N69GPsHvgl5ICveceE98JsUrTHlyPYEG8%3D'
            width='300'
          />
          <div className='p-4 w-2/3'>
            <p className='text-gray-500 text-sm'>{post.pushlishDate}</p>
            <h2 className='font-bold text-lg mb-2'>{post.title}</h2>
            <p className='text-gray-700 mb-4'>{post.description}</p>
            <div className='flex space-x-2'>
              <button onClick={() => handleClickDelete(post.id)} className='bg-red-500 text-white px-3 py-1 rounded'>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
