import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { useState, useEffect } from 'react'
import { foodItemIndex } from '../../services/foodItemService'
import FoodItemCard from '../FoodItemCard/FoodItemCard'
import { Link } from 'react-router'
//import './AllFoodItems.css'
import '../../src/App.css'

export default function AllFoodItems({ addToNewLikesList }){
 
    const [foodItems, setFoodItems]= useState ([])

    const { user } = useContext(UserContext)
    
    useEffect(() => {
    foodItemIndex()
     .then(data => setFoodItems(data))
    
    .catch(err => console.log(err))
    }, [])


  

    return (
    <>
    <div className = 'topdiv' ></div>

<div className = 'foodItemContainer'>


{foodItems.length > 0 
? foodItems.map(foodItem => <FoodItemCard key={foodItem._id} foodItem={foodItem} addToNewLikesList={addToNewLikesList} />)
: <p>There are no foodItems yet</p>

}


</div>

{ user &&
<Link to='/foodItems/new'>
<div className="new-foodItem"></div></Link>
}
</>
    )
}