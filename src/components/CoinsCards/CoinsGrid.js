import React from 'react'
import CoinsCards from './CoinsCards'

function CoinsGrid(props) {
  return (
    <div>
      <div className='container'>
        <div className='row d-flex justify-content-evenly gap-5 my-5'>
          {props.crypto.map(crypto => {
              return (
                  <CoinsCards crypto = {crypto} />
              )
          })}
        </div>
      </div>
    </div>
  )
}

export default CoinsGrid