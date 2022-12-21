import React, {useState, useEffect} from 'react'
import Card from './components/Card'
import Bar from './components/Bar'
import Navbar from './components/Navbar'
import axios from 'axios'

const App = () => {
  const [datag, setData] = useState([])

  useEffect(() => {
    axios.get('https://media-content.ccbp.in/website/react-assignment/resources.json')
    .then(res=>{
      setData(res.data)
      console.log(datag)
    })
  }, [])

  return (
    <>
    <Navbar /><br></br><br></br>
    <Bar />
    <div className="container mt-5 mb-3">
      <div className="row">
          {datag.map(element=>{
            return <Card key={element.id} icon_url={element.icon_url} title={element.title} category={element.category} link={element.link} description={element.description} />
          })}
      </div>
    </div>
    </>
  )
}

export default App