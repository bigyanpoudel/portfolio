import React from 'react';
import Header from '../component/Header';
import Home from '../component/home';
import Profile from '../component/Profile';
import Skill from '../component/Skill';
import Project from '../component/Project';
import Blog from '../component/Blog';
import Contact from '../component/Contact';
import Footer from '../component/Fotter';
import { groq } from 'next-sanity';
import {
   getClient,
   usePreviewSubscription
} from '../lib/sanity';
const postQuery = groq`
  *[_type == "post"] {
    _id,
    title,
    body,
    mainImage,
    categories[]->{
      _id,
      title
    },
    author->{
      name,
      image,
      bio
    }
  }
`;
const authorQuery = groq`
*[_type == "author"] {
  name,
  image,
  bio
}
`;
function HomePage({ data, author, preview }) {
   const { data: blogs } = usePreviewSubscription(postQuery, {
      initialData: data,
      enabled: preview,
   });
   return (
      
     <>
                <Header  />
                <Home  />
                <Profile author={author}  />
                <Skill  />
                <Project  />
                <Blog posts={blogs.posts}  />
                <Contact/>
                <Footer/>
          </>
   
  );
}
export async function getStaticProps({ params, preview = false }) {
   const posts = await getClient(preview).fetch(postQuery);
   return {
      props: {
         preview,
         data: { posts },
         author: posts[0].author,
      },
   };
}
export default HomePage