import React from 'react';
import Image from 'next/Image';
const ProjectComponent = () => {
   return (
      <div className='Project__figure'>
         <Image
            src='/public/images/project.png'
            loading='lazy'
            width={380}
            height={250}
            layout='intrinsic'
         />
         <div className='Project__figcaption'>
            <h2>Wallmart</h2>
            <h3>MERN</h3>
            <div className='Project__figcaption-link'>
               <a
                  className='Project__links'
                  href='https://www.w3schools.com/tags/tag_figure.asp'>
                  website
               </a>
               <a
                  className='Project__links'
                  href='https://www.w3schools.com/tags/tag_figure.asp'>
                  Github
               </a>
            </div>
         </div>
      </div>
   );
};

export default ProjectComponent;
