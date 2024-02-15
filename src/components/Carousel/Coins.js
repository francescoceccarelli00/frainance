import React from 'react'
import { Table } from 'reactstrap'
import logo from '../../assets/images/logo.png'

    
const Coins = (props) => {
  return (
    <div className='container'>
        <Table
            hover
            responsive
            size=""
            >
            <thead>
                <tr>
                    <th>
                        #
                    </th>
                    <th>
                        Coin
                    </th>
                    <th>
                        Price
                    </th>
                    <th>
                        24h chg%
                    </th>
                    <th>
                        Add to Favourite
                    </th>
                    <th>
                        Add to My Wallet
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">
                        1
                    </th>
                    <td>
                        <img className='mx-1' src={logo} style={{maxWidth:24}}/>
                        Bitcoin
                    </td>
                    <td>
                        40000$
                    </td>
                    <td>
                        +2%
                    </td>
                    <td>
                        Add to<img className='mx-1' src={logo} style={{maxWidth:24}}/>
                    </td>
                    <td>
                        Add to<img className='mx-1' src={logo} style={{maxWidth:24}}/>
                    </td>
                </tr>
            </tbody>
        </Table>
    </div>
    )
}

export default Coins