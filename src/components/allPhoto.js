import React from 'react'
import Card from './card'
import json from '../data' //asserts { type: "json" }

export default function FnAllPhoto() {
    const data = JSON.parse(json)
    return (
        <div>
            {
                data[0].map(function (data, index) {
                    return <img src={data.image} style={{width: '250px'}} key={index} loading="lazy" alt=""/>
                })
            }
        </div>
    )
}