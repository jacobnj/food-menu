import React from "react";

const Foodlist = ({data}) => {
    //const data = props.data;

    return (
        <div className="content-grid">
            {data.map((data) => (
                <div className="data" key={data.id}>
                    <h2>{data.title}</h2>
                    <div className="menu-image"><img src={data.image} alt="" /></div>
                    <p>{data.description}</p>
                    <p>{data.category}</p>
                </div>
            ))}  
        </div>    
    );
}
    
export default Foodlist;