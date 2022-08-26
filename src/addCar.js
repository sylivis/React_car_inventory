import React, { useRef } from 'react'

export default function AddCar({getCar, cars}) {

    const carMake = useRef()
    const carModel = useRef()
    const carYear = useRef()

    function addCar(event){
      
        const make = carMake.current.value
        const model = carModel.current.value
        const year = carYear.current.value
    
        if(make && model && year){
          console.log(`${make}, ${model}, ${year}`)
            getCar(oldCar =>{
                return [...oldCar, { ud: 14, 
                    theMake: make, 
                    theModel: model, 
                    theYear: year, 
                    deleteQ: false}]
            })
            carYear.current.value = null
            carMake.current.value = null
            carModel.current.value = null
        }else{
        }
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log(cars)
    }


  return (
        <div className=''>
            <form className='flex-column'  onSubmit={handleSubmit}>
                <label>Make</label>
                <input ref={carMake} type='Make'></input>
                <label>Model</label>
                <input ref={carModel} type='Model'></input>
                <label>Year</label>
                <input ref={carYear} type='Year'></input>
                <button className='margin-5' onClick={addCar}  >submit</button>
            </form>
        </div>      
  )

  }

