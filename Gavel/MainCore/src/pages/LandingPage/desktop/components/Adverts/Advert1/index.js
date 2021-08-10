import React from 'react';
import styled from 'rn-css';

const Container = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 10px;
`;

const Image = styled.ImageBackground`
    height: 116.46px;
    margin: auto;
    z-index: 2;
    width: 100%;
`;

export default function Advert1() {
    return (
        <Container>
            <Image source={require('@gavel/core/assets/advert1.png')} />
        </Container>
    );
}
