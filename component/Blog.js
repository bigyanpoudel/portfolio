import React,{useState} from 'react'
import {
  getClient,
  usePreviewSubscription,
  urlFor,
  PortableText
  } from '../lib/sanity'
import Image from 'next/Image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faArrowRight,faArrowLeft} from "@fortawesome/free-solid-svg-icons";

const Blog = ({posts}) => {  
    const [modal,SetModal]= useState(false);
    const [post,SetPost]= useState({});
    const [currentPage,SetCurrentPage] = useState(1);
    const [blogPerPage,SetBlogPerPage]= useState(3);
    const modalHandler = (e,post)=>{
        e.preventDefault();
        SetModal(true);
        SetPost({...post})
    }
   const indexOfLastBlog = currentPage *blogPerPage;
   const indexOfFirstBlog = indexOfLastBlog - blogPerPage;
   const currentBlogs = posts.slice(indexOfFirstBlog,indexOfLastBlog);
   const prevHandler = ()=>{
     
           SetCurrentPage(currentPage - 1);
       
   }
   const nextHandler = ()=>{
           SetCurrentPage(currentPage + 1)
       
   }
    return (
        <div className="Blog" id="blog">
         <div className="header__title white">Blog</div>
        { !modal && <> <div className="Blog__container">
            {
                currentBlogs.map(post=>{
                   
                   
                    return(
                    
                        <div className="Blog__post" key={post._id}>
                       
                           <Image onClick={(e)=>modalHandler(e,post)} src={urlFor(post.mainImage).url()} alt="" width={700} height={500} loading="lazy"/>       
                           
                            <div className="Blog__post-heading">
                              
                                    <h1>{post.title}</h1> 
                        
                         </div>
                        </div>
                        
                       
                       
                    )
                })
            }
            </div>
            <div className="Blog__pagination">
              <button onClick={prevHandler} disabled={indexOfFirstBlog === 0 ?true : false}> <FontAwesomeIcon icon={faArrowLeft} className="Blog__pagination-pre"/></button>
               <button  onClick={nextHandler} disabled={currentBlogs.length < 3 ? true : false}> <FontAwesomeIcon icon={faArrowRight} className="Blog__pagination-next"/></button>
            </div>
            </>
            }
            {modal && <div className={modal ? 'modal modal__active' :"modal"} >
                <div className="modal__header">
                    <h1>{post.title}</h1>
                     <button className="modal__back" onClick={()=>{ SetModal(false); SetPost({})}}>go back</button>
                </div>
                <div className="modal__content">
                      <Image src={urlFor(post.mainImage).url()} alt="" width={910} height={550} />       
                  <div className="modal__content-text">
                  {post.body && <PortableText blocks={post.body}/>}
                   </div>
                </div>
                </div>
                }
        </div>
    )
}

export default Blog
