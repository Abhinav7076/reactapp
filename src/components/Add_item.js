import React from 'react'
import { useNavigate } from 'react-router-dom'
const Add_item = () => {
    const navigate = useNavigate()
    return (
        <>
        <a onClick={()=>navigate('/')}>Back</a>
        <div>Add_item</div>
        </>
    )
}

export default Add_item