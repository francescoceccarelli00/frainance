import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import style from './CryptoDetails.module.css'
import DOMPurify from 'dompurify';

function CryptoDetails() {
    
    const {cryptoId} = useParams();

    // prima fetch per le informazioni delle singole crypto

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
    }, []);

    // seconda fetch per la navigazione

    // const [crypto,setCrypto] = useState([]);
    // const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C%2024h%2C%207d&locale=en&precision=2&x_cg_demo_api_key=CG-KAoatvTcTEQBtENPveM3Nhhd';

    // useEffect(() => {
    //     axios.get(url)
    //     .then((resp) => resp.data)
    //     .then(data => {
    //         setCrypto(data[0]);
    //         // console.log(data[0])
    //     })
    //     .catch((error) => {
    //         console.log(error) 
    //     })
    // }, [])

  return (
    <div className='container'>
        <div className='row justify-content-center align-items-center my-5'>
            <div className='col-10 col-sm-9'>
                <p className={style.normal}>Questa è la crypto numero #{detail.market_cap_rank} per capitale</p>
                <h1><span>{detail.image ? <img className='mx-2' src={detail.image.small} alt=''/>: null}</span>{detail.name}</h1>
            </div>
            <div className='col-10 col-sm-3 d-flex justify-content-center'> Navigation?
                {/* <div className={style.navigation}>
                    <NavLink to={crypto.name}>{crypto.name}</NavLink>
                    <NavLink to={detail.id}>Next</NavLink>
                </div> */}
            </div>
        </div>
        <div className='row d-flex justify-content-evenly'>
            <div id={style.infotext} className='col-10 pb-5'>
                <div className='container-flex'>
                    <div className='row'>
                        <div className='col-12 col-md-10 offset-md-1'>
                            <div id={style.bigCard} className='p-2'>
                                <div id={style.topPart} className='mb-3 py-2'>
                                    {detail.market_data && detail.market_data.current_price? <h2 className='py-1 d-flex justify-content-center'>{detail.market_data.current_price.usd} $</h2> : null }    
                                </div>
                                <div id={style.centralPart} className='row px-3 mb-2'>
                                    <div className='col-12 col-lg-6'>
                                        <div className='d-flex justify-content-between '>
                                            <p className='p-1' id={style.normal}>24h chg%</p>
                                            {detail.market_data? 
                                                <p className='p-1' 
                                                    style={{
                                                        borderRadius:'8px', 
                                                        border:'1px solid #181A20', 
                                                        backgroundColor: detail.market_data.price_change_percentage_24h > 0 ? 'lightgreen' : 'tomato'
                                                    }}>
                                                    {detail.market_data.price_change_percentage_24h}%
                                                </p> : null
                                            }
                                        </div>
                                        <div className='d-flex justify-content-between'>
                                            <p className='p-1' id={style.normal}>7d chg%</p>
                                            {detail.market_data? 
                                                <p className='p-1' 
                                                    style={{
                                                        borderRadius:'8px', 
                                                        border:'1px solid #181A20', 
                                                        backgroundColor: detail.market_data.price_change_percentage_7d > 0 ? 'lightgreen' : 'tomato'
                                                    }}>
                                                    {detail.market_data.price_change_percentage_7d}%
                                                </p> : null
                                            }
                                        </div>
                                        <div className='d-flex justify-content-between'>
                                            <p className='p-1' id={style.normal}>30d chg%</p>
                                            {detail.market_data? 
                                                <p className='p-1' 
                                                    style={{
                                                        borderRadius:'8px', 
                                                        border:'1px solid #181A20', 
                                                        backgroundColor: detail.market_data.price_change_percentage_30d > 0 ? 'lightgreen' : 'tomato'
                                                    }}>
                                                    {detail.market_data.price_change_percentage_30d}%
                                                </p> : null
                                            }
                                        </div>
                                        <div className='d-flex justify-content-between'>
                                            <p className='p-1' id={style.normal}>1y chg%</p>
                                            {detail.market_data? 
                                                <p className='p-1' 
                                                    style={{
                                                        borderRadius:'8px', 
                                                        border:'1px solid #181A20', 
                                                        backgroundColor: detail.market_data.price_change_percentage_1y > 0 ? 'lightgreen' : 'tomato'
                                                    }}>
                                                    {detail.market_data.price_change_percentage_1y}%
                                                </p> : null
                                            }
                                        </div>
                                    </div>
                                    <div className='col-12 col-lg-6'>
                                        <div className='d-flex justify-content-between'>
                                            <p className='p-1' id={style.normal}>Highest 24h</p>
                                            {detail.market_data && detail.market_data.high_24h? <p className='p-1'>{detail.market_data.high_24h.usd} $</p>: null}
                                        </div>
                                        <div className='d-flex justify-content-between'>
                                            <p className='p-1' id={style.normal}>Lowest 24h</p>
                                            {detail.market_data && detail.market_data.low_24h? <p className='p-1'>{detail.market_data.low_24h.usd} $</p>: null}
                                        </div>
                                        <div className='d-flex justify-content-between'>
                                            <p className='p-1' id={style.normal}>Market Cap</p>
                                            {detail.market_data && detail.market_data.market_cap? <p className='p-1'>{detail.market_data.market_cap.usd} $</p>: null}
                                        </div>
                                        <div className='d-flex justify-content-between'>
                                            <p className='p-1' id={style.normal}>All Time High</p>
                                            {detail.market_data && detail.market_data.ath? <p className='p-1'>{detail.market_data.ath.usd} $</p>: null}
                                        </div>
                                        
                                    </div>
                                </div>
                                <div id={style.bottomPart} className='row m-0 pt-3 px-3'>
                                    <div className='col-12 col-lg-6'>
                                        <div className='d-flex justify-content-between align-self-center'>
                                            <p className='p-1' id={style.normal}>Total supply</p>
                                            {detail.market_data ? <p className='p-1'>{detail.market_data.total_supply} of {cryptoId}</p>: null}
                                        </div>
                                    </div>
                                    <div className='col-12 col-lg-6'>
                                        <div className='d-flex justify-content-between'>
                                            <p className='p-1' id={style.normal}>Circulating supply</p>
                                            {detail.market_data ? <p className='p-1'>{detail.market_data.circulating_supply} of {cryptoId}</p>: null}
                                        </div>
                                    </div>                                    
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
        <div>CryptoDetails of  {cryptoId} (nome pagina cryptoID)</div>
        <h1>{detail.id} (nome da fetch detail.id)</h1>
    </div>    
  )
}

export default CryptoDetails