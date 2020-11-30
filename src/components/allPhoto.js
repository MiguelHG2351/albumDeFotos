import Card from './card'
import json from '../data' //asserts { type: "json" }
import Container from './styles/allPhoto'

export default function FnAllPhoto() {
    const data = JSON.parse(json)
    return (
        <Container>
            {
                data[0].filter((_, index) => index <= 10).map(function (data) {
                    return (
                        <Card description={data.description} key={data.id} image={data.image} downloadImg={data.download} />
                    )
                })
            }
        </Container>
    )
}