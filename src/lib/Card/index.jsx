import React from 'react'

export const Card = ({ heading, children }) => {
  return (
    <div className='cardWrapper'>
      <div className='heading'>
        <h2>{heading}</h2>
      </div>
      <div className='card-body'>{children}</div>
    </div>
  )
}
