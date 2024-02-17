import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Link } from 'react-router-dom';


const Carousel = () => {
    
  const [carouselData,setCarouselData] = useState([]);
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=1h%2C%2024h%2C%207d&locale=en&precision=2&x_cg_demo_api_key=CG-KAoatvTcTEQBtENPveM3Nhhd';

  useEffect(() => {
      axios.get(url)
      .then((resp) => resp.data)
      .then(data => {
        setCarouselData(data);
          // console.log(data[0])
      })
      .catch((error) => {
          console.log(error) 
      })
  }, []);

    const responsive = {
        0: {
            items:2,
        },
        512: {
            items:4,
        },
        1024: {
          items:5,
      },
    };

    const items = carouselData.map((coin, index) => {
        return(
            <Link to={`/top100/${coin.id}`} key={index} style={{textDecoration: 'none'}} className=''>
                <div className='backcard d-flex flex-column align-items-center p-2 mx-3'>
                  <img
                      src={coin?.image}
                      alt={coin.name}
                      height={100}
                  />
                  <p id='blackcolor' className='mt-2'>{coin.symbol.toUpperCase()}</p>
                  <p id='blackcolor' className=''>Current price</p>
                  <p id='blackcolor' className=''>{coin.current_price}$</p>
                </div>
            </Link>
        );
    });

  return (
    <>
        <AliceCarousel
            mouseTracking
            infinite
            autoPlayInterval={1000}
            animationDuration={2500}
            disableDotsControls
            disableButtonsControls
            responsive={responsive}
            autoPlay
            items={items}
        />
        <span></span>
    </>
  )
}

export default Carousel