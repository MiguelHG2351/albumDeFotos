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

    async function shareFile() {
        const request = await fetch(image)
        const response = request.blob()
        const file = new File([response], 'family.png', {
            type: 'image/png'
        })
        const fileArray = [file]
        return fileArray
    }

    function share_image() {
        let platform = window.navigator.platform 
        let files = shareFile()

        if('share' in window.navigator && 'canShare' in window.navigator) {
            window.navigator.canShare({files: files})
            window.navigator.share({
                title: 'Album Familiar',
                url: downloadImg,
                text: description,
                files: files
            }).catch(err => console.log(`error ${err}`))
        }

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
