import { useContext, useState, useEffect } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { useLocation } from 'react-router'
import { childIndex } from '../../services/childService'
import ChildCard from '../ChildCard/ChildCard'
import { Link } from 'react-router'
import './AllChildsSideBar.css'
import '../../src/App.css'

export default function AllChildsSideBar(){
 
    const [childs, setChilds]= useState ([])

    const { user } = useContext(UserContext)

    const location = useLocation()

    const isChildsPage = location.pathname === '/childs';
    const isSingleUserPage = location.pathname === `/users/${user._id}`;
    
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


    return (
    <>
    <div className="sidebar">
    <div className = 'topdiv' ></div>

{ isChildsPage && 
<div className = 'childContainer'style={{ border: '2px solid green' }}>


{childs.length > 0 
? childs.map(child => <ChildCard key={child._id} child={child} />)
: <p>There are no childs yet</p>
}

</div> 

}
{ isSingleUserPage && 
<>
<h1>FILTER</h1>
<div className = 'filter-container'style={{ border: '2px solid green' }}>


{childs.length > 0 
? childs
.filter(child => String(child.parent._id) === String(user._id))
.map(child => <h1 key={child._id}>{child.name}</h1>)
: <p>There are no childs yet</p>
}

</div>
</>
}

{ user &&
<Link to='/childs/new'>
<div className="new-child"></div></Link>
}

</div>
</>
    )
}