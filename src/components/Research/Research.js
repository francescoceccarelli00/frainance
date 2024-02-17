import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Input } from 'reactstrap';
import style from './Research.module.css'

export default function Research() {
    
    const [crypto,setCrypto] = useState([]);
    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C%2024h%2C%207d&locale=en&precision=2&x_cg_demo_api_key=CG-KAoatvTcTEQBtENPveM3Nhhd';

    useEffect(() => {
        axios.get(url)
        .then((resp) => resp.data)
        .then(data => {
            setCrypto(data);
        })
        .catch((error) => {
            console.log(error) 
        })
    }, []);

    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (searchValue) => {
        setSearchTerm(searchValue.toLowerCase());
      };
    
    const handleLinkClick = () => {
        setSearchTerm("");
    };

    const filteredCrypto =
    searchTerm === "" ? [] : crypto.filter(
        (crypto) => 
            crypto.id.toLowerCase().includes(searchTerm)
        );

  return (
    <div className={style.search}>
        <Input
            type='text'
            placeholder='Search a crypto'
            value={searchTerm}
            onChange={(e)=>handleSearch(e.target.value)}
            className='m-1'
        />
        <div className={style.filter}>
            {filteredCrypto.length > 0 ?(
                filteredCrypto.map((crypto)=>(
                    <Link key={crypto.id} to={`/top100/${crypto.id}`} onClick={handleLinkClick}>
                        <div key={crypto.id} className={style.rowElement}>
                            <img
                                src={crypto.image}
                                alt={crypto.id}
                                className={style.image}
                            />
                            <span className={style.text}>{crypto.id}</span>
                        </div>
                    </Link>
                ))
            ): searchTerm ?(
                <div className={style.texterror}>There is no crypto with this name in the top 100</div>
            ): null}
        </div>
    </div>
  )
}
