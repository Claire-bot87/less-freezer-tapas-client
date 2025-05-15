import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { useState, useEffect } from 'react'
import { childIndex } from '../../services/childService'
import ChildCard from '../ChildCard/ChildCard'
import { Link } from 'react-router'
import './AllChildsSideBar.css'
import '../../src/App.css'

export default function AllChildsSideBar(){
 
    const [childs, setChilds]= useState ([])

    const { user } = useContext(UserContext)
    
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
      }, [childs]);


    return (
    <>
    <div className="sidebar">
    <div className = 'topdiv' ></div>

<div className = 'childContainer'style={{ border: '2px solid green' }}>


{childs.length > 0 
? childs.map(child => <ChildCard key={child._id} child={child} />)
: <p>There are no childs yet</p>

}


</div>

{ user &&
<Link to='/childs/new'>
<div className="new-child"></div></Link>
}

</div>
</>
    )
}