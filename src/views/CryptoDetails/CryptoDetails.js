import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import style from './CryptoDetails.module.css'
import DOMPurify from 'dompurify';

function CryptoDetails() {
    
    const {cryptoId} = useParams();

    const [detail, setDetail]= useState({});

    useEffect(() => {
        axios.get(`https://api.coingecko.com/api/v3/coins/${cryptoId}`)
        .then((resp) => resp.data)
        .then(data => {
            setDetail(data);
            // console.log(data[0])
        })
        .catch((error) => {
            console.log(error) 
        })
        // eslint-disable-next-line
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
                    <NavLink to={detail.id-1}>Prev</NavLink>
                    <NavLink to={detail.id+1}>Next</NavLink>
                </div> */}
            </div>
        </div>
        <div className='row d-flex justify-content-evenly'>
            <div id={style.infotext} className='col-10 pb-5'>
                <div className='container-flex'>
                    <div className='row'>
                        <div className='col-10 offset-1'>
                            <div id={style.bigCard} className='p-2'>
                                <div id={style.topPart} className=''>

                                </div>
                                <div id={style.bottomPart} className=''>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id={style.infodata} className='col-10 py-3'>
                <h2>About {detail.name}</h2>
                <p className={style.normal} dangerouslySetInnerHTML={{
                    __html:DOMPurify.sanitize(detail.description ? detail.description.en : null)
                }}></p>
                <span style={{fontSize: '18px', fontWeight:'700'}}>
                    Read all about {cryptoId} protocol in the 
                    {detail.links? <a id='marked' style={{fontSize: '18px'}} href={detail.links.whitepaper}>Whitepaper</a>: <p>whitepaper</p>}
                </span>
            </div>
        </div>
        <br/><br/><br/><br/>
        <div>CryptoDetails of {cryptoId}</div>
        <h1>{detail.id}</h1>
    </div>    
  )
}

export default CryptoDetails