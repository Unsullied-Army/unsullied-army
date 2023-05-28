import "./Profile.css"
//import { useEffect } from "react"
import profile from "../../Images/profile.jpg"
import { NavLink, Outlet, useParams } from "react-router-dom"
//import Follower from "../../Components/Follower/Follower"
//import Following from "../../Components/Following/following"
import { UAState } from "../../Context/uaDetailsProvider"

const Profile=()=>{
    const {user}=UAState()
    const username=useParams()
    console.log(username)

    
    return(
        <div className="Profile">
            <div className="profile-card">
                <img src={profile} alt={user.username} width="30"/>
                <h2>{user.firstName} {user.otherName} {user.lastName}</h2>
                {/* <p><span>Colakunleumaru@gmail.com</span></p> */}
                <span>{user.username}</span>
                {/*<div>
                    <Follower />
                    <div className="follower-line"/>
                    <Following />
                </div> */}
                {/*<button className="profile-action">Visitor Mode</button>*/}
            </div>
            <div>
                <NavLink to={`/${user.username}`}>General</NavLink>
                <NavLink to="gamer-stat">Gamer Stats</NavLink>
                <NavLink to="socials">Socials</NavLink>
                <NavLink to="team">Teams</NavLink>
                <NavLink to="security">Security</NavLink>
            </div>
            <Outlet />
        </div>
    )
}
export default Profile;