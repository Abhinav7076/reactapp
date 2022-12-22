import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { useNavigate} from 'react-router-dom'
import './Add_item.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import validator from 'validator'
import axios from 'axios'

const Add_item = () => {
    const navigate = useNavigate()
    const [title, setTitle] = useState({val: '', valid: false})
    const [link, setLink] = useState({val: '', valid: false})
    const [icon_url, setIcon_url] = useState({val: '', valid: false})
    const [category, setCategory] = useState({val: '', valid: false})
    const [description, setDescription] = useState({val: '', valid: true})
    
    const errorMessage = (message) =>{
        toast.error(message,{
            position: 'bottom-center',
            theme: 'colored'
        })
    }

    const submitFunc= (event)=>{
        event.preventDefault()
        const url = 'https://media-content.ccbp.in/website/react-assignment/add_resource.json'
            axios.get(url).then(response => {
            
                let statusCode = response.status
                if(statusCode && statusCode === 200)
                    toast.success("API Success", {
                        position: 'bottom-center',
                        theme: 'colored'
                    })
                else errorMessage('API Failure')
            }).catch((error) => {
                errorMessage(error.message)
            })
        
    }

    const handleInput = (event)=>{
        // console.log(event.target.value)
        // console.log(event.target.name)
        if(event.target.name === 'title'){
            setTitle({val: event.target.value, valid: true})
        }
        if(event.target.name === 'link'){
            if(validator.isURL(event.target.value))
            setLink({val: event.target.value, valid: true})
            else
            setLink({val: event.target.value, valid: false})

        }
        if(event.target.name === 'icon_url'){
            if(validator.isURL(event.target.value))
            setIcon_url({val: event.target.value, valid: true})
            else
            setIcon_url({val: event.target.value, valid: false})
        }
        if(event.target.name === 'category'){
            setCategory({val: event.target.value, valid: true})
        }
        if(event.target.name === 'description'){
            setDescription({val: event.target.value, valid: true})
        }
    }

    return (
        <>
        <Navbar /><br/>
        <div className="row">
            <div className="split left">
            <a className='back' onClick={()=>navigate('/')}>{'< Back'}</a>

            <h1 style={{textAlign: 'center', marginBottom: '40px'}}>Item Details</h1>
            <form onSubmit={submitFunc}>
            <div className="form-group fmx">
                <label className='lbx'>ITEM TITLE</label>
                <input name='title' type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter title" onChange={handleInput} />
            </div>

            <div className="form-group fmx">
                <label className='lbx'>LINK</label>
                <input name='link' type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter link" onChange={handleInput} />
                {(link.val.length===0 || link.valid) ? null : 
                <p style={{color: 'red', marginLeft: '30px', fontSize: '13px', marginTop: '5px'}}>Link not valid</p>}
            </div>

            <div className="form-group fmx">
                <label className='lbx'>ICON URL</label>
                <input name='icon_url' type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter icon url" onChange={handleInput} />
                {(icon_url.val.length===0 || icon_url.valid) ? null : 
                <p style={{color: 'red', marginLeft: '30px', fontSize: '13px', marginTop: '5px'}}>Icon URL not valid</p>}
            </div>

            <label style={{color: 'grey'}}>TAG NAME</label>
            <select className="form-control bradius">
                <option value="request">Request</option>
                <option value="user">User</option>
            </select>

            <div className="form-group fmx">
                <label className='lbx'>CATEGORY</label>
                <input name='category' type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter category" onChange={handleInput} />
            </div>

            <div className="form-group fmx">
                <label className='lbx'>DESCRIPTION</label>
                <textarea name='description' className="form-control bradius" id="exampleFormControlTextarea1" rows="3" placeholder='Enter description...' onChange={handleInput}></textarea>
                {(description.val.length<=100) ? null :
                <p style={{color: 'red', marginLeft: '30px', fontSize: '13px', marginTop: '5px'}}>Description length should not exceed 100 characters! {'( '} {100-description.val.length} {' )'}</p>}
            </div>
                <input type="submit" value="CREATE" disabled={title.val.length===0 || category.val.length===0 || description.val.length>100 || !link.valid || !icon_url.valid} 
                style={(title.val.length===0 || category.val.length===0 || description.val.length>100 || !link.valid || !icon_url.valid) ? {cursor: 'not-allowed'}: {cursor: 'pointer'}} />
            </form>
            </div>
            <div className="split right">
            </div>
        </div>
  
        <ToastContainer />

        </>
    )
}

export default Add_item