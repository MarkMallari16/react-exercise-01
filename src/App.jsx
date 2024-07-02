

import './App.css'
import NavBar from './components/NavBar'
import Feed from './components/Feed'
import ChartComponent from './components/ChartComponent'
import { useEffect, useState } from 'react'
function App() {

  const [postsData, setPostsData] = useState([]);
  useEffect(() => {
    function fetchData(endpoint) {
      fetch(endpoint)
        .then(response => {
          if (!response.ok) {
            throw new Error("Network response was not ok", response.statusText)
          }
          return response.json()
        })
        .then(data => setPostsData(data));
    }
    fetchData('https://jsonplaceholder.typicode.com/photos');

  
  }, [])
 
  return (
    <>
      <NavBar />
      <Feed postsData={postsData}/>
     
    </>
  )
}

export default App
