import React from 'react';
import css from './profile.css';
import ProfileInfo from "./components/profile info/profileInfo.js";
import Security from "./components/security/security.js";
import ManageItems from './components/manageItems/manageItems.js';
let profileArr = ["profile", "security", 'manage Items', "log out"];

function Profile(props) {
    return (
        <div>
            <div className="mappy container container-fluid">
                <div className="profile-options">
                    {profileArr.map((e,i)=>{
                        return <div key={i} className='linksContainer'><a href="#" className="profile-links">{e}</a></div>
                    })}
                </div>
                <div className="profile-content">
                    {/* <ProfileInfo /> */}
                    {/* <Security /> */}
                    <ManageItems />
                </div>
            </div>

        </div>
    );
}

export default Profile;