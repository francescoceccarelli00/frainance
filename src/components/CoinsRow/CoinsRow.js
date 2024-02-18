import React from 'react'
import { NavLink } from 'react-router-dom'

const CoinsRow =(props) => {
  return (
    
    <tr>
        <th scope="row"  id='phone-td2'>
            {props.crypto.market_cap_rank}
        </th>

        <td>
            <NavLink to={props.crypto.id} key={props.crypto.id} style={{textDecoration:'none', color: 'black'}}>
                <span  id='marked' className='pt-0 pb-1'>
                <img id='phone-icon' className='me-1' src={props.crypto.image} alt={props.crypto.name} width={24}/>
                    {props.crypto.symbol.toUpperCase()}
                </span>
                
            </NavLink>
            
        </td>
        
        <td  id='phone-td2'>
            {props.crypto.current_price}$
        </td>
        <td id='phone-td'>
            <div className='d-inline py-1 px-2' style={{backgroundColor: props.crypto.price_change_percentage_24h > 0 ? 'lightgreen' : 'tomato', borderRadius:'8px'}}>
                {props.crypto.price_change_percentage_24h > 0 ? <span>↑</span> : <span>↓</span>}
            </div> 
            {props.crypto.price_change_percentage_24h} %
        </td>
        <td className='d-none d-md-table-cell'>
            {props.crypto.market_cap} $
            {/* {<Buttons/>} */}
        </td>
    </tr>
  )
}

export default CoinsRow