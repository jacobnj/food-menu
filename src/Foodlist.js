import React from "react";

const Foodlist = ({data}) => {
    //const data = props.data;

    return (
        <div className="food-list">
            {data.map((data) => (
                <div className="data" key={data.id}>
                    <h2>{data.title}</h2>
                    <img src={data.image} alt="" />
                    <p>{data.description}</p>
                    <p>{data.category}</p>
                </div>
            ))}  
        </div>    
    );
}
    
export default Foodlist;