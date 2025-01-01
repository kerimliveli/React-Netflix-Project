import React, { useEffect, useState } from 'react'
import Navbar from './companents/Navbar'
import Home from './companents/Home'
import Movies from './companents/Movies'
import Shows from './companents/Shows'


const Homepage = () => {
  const [selectedTab, setSelectedTab] = useState({
    title: "Home",
    value: "home"
  })
  const [trendingMovies, setTrendingMovies] = useState([])
  const [trendingShows, setTrendingShows] = useState([])



  const tabItems = [
    {
      title: "Home",
      value: "home"
    },
    {
      title: "Tv Shows",
      value: "tv"
    },
    {
      title: "Movies",
      value: "movie"
    },



  ]

  const visibleTab = () => {
    switch (selectedTab.value) {
      case "movie":
        return <Movies data={trendingMovies} />

      case "tv":
        return <Shows data={trendingShows} />

      default:
        return <Home visibleItem={trendingMovies[0]} />




    }
  }


  const getMovies = async () => {

    try {
      const response = await fetch(`http://localhost:5001/api/v1/movie/trending`)
      const data = await response.json()

      if (response.ok) {
        setTrendingMovies(data.content)
      }


    } catch (error) {
      console.error(error)
    }

  }


  const getShows = async () => {

    try {
      const response = await fetch(`http://localhost:5001/api/v1/tv/trending`)
      const data = await response.json()

      if (response.ok) {
        setTrendingShows(data.content)
      }


    } catch (error) {
      console.error(error)
    }

  }




  useEffect(() => {
    getMovies()
    getShows()

  }, [])


  return (
    <div className="relative">
      <Navbar tabItems={tabItems} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      {visibleTab()}
    </div>
  )
}

export default Homepage
