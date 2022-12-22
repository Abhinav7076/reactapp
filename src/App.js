import React, {useState, useEffect} from 'react'
import Card from './components/Card'
import Bar from './components/Bar'
import Navbar from './components/Navbar'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import Add_item from './components/Add_item'

const App = () => {
  const [datag, setData] = useState([])
  const [tag, setTag] = useState('resources')

  useEffect(() => {
    axios.get('https://media-content.ccbp.in/website/react-assignment/resources.json')
    .then(res=>{
      setData(res.data)
    })
  }, [])

  
  function handleClick(tag){
    console.log(tag)
    setTag(tag)
  }

  return (
    <>
    <Routes>
      <Route exact path='/' element={
        <>
            <Navbar /><hr /><br />
            <Bar changeTag={handleClick} /><div className="container mt-5 mb-3">
            <div className="row">
              {datag.map(element => {
                if (tag === 'resources')
                  return <Card key={element.id} tag={element.tag} icon_url={element.icon_url} title={element.title} category={element.category} link={element.link} description={element.description} />
                else if (element.tag === tag)
                  return <Card key={element.id} tag={element.tag} icon_url={element.icon_url} title={element.title} category={element.category} link={element.link} description={element.description} />
              })}
            </div>
          </div>
        </>
        } 
      />
      <Route path='add_item' element={<Add_item/>} />
    </Routes>
    </>
  )
}

export default App