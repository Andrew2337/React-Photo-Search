import { useState , useEffect} from 'react'
import './App.scss'
import SearchPhotos from '@/components/SearchPhotos'
import CardList from '@/components/CardList'
import axios from 'axios'
import {searchPhotoAPI} from '@/utils/api'

function App() {
  const [list, setList] = useState([])
  const [query , setQuery] = useState('')
  const getPhotos = async () => {
    try {
      const res = await axios.get(searchPhotoAPI({ query }))
      if (res.status === 200) {
        setList(res?.data?.results) // Optional chaning
      }

    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      getPhotos()
    }, 500)
    return () => clearTimeout(timer)
  }, [query])


  return (
    <div className="App">
      <div className="container">
        <h1 className='title w-100 text center'>Photo Search</h1>

        <SearchPhotos
          query={query}
          setQuery={setQuery}
        
        />

        <CardList
          list = {list}
          setList = {setList}
        
        />

      </div>
        
    </div>
  )
}

export default App
