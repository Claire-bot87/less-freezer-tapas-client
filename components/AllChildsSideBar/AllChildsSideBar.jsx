import { useContext, useState, useEffect } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { useLocation, useNavigate } from 'react-router'
import { childIndex } from '../../services/childService'
import ChildCard from '../ChildCard/ChildCard'
import { Link } from 'react-router'
import './AllChildsSideBar.css'
import '../../src/App.css'

export default function AllChildsSideBar(){
 
    const [childs, setChilds]= useState ([])

    const { user } = useContext(UserContext)

    const location = useLocation()

    const navigate = useNavigate()

    const isChildsPage = location.pathname === '/childs';
    // const isSingleUserPage = location.pathname === `/users/${user._id}`;
    const userChildren = childs.filter(child => String(child.parent._id) === String(user._id));


    useEffect(() => {
    childIndex()
     .then(data => {
     console.log("👶 CHILD INDEX RESPONSE:", data)
     setChilds(data)
     console.log("👶 CHILDS after set:", data)})
    .catch(err => console.log(err))
    }, [])


    useEffect(() => {
        console.log("👶 CHILDS:", childs);
        console.log("🌹USER ID:", user._id);
      }, [childs],[user._id]);

      console.log('User ID:', user._id);
      console.log('Child Parents:', childs.map(c => c.parent));
      console.log('Childs:', childs);
      console.log('💥User ID:', user._id);
      console.log('💥All children:', childs);
      

    return (
    <>
    <div className="all-childs-div">
    <div className = 'topdiv' ></div>



{/* {isSingleUserPage && ( */}
      <>
   
        <div className='filter-container' >
          {userChildren.length > 0 ? (

            userChildren.map(child => (
                
                <Link to={`/childs/${child._id}`}>
              <h1 key={child._id}>{child.name}</h1>
              </Link>
            ))
        
          ) : (
            <div className='no-childs-div'>
              <p>Get started by telling us about your child</p>
              <button onClick={() => navigate('/childs/add')} className='add-child-button'>
                Add Child
              </button>
            </div>
          
          )}
        </div>
      </>
 {/* )} */}


{ user &&
<Link to='/childs/new'>
<div className="new-child"></div></Link>
}

</div>
</>
    )
}