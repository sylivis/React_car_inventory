import React from 'react'

export default function DataLoop({car}) {
  return (
    <tr>
        <td className='borders'>{car.theMake}</td>
        <td className='borders'>{car.theModel}</td>
        <td className='borders'>{car.theYear}</td>
    </tr>    
  )
}
