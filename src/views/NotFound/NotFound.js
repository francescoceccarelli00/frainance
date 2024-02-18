import React from 'react'
import { Link } from 'react-router-dom'
import Gif from '../../assets/images/Not_found.gif'

export default function NotFound() {
  return (
    <div className='my-2 py-2 container d-flex flex-column justify-content-center align-items-center'>
        <h1>Oops! You seem to be lost.</h1>
        <img className='my-3' width={600} src={Gif} alt='funny error gif'/>
        <h2>Here are some helpful links:</h2>
        <Link style={{textDecoration:'none'}} className='my-1' to='/frainance'><h2 id='marked'>Home</h2></Link>
        <Link style={{textDecoration:'none'}} className='my-1' to='/top100'><h2 id='marked'>Top 100</h2></Link>
        <Link style={{textDecoration:'none'}} className='my-1' to='/history'><h2 id='marked'>History</h2></Link>
    </div>
  )
}
