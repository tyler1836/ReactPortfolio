import React, {useState} from 'react';
import photo from '../assets/portfolio-self-picture.jpg';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

function Nav(){
    const [currentPage, setCurrentPage] = useState('About')

    const renderPage = () => {
        switch(currentPage){
            case 'Projects':
                return <Projects />;
            case 'Contact':
                return <Contact />
            default:
                return <About />;
        }
    };
    const tabs = ['Projects', 'Contact', 'About']
    return(
        <div>
        <header class='navigation'>
            <h1>Tyler Roll <br /> <img src={photo} alt="profile" class='profile' /></h1>
            {/* <h2>Portfolio</h2> */}
            
                <ul class='pagelinks'>
                    {tabs.map(tab => (
                   <li class='nav-item'>
                       <a href={'#' + tab.toLowerCase()}
                        onClick={()=> setCurrentPage(tab)}
                        class={currentPage === tab ? 'nav-link active' : 'nav-link'}>
                            {tab}
                       </a>
                   </li>
                    ))}
                </ul>
            
        </header>
        <main>
            {renderPage(currentPage)}
        </main>
    </div>
    )
}

export default Nav;
