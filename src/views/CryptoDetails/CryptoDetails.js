import React, { useEffect, useState } from 'react'
import {useParams } from 'react-router-dom'
import axios from 'axios';
import style from './CryptoDetails.module.css'
import DOMPurify from 'dompurify';

function CryptoDetails() {
    
    const {cryptoId} = useParams();

    const [detail, setDetail]= useState({});
    const url = "https://api.coingecko.com/api/v3/coins/ethereum";

    useEffect(() => {
        axios.get(url)
        .then((resp) => resp.data)
        .then(data => {
            setDetail(data);
            console.log(data[0])
        })
        .catch((error) => {
            console.log(error) 
        })
    }, [])

  return (
    <div className='container'>
        <div className='row justify-content-center align-items-center my-5'>
            <div className='col-9'>
                <p className={style.normal}>Questa è la crypto numero #{detail.market_cap_rank} per capitale</p>
                <h1><span>{detail.image ? <img className='mx-2' src={detail.image.small} alt=''/>: null}</span>{detail.name}</h1>
            </div>
            <div className='col-3 d-flex justify-content-center'> Navigation?
                {/* <div className={style.navigation}>
                    <NavLink to={detail.market_cap_rank-1}>Prev</NavLink>
                    <NavLink to={detail.market_cap_rank+1}>Next</NavLink>
                </div> */}
            </div>
        </div>
        <div className='row d-flex justify-content-evenly'>
            <div className='col-10 col-lg-5 mb-5 info-text' style={{backgroundColor:'red', height:200}}>
                
            </div>
            <div className='col-10 col-lg-5 info-data'>
                <h2>About</h2>
                <p className={style.normal} dangerouslySetInnerHTML={{
                    __html:DOMPurify.sanitize(detail.description ? detail.description.en : null)
                }}></p>
                <span style={{fontSize: '18px', fontWeight:'700'}}>
                    Read all about {cryptoId} protocol in the 
                    {detail.links? <a id='marked' style={{fontSize: '18px'}} href={detail.links.whitepaper}>Whitepaper</a>: null}
                </span>
            </div>
        </div>
        <div>CryptoDetails o {cryptoId}</div>
        <h1>{detail.id}</h1>
    </div>    
  )
}

export default CryptoDetails