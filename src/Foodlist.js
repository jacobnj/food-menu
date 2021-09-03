import React from "react";

const Foodlist = ({data}) => {
    //const data = props.data;

    return (
        <div className="menu-content-grid">
            {data.map((data) => (
                <div className="data" key={data.id}>
                    <h3>{data.title}</h3>
                    <div className="menu-image"><img src={data.image} alt="" /></div>
                    <div className="desc">{data.description}</div>
                </div>
            ))}  
        </div>    
    );
}
    
export default Foodlist;