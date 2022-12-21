import React, {useState, useEffect} from 'react'
import Card from './components/Card'
import Bar from './components/Bar'
import Navbar from './components/Navbar'
import axios from 'axios'
import { Route, Switch } from 'react-router-dom'
import { Button } from 'bootstrap'

const App = () => {
  const [datag, setData] = useState([])
  const [tag, setTag] = useState('request')

  useEffect(() => {
    axios.get('https://media-content.ccbp.in/website/react-assignment/resources.json')
    .then(res=>{
      setData(res.data)
      console.log(datag)
    })
  }, [])

  
  function handleClick(tag){
    console.log(tag)
    setTag(tag)
  }

  return (
    <>
    <Navbar /><br></br><br></br>
    <Bar changeTag={handleClick} />
    <div className="container mt-5 mb-3">
      <div className="row">
          {datag.map(element=>{
            if(tag === 'resources')
            return <Card key={element.id} tag={element.tag} icon_url={element.icon_url} title={element.title} category={element.category} link={element.link} description={element.description} />
            else if(element.tag === tag)
              return <Card key={element.id} tag={element.tag} icon_url={element.icon_url} title={element.title} category={element.category} link={element.link} description={element.description} />
          })}
      </div>
    </div>
    </>
  )
}

export default App