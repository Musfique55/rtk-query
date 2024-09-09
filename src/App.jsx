import { useState } from 'react'
import './App.css'
import AddProducts from './features/posts/AddProducts'
import PostsView from './features/posts/PostsView'
import UpdatePost from './features/posts/UpdatePost';

function App() {
  const [edit,setEdit] = useState({});
  return (
    <>
      <AddProducts />
      <UpdatePost edit={edit}/>
      <PostsView setEdit={setEdit}></PostsView>
    </>
  )
}

export default App
