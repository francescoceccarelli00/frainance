import React from 'react'
import logo from '../../assets/images/logo.png'
import { NavLink } from 'react-router-dom'

const CoinsRow =(props) => {
  return (
    
    <tr>
        <th scope="row">
            {props.crypto.market_cap_rank}
        </th>

        <td>
            <NavLink to={props.crypto.id} style={{textDecoration:'none', color: 'black'}}>
                <span className='px-3 pb-1' id='marked'>
                <img className='mx-1' src={props.crypto.image} alt={props.crypto.name} style={{maxWidth:24}}/>
                    {props.crypto.symbol}
                </span>
                
            </NavLink>
            
        </td>
        
        <td>
            {props.crypto.current_price}
        </td>
        <td className='d-none d-md-table-cell'>
            <div className='d-inline py-1 px-2' style={{backgroundColor: props.crypto.price_change_percentage_24h > 0 ? 'lightgreen' : 'tomato', borderRadius:'8px'}}>
                {props.crypto.price_change_percentage_24h > 0 ? <span>↑</span> : <span>↓</span>}
            </div> 
            {props.crypto.price_change_percentage_24h} %
        </td>
        <td>
            Add to<img className='mx-1' src={logo} alt='' style={{maxWidth:24}}/>
        </td>
        <td>
            Add to<img className='mx-1' src={logo} alt='' style={{maxWidth:24}}/>
        </td>
    </tr>
  )
}

export default CoinsRow