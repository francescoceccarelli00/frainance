import React from 'react'
import icon from '../../assets/images/logo.png'
import { NavLink } from 'react-router-dom'
import Buttons from '../Buttons/Buttons'

const  CoinsCards = (props) => {

  // const [color, setColor] = useState;
  // if ((props.crypto.price_change_percentage_24h) > 0 ) {

  // }

  return (

  <div className='col-11 col-sm-9 col-md-5 col-xl-3 p-1' style={{boxShadow: '0 6px 12px 8px #00000025', borderRadius: '30px'}}>
    <div className='p-3' style={{backgroundColor: '#181A20', borderRadius: '26px 26px 0 0'}}>
      <NavLink id='markedcard' to={props.crypto.id} key={props.crypto.id} style={{textDecoration:'none', color: 'black'}}>
        <img className='me-4' src={props.crypto.image} alt={props.crypto.name} style={{maxWidth:24}}/>
        <span style={{color:'#F3BA2F',fontSize:'18px', fontWeight: '700'}}>{props.crypto.name}</span>
      </NavLink>
      
    </div>

    <div className='d-flex flex-column px-3 py-2'>
      <div className='d-flex justify-content-between'>
        <p style={{fontWeight:400}}>Price</p> <p>{props.crypto.current_price} $</p>
      </div>
      <div className='d-flex justify-content-between'>
        <p style={{fontWeight:400}}>24h Chg%</p> <p className='p-1' style={{borderRadius:'8px', border:'1px solid #181A20', backgroundColor: props.crypto.price_change_percentage_24h > 0 ? 'lightgreen' : 'tomato'}}>{props.crypto.price_change_percentage_24h} %</p>
      </div>
      <div className='d-flex justify-content-between'>
        <p style={{fontWeight:400}}>Mkt Cap</p> <p>{props.crypto.market_cap} $</p>
      </div>
    </div>

    <div className='p-3 w-100 d-flex justify-content-evenly' style={{backgroundColor: '#D7D8E0', borderRadius: '0 0 26px 26px'}}>
      {/* prima c'era me-4 se metto entrambi i bottoni */}
      {<Buttons/>}
      {/* <div className=''>
        <a id='marked' className='pb-2' href='/'>
          <span className='me-2' style={{color:'#181A20'}}>Add to Favourite</span>
          <span>
            <img src={icon} alt='' style={{maxWidth:24}}/>
          </span>
        </a>
      </div> */}
      {/* <div>
        <span className='me-2' style={{color:'#181A20'}}>Add to</span>
        <span>
          <img src={icon} alt='' style={{maxWidth:24}}/>
        </span>
      </div> */}
    </div>
  </div>

  )
}

export default CoinsCards