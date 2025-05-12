import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { useState, useEffect } from 'react'
import { foodItemIndex } from '../../services/foodItemService'
import FoodItemCard from '../FoodItemCard/FoodItemCard'
import { Link, useLocation } from 'react-router'
import './AllFoodItems.css'
import '../../src/App.css'

export default function AllFoodItems({ child, addToNewLikesList, addToNewDislikesList }){
 
    const [foodItems, setFoodItems]= useState ([])
   
    const location = useLocation();
    const childId = child?._id;

    const isSingleChildPage = location.pathname === `/childs/${childId}`;
    const { user } = useContext(UserContext)
    
    useEffect(() => {
    foodItemIndex()
     .then(data => setFoodItems(data))
    
    .catch(err => console.log(err))
    }, [])


  

    return (
    <article className="allfooditems-article">
    <div className = 'topdiv' ></div>
    { isSingleChildPage &&
<div className = 'foodItemContainer'>


{foodItems.length > 0 
? foodItems.map(foodItem => <FoodItemCard key={foodItem._id} foodItem={foodItem} addToNewLikesList={addToNewLikesList} addToNewDislikesList={addToNewDislikesList}/>)
: <p>There are no foodItems yet</p>

}


</div>
}
{ user &&
<Link to='/foodItems/new'>
<div className="new-foodItem"></div></Link>
}
</article>
    )
}