import { useState } from 'react'
import './App.scss'
import SearchPhotos from '@/components/SearchPhotos'
import CardList from '@/components/CardList'
import axios from 'axios'

function App() {
  const [list, setList] = useState([])
  const [query , setQuery] = useState('')

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
