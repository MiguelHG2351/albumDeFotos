import React from "react";
import styled from "styled-components";

const Card = styled.div`
    margin-top: 25px;
    border: 1px solid red;
    position: relative;
    & .header-card {
        & img {
            max-width: 100%;
            object-fit: cover;
            vertical-align: middle;
        }
    }
`;


const DescriptionCard = styled.div`
    padding: 12px;
    position: absolute;
    z-index: 4;
    top: 0;
    right: 0;
    & a {
        color: #fff;
    }
`

export default function FnCard({ image, downloadImg, description }) {

    function share_image() {
        let platform = window.navigator.platform 
        if(platform !== 'Win32' || platform !== 'Win64')
            window.navigator.share({
            title: description,
            url: downloadImg,

        })
    }

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
                <DescriptionCard>
                    <a href={downloadImg} type="image/png" title="images_download" rel="noopener noreferrer" id={description} download={description}><i className="material-icons">cloud_download</i></a>
                    <button onClick={share_image}><i className="material-icons">share</i></button>
                </DescriptionCard>
                <div className="footer-card"></div>
            </Card>
        </>
    );
}
