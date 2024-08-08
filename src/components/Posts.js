import React from 'react'

const Posts = ({posts, loading}) => {
  if(loading){
    return <div>Loading...</div>
  }
  return (
    <ul className='list-group mb-4'>
      {posts.map(post => (
        <li key={post.id} className='list-group-item'>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </li>
      ))}
      {/* {posts.length === 0 && <p>No posts found</p>} */}

    </ul>
  )
}

export default Posts