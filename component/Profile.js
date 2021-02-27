import React from 'react'
import Image from 'next/Image'
import {

  urlFor,
  PortableText
  } from '../lib/sanity'
const Profile = ({author}) => {

    return (
        <section className="Profile" id="profile">
              
             <div className="header__title grey">About</div>
             <div className="Profile__Image" >
                <Image className="Profile-image"width={200} height={200}   layout="intrinsic" quality={50}
                 src={urlFor(author.image).url()} alt="bigyan" loading="lazy"/>
            </div>
            <div className="Profile__section">
                <PortableText blocks={author.bio}/>
                <div className="button__group">
                    <button className="button button__contact">Contact me</button>
                    <button className="button button__hire">Hire me</button>
                </div>
            </div>
        </section>
    )
}


export default Profile
