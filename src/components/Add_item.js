import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { useNavigate} from 'react-router-dom'
import './Add_item.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import validator from 'validator'
import axios from 'axios'

const Add_item = () => {
    const navigate = useNavigate()

    const errorMessage = (message) =>{
        toast.error(message,{
            position: 'bottom-center',
            theme: 'colored'
        })
    }

    const submitFunc= (event)=>{
        const title = event.target[0].value
        const link = event.target[1].value
        const icon_url = event.target[2].value
        const category = event.target[4].value
        const description = event.target[5].value

        event.preventDefault()

        if(title.length === 0) errorMessage('Please enter the title!')
        else if(link.length === 0) errorMessage('Please enter the link!')
        else if(!validator.isURL(link)) errorMessage('Link not valid!')
        else if(icon_url.length === 0) errorMessage('Please enter the icon URL!')
        else if(!validator.isURL(icon_url)) errorMessage('Icon URL not valid!')
        else if(category.length === 0) errorMessage('Please enter the category!')
        else if(description.length === 0) errorMessage('Please enter the description!')
        else if(description.length > 100) errorMessage('Description length should not exceed 100 characters!')
        else{
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
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter title" />
            </div>

            <div className="form-group fmx">
                <label className='lbx'>LINK</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter link" />
            </div>

            <div className="form-group fmx">
                <label className='lbx'>ICON URL</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter icon url" />
            </div>

            <label style={{color: 'grey'}}>TAG NAME</label>
            <select className="form-control bradius">
                <option value="request">Request</option>
                <option value="user">User</option>
            </select>

            <div className="form-group fmx">
                <label className='lbx'>CATEGORY</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter category" />
            </div>

            <div className="form-group fmx">
                <label className='lbx'>DESCRIPTION</label>
                <textarea className="form-control bradius" id="exampleFormControlTextarea1" rows="3" placeholder='Enter description...'></textarea>
            </div>
                <input type="submit" value="CREATE" style={{marginLeft: '190px'}} />
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