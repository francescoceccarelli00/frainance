import React, { useEffect, useState } from 'react'
import style from './Home.module.css';
import clsx from 'clsx';
import CoinsTable from '../../components/CoinsRow/CoinsTable';
import CoinsGrid from '../../components/CoinsCards/CoinsGrid';
import axios from 'axios';
// import { CryptoCoins } from '../../assets/API/API';

function Home() {

    const [displayTable, setDisplayTable] = useState("true");

    const [crypto,setCrypto] = useState([]);
    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C%2024h%2C%207d&locale=en&precision=2&x_cg_demo_api_key=CG-KAoatvTcTEQBtENPveM3Nhhd';

    useEffect(() => {
        axios.get(url)
        .then((resp) => resp.data)
        .then(data => {
            setCrypto(data);
            // console.log(data[0])
        })
        .catch((error) => {
            console.log(error) 
        })
    }, [])

  return (

    <div className='container'>
        
        <div className='row justify-content-center align-items-center my-3'>
            <div className='col-9'>
                <h1>Top 100</h1>
            </div>
            <div className='col-3 d-flex justify-content-center'>
                <div className={style.switch}>
                    <div id={style.table} className={clsx(style.option, {[style.active]: displayTable})}
                        onClick={() => setDisplayTable(true)}>
                        Table
                    </div>
                    <div id={style.grid} className={clsx(style.option, {[style.active]: !displayTable})}
                        onClick={() => setDisplayTable(false)}>
                        Grid
                    </div>
                </div>
            </div>
        </div>
        <div className='row justify-content-center'>
            <div className='col'>
                {displayTable ? <CoinsTable crypto={crypto}/> : <CoinsGrid crypto={crypto} />}
            </div>
        </div>
        <div className='row'>
            
        </div>
    </div>
  )
}

export default Home