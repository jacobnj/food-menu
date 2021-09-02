import React from 'react';
import data from './data/data.json';
import Foodlist from './Foodlist';

const Home = () => {
    
    return (
        <div className="home">
            <p>Home</p>
        </div>
        /*<div className="home">
            <Foodlist data={data.main}/>
            <Foodlist data={data.sweets}/>
            <Foodlist data={data.deserts}/>
        </div>*/
    );     
}
 
export default Home;