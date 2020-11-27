import React from "react";

export default function Card({image, description}) {
    return (
        <div className="card">
            <div className="header-card">
                <img src={image} style={{width: '250px'}} loading="lazy" alt={description}/>
            </div>
            <div className="description-card"></div>
            <div className="footer-card"></div>
        </div>
    );
}
