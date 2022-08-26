import React from 'react'
import DataLoop from './dataloop'

export default function SeeCar({cars}) {
    const carList = cars()
    if(carList.length > 0){
    return(
        <div className='borders'>
        <table className='borders'>
            <tr>
              <th>Make</th>
              <th>model</th>
              <th>Year</th>
            </tr> 
        { carList.map( car =>{
            return <DataLoop key={car} car={car}/>
            })}
        </table>
        </div>
    )

 
}else{
    return(
        <>
        No Cars Yet
        </>
        
    )
}
}
