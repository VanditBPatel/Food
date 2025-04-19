import React, { use } from 'react'
import './FoodDisplay.css'
import { storeContext } from '../../context/Storecontext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({category}) => {

    const {food_list} = useContext(StoreContext)

  return (
    <div className='food-display' id='food-display'>
        <h2>Top dishes near you</h2>
        <div className="food-display-list">
            {food_list.map((item, index) => {
              {console.log(item.category,item.category);}
                if (category==="All" || category===item.category) return null
                return <FoodItem key={index} id={item._id} name={item.name} price={item.price} description={item.description} price={item.price} image={item.image}/>
            })}
        </div>
    </div>
  )
}

export default FoodDisplay
