import React, { useEffect, useState } from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Link } from 'react-router-dom';


const Carousel = () => {
    const url = "../../assets/data/data.json"
    const [carouselData, setCarouselData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          const jsonData = await response.json();
          setCarouselData(jsonData);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);

    const responsive = {
        0: {
            items:2,
        },
        512: {
            items:4,
        },
    };

    const items = carouselData.map((coin) => {
        return(
            <Link to={'/top100/bitcoin'}>
                <img
                    src={coin?.image}
                    alt={coin.name}
                />
            </Link>
        );
    });

  return (
    <>
        <AliceCarousel
            mouseTracking
            infinite
            autoPlayInterval={1000}
            animationDuration={1500}
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