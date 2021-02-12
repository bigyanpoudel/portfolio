import React from 'react'
import Image from 'next/Image'
const Profile = () => {
    return (
        <div className="Profile">
             <div className="Profile__Image" >
                <div className="Profile__shadow"></div>
                <Image className="Profile-image"width="300" height="350" src="/static/images/DSC_0029.JPG" alt="bigyan" />
            </div>
            <div className="Profile__section">
            </div>
        </div>
    )
}

export default Profile
