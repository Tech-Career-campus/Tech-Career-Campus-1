import React from 'react';
import "./Home.css";
import Events from '../../Features/Events/EventsComponent';
import News from '../../Features/News/NewsComponent';

const Home = () => {
    return (
        <>
        <div className="events"> 
            <Events/>
           </div>
            <div className="news">
            <News/>
         </div> 
        </>
    )
}
export default Home;
