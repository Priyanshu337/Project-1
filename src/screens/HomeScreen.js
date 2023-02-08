import React from 'react'
import Shoe from '../Components/Shoe'
import shoes from '../Shoesdata'
  
export default function HomeScreen() {
  return (
    <div>
      <div className="row">

            {shoes.map(shoe=>{

              return <div className="col-md-4">
                <div>
                  <Shoe shoe={shoe} />
                </div>
              </div>
            })}
      </div>
    </div>
  )
}
