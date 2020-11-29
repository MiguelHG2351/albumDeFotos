import React from "react";
import styled from "styled-components";

const Card = styled.div`
    margin-top: 25px;
    border: 1px solid red;
    & .header-card {
        & img {
            max-width: 100%;
            object-fit: cover;
            vertical-align: middle;
        }
    }
`;

export default function FnCard({ image, downloadImg, description }) {
    return (
        <>
            <Card>
                <div className="header-card">
                    <img
                        src={image}
                        loading="lazy"
                        alt={description}
                    />
                </div>
                <div className="description-card">
                    <a href={downloadImg} download id={description} ><i className="material-icons">cloud_download</i></a>
                    <a href={downloadImg} download id={description} ><i className="material-icons">share</i></a>
                </div>
                <div className="footer-card"></div>
            </Card>
        </>
    );
}
