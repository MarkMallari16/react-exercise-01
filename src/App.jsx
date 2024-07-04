

import './App.css'
import NavBar from './components/NavBar'
import Feed from './components/Feed'
import ChartComponent from './components/ChartComponent'
import { useState } from 'react'
import usePostsFeed from './hooks/usePostsFeed'
import useSearchQuery from './hooks/useSearchQuery'
function App() {
  const { searchQuery, handleSearchQuery } = useSearchQuery();
  const postsData = usePostsFeed();

  return (
    <>
      <NavBar handleSearchQuery={handleSearchQuery} />
      <Feed postsData={postsData} searchQuery={searchQuery} />

    </>
  )
}

export default App
