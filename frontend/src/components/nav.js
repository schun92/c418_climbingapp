import React from 'react';
import './nav.css';

export default ()=>{
   

    function goBack(){
        window.history.back()
    }

    return(    
    <nav>
        <i className='material-icons' onClick={goBack}>
            arrow_back_ios
        </i>
        <div className='brand'>CJ</div>
        <i className='material-icons burger-menu'>
            menu
        </i>
        <ul>
            <li>
                <a href="./landing-page.html">home</a>
            </li>
            <li>
                <a href="./itinerary-page.html">itinerary</a>
            </li>
            <li>
                <a href="./about-page.html">about</a>
            </li>
            <li>
                <a href="./team-page.html">team</a>
            </li>
        </ul>
        
    </nav>
    )
        
}
