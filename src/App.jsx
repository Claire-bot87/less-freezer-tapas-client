import { Routes, Route, Link } from 'react-router'
import Signup from '../components/Signup/Signup.jsx'
import Signin from '../components/Signin/Signin.jsx'
import SingleChild from '../components/SingleChild/SingleChild.jsx'
import AllFoodItems from '../components/AllFoodItems/AllFoodItems.jsx'
import FoodItemCard from '../components/FoodItemCard/FoodItemCard'
import AddFoodItem from '../components/AddFoodItem/AddFoodItem'
import UpdateFoodItem from '../components/UpdateFoodItem/UpdateFoodItem'
import AddChild from '../components/AddChild/AddChild'
import UpdateChild from '../components/UpdateChild/UpdateChild.jsx'
import Hero from '../components/Hero/Hero.jsx'
import AllChildsSideBar from '../components/AllChildsSideBar/AllChildsSideBar.jsx'

function App() {
  return (
    <>
   
     <nav>
      <Link to="/Signin">Signin</Link>
      <Link to="/Signup">Signup</Link>
     </nav>
     <Routes>
< Route path="/" element={<Hero />} />
< Route path="/childs" element={<AllChildsSideBar />} />
< Route path="/signup" element={<Signup/>} />
< Route path="/signin" element={<Signin/>} />
< Route path="/childs/:childId" element={<SingleChild/>} />
< Route path="/foodItems" element={<AllFoodItems/>} />
< Route path="/foodItems/:foodItemId" element={<FoodItemCard/>} />
< Route path="/foodItems" element={<AddFoodItem/>} />
< Route path="/foodItems/:foodItemId" element={<UpdateFoodItem/>} />
< Route path="/childs" element={<AddChild/>} />
< Route path="/childs/:childId" element={<UpdateChild/>} />

     </Routes>
    </>
  )
}

export default App
