import React from 'react'
import Card from './card'
import json from '../data' //asserts { type: "json" }
import Container from '../styles/allPhoto'

export default function FnAllPhoto() {
    const data = JSON.parse(json)
    return (
        <Container>
            {
                data[0].map(function (data) {
                    return (
                        <Card description={data.description} key={data.id} image={data.image} />
                    )
                })
            }
        </Container>
    )
}