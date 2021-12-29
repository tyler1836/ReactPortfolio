import React from 'react';
import photos from '../assets/photos.js'
function Projects(){
    const {id, image, text, url, name} = photos;
    return(
        <figure>
           {photos.map((project => {
               
               return( 
               <div className='picture'>
                    <a href={project.url} target='_blank' rel='noopener noreferrer'>{project.name}</a>
                    <p className='img-desc'>{project.text}</p>
                   <img src={project.image} alt={project.text} />
               </div>
               )
           }))}
        </figure>
    )
}

export default Projects;