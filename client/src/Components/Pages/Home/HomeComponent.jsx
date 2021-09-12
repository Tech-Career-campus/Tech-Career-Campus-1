import React from 'react';
import "./Home.css";
import Events from '../../Features/Events/EventsComponent';
import News from '../../Features/News/NewsComponent';

const Home = () => {
    return (
        <>
        <div className="BodyHome">
            <Events/>
            <News/>
        </div>
        </>
    )
}
export default Home;
