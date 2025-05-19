import { Routes, Route, useLocation } from 'react-router'
import Signup from '../components/Signup/Signup.jsx'
import Signin from '../components/Signin/Signin.jsx'
import SingleChild from '../components/SingleChild/SingleChild.jsx'
import AllFoodItems from '../components/AllFoodItems/AllFoodItems.jsx'
import FoodItemCard from '../components/FoodItemCard/FoodItemCard'
import AddFoodItem from '../components/AddFoodItem/AddFoodItem'
import UpdateFoodItem from '../components/UpdateFoodItem/UpdateFoodItem'
import AddChild from '../components/AddChild/AddChild'
import UpdateChild from '../components/UpdateChild/UpdateChild.jsx'
import Home from '../components/Home/Home.jsx'
import Nav from '../components/Nav/Nav.jsx'
import AllChildsSideBar from '../components/AllChildsSideBar/AllChildsSideBar.jsx'
import SingleUser from '../components/SingleUser/SingleUser.jsx'
import GoToIngredients from '../components/GoToIngredients/GoToIngredients.jsx'
import './App.css';


function App() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className={isHome ? 'hero-background' : 'all-pages-background'}>
      <Nav />
      <Routes>
        
        <Route path="/childs" element={<AllChildsSideBar />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/childs/:childId" element={<SingleChild />} />
        <Route path="/foodItems" element={<AllFoodItems />} />
        <Route path="/foodItems/add" element={<AddFoodItem />} />
        <Route path="/foodItems/:foodItemId" element={<UpdateFoodItem />} />
        <Route path="/childs/add" element={<AddChild />} />
        <Route path="/childs/:childId/edit" element={<UpdateChild />} />
        <Route path="/users/:userId/gotos" element={<GoToIngredients />} />
        <Route path="/users/:userId" element={<SingleUser />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
