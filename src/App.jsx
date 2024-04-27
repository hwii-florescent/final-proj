import { useState } from 'react'
import { useRoutes, Link } from 'react-router-dom'
import CreatePost from './pages/CreatePost'
import ReadPosts from './pages/ReadPosts'
import EditPost from './pages/EditPost'
import ForumDetail from './components/ForumDetail'
import './App.css'

function App() {
  const posts = []
  const element = useRoutes([
    {
      path: '/',
      element: <ReadPosts data={posts}/>,
    },
    {
      path: '/new',
      element: <CreatePost />,
    },
    {
      path: '/:id',
      element: <ForumDetail />,
    },
    {
      path: '/edit/:id',
      element: <EditPost />,
    }
  ])
  return (
    <div>
      <div>
        <h1>Forum List</h1>
        <Link to="/"><button>Home</button></Link>
        <Link to="/new"><button>Create Post</button></Link>
      </div>
      {element}
    </div>
  )
}

export default App
