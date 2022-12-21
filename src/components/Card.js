import React from 'react'
import './style.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Card = (props) => {
    
    

    return (
        <>
            
                    <div className="col-md-4">
                        <div className="card p-3 mb-2">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex flex-row align-items-center">
                                    <div> <img className="icon" src={props.icon_url}></img> </div>
                                    <div className="ms-4 c-details">
                                        <h6 className="mb-0">{props.title}</h6> <span className='text2'>{props.category}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5">
                                <a href={props.link} className="card-link">{props.link}</a>
                                <p className="heading text2">{props.description}</p>
                                
                            </div>
    
                        </div>
                    </div>
                
        </>
    )
}

export default Card