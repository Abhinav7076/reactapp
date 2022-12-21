import React, { useState } from 'react'
import './style.css'

const Bar = (props) => {
  const tag = "request"
  const [attributeClass, setAttributeClass] = useState({res: "nav-item nav-link active", req: "nav-item nav-link", user: "nav-item nav-link"})

  function changeClass(tag){
    // setAttributeClass('nav-item nav-link active')
    if(tag === 'res')
      setAttributeClass({res: "nav-item nav-link active", req: "nav-item nav-link", user: "nav-item nav-link"})
    else if(tag === 'req')
      setAttributeClass({res: "nav-item nav-link", req: "nav-item nav-link active", user: "nav-item nav-link"})
    else
      setAttributeClass({res: "nav-item nav-link", req: "nav-item nav-link", user: "nav-item nav-link active"})
  }
  
  return (
    <>
        <nav className="nav nav-pills nav-fill" style={{marginLeft: '20em', marginRight: '20em'}}>
            <a className={attributeClass.res} onClick={()=>{
              changeClass('res')
              props.changeTag('resources')
              }}>Resource</a>
            <a className={attributeClass.req} onClick={()=>{
              changeClass('req')
              props.changeTag("request")
              }}>Request</a>
            <a className={attributeClass.user} onClick={()=>{
              changeClass('user')
              props.changeTag("user")}}>Users</a>
        </nav>
    </>
  )
}

export default Bar