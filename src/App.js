import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Posts from './components/Posts';
import Pagination from './components/Pagination';




const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10); 

  useEffect(()=>{
    const fetchPosts = async ()=>{
      setLoading(true)
      // const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${postsPerPage}&_page=${currentPage}`)
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
      setPosts(res.data);
      setLoading(false);
    }
    fetchPosts();
    
  },[])
  const indexOfLastPost = currentPage*postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  return (
    <div className='container mt-5'>
      <h1 className='mb-3 text-primary'>My Blog</h1>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination  postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
    </div>
  )
}

export default App