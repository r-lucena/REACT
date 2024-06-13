import useCurrentLocation from './useCurrentLocation'
import './App.css'
import { useEffect } from 'react'
import GitHubUsers from './GitHubUsers'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const {location, getLocation} = useCurrentLocation()
  useEffect(() => {
   getLocation()
  }, [])
  
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<GitHubUsers/>}/>
    </Routes>
      
      {location && `${location.latitude} ${location.longitude}`}
    </BrowserRouter>
      
      
    </>
  )
}

export default App
