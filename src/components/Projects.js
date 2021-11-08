import React from 'react';
import photos from '../assets/photos.js'
function Projects(){
    const {id, image, text, url, name} = photos;
    return(
        <figure>
           {photos.map((project => {
               
               return( 
               <div className='picture'>
                   <img src={project.image} alt={project.text} />
                    <br />
                    <a href={project.url} target='_blank' rel='noopener noreferrer'>{project.name}</a>
                    <p>{project.text}</p>
               </div>
               )
           }))}
        </figure>
    )
}

export default Projects;