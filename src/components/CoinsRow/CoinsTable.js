import React from 'react'
import { Table } from 'reactstrap'
import CoinsRow from './CoinsRow'

function CoinsTable(props) {
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
                    <th className='d-none d-md-block'>
                        24h chg%
                    </th>
                    <th>
                        Add to Favourite
                    </th>
                </tr>
            </thead>
            <tbody>
                {props.crypto.map(crypto => {
                    return (
                        <CoinsRow crypto = {crypto}/>
                    )
                })}
            </tbody>
        </Table>
    </div>
  )
}

export default CoinsTable