import React from "react";
import Card, { DescriptionCard } from './styles/card'

/** 
 * @param {string} images
 * @param {string} downloadImg
 * @param {string} description */

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

    async function share_image() {
        let files = await shareFile()
        
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
                    <button className="btn transparent" onClick={share_image}><i className="material-icons">share</i></button>
                </DescriptionCard>
                <div className="footer-card"></div>
            </Card>
        </>
    );
}
