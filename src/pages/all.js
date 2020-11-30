import styled from "styled-components";
import Card from "../components/card";
import json from "../data"; //asserts { type: "json" }

const AllImages = styled.section`
    @media screen and (min-width: 1200px) {
        column-count: 4;
        column-gap: 10px;
    }
`;

export default function fnAll() {
    const data = JSON.parse(json);

    return (
        <AllImages className="container-global">
            {data[0].map(function (data) {
                return (
                    <Card
                        description={data.description}
                        key={data.id}
                        image={data.image}
                        downloadImg={data.download}
                    />
                );
            })}
            {data[1].map(function (data) {
                return (
                    <Card
                        description={data.description}
                        key={data.id}
                        image={data.image}
                        downloadImg={data.download}
                    />
                );
            })}
        </AllImages>
    );
}
