import React from 'react'
import { NavLink } from 'react-router-dom'
import Carousel from '../../components/Carousel/Carousel'


function Home() {

  return (

    <div className='container'>
        <div className='row justify-content-center align-items-center my-5'>
            <div className='col'>
            <br/>
                <h1 style={{textAlign:'center'}}>Welcome to F<span style={{color:'#F3BA2F'}}>(<span style={{color:'#181A20'}}>ra</span>)</span>inance</h1><br/><br/>
                <h2 style={{textAlign:'center'}}>A platform to keep track of your favorite cryptocurrencies</h2><br/>
                <div className='px-4 py-3' style={{textAlign:'center'}}>
                    <h4>Watch the 
                        <span style={{textAlign:'center'}}>
                            <NavLink id='marked' to={'/top100'}>
                                Top 100
                            </NavLink>
                        </span>cryptocurrencies
                    </h4>
                </div><br/>
                {<Carousel/>}    
                <br/>
                <p style={{fontWeight:'400', textAlign:'center'}}>This web application was created in React for the <a href='https://elearning.unimib.it/course/info.php?id=51512' id='marked'>Web Applications</a> course project.</p>
                <p style={{fontWeight:'400', textAlign:'center'}}>The design, name, and logo are intentionally inspired by <a href='https://www.binance.com/it' id='marked'>Binance</a>, while the data used has been sourced from <a href='https://www.coingecko.com/' id='marked'>CoinGecko.</a></p>

            </div>
        </div>
        
       
    </div>
  )
}

export default Home