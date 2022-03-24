import React from "react";
import styled from 'styled-components'
function ListAt() {

    return (
        <Container>
            <Wrap>
                <img src="/images/viewers-disney.png" />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="/videos/1564674844-disney.mp4" type="video/mp4" />
                </video>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-pixar.png" />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="/videos/1564676714-pixar.mp4" type="video/mp4" />
                </video>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-marvel.png" />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="/videos/1564676115-marvel.mp4" type="video/mp4" />
                </video>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-starwars.png" />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="/videos/1608229455-star-wars.mp4" type="video/mp4" />
                </video>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-national.png" />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source
                        src="/videos/1564676296-national-geographic.mp4"
                        type="video/mp4"
                    />
                </video>
            </Wrap>
        </Container>

    )
}

const Container = styled.div`
    padding: 30px 0px 26px;
    margin-top: 30px;
    display: grid;
    grid-gap: 25px;
    gap: 25px;
    grid-template-columns: repeat(5, minmax(0, 1fr));

    @media (max-width: 768px){
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
`
const Wrap = styled.div`
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    border: 3px solid rgba(249, 249, 249, 0.1);
    height: 21vh;
    border-radius: 10px;
    overflow: hidden;
    position: relative;

    @media (max-width: 768px){
        height: 60vh;
    }

img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    position: absolute;
    opacity: 1;
    z-index: 1;
}
video{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    opacity:0;
    transition: 0.25s;
}
:hover{
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    video {
      opacity: 1;
    }
}
    
`
export default ListAt