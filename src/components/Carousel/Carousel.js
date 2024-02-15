import React, { useEffect, useState } from 'react'
import { TrendingCoins } from '../../assets/API/API';
import AliceCarousel from 'react-alice-carousel';
import axios from 'axios';
import { NavLink } from 'react-router-dom';


function Carousel() {

    const [carousel,setCarousel] = useState([]);
    const url = {TrendingCoins};

    useEffect(() => {
        axios.get(url)
        .then((resp) => resp.data)
        .then(data => {
            setCarousel(data);
            console.log(carousel[0])
        })
        .catch((error) => {
            console.log(error) 
        })
    }, []);

    const responsive = {
        0: {
            item:2,
        },
        512: {
            item:4,
        },
    };

    const items = carousel.map((coin) =>{
        return(
            <NavLink to={'/cryptodeatils/${coin.id}'}>
                <img 
                    src={coin?.image}
                    alt={coin.name}
                    height={'80px'}
                    style={{margin: '10px' }}
                />

            </NavLink>
        )
        
    });

  return (

    <></>
    // <AliceCarousel
    //     mouseTracking
    //     infinite
    //     autoPlayInterval={1000}
    //     animationDuration={1500}
    //     disableDotsControls
    //     responsive={responsive}
    //     autoPlay
    //     item={items}
    // />
  )
}

export default Carousel