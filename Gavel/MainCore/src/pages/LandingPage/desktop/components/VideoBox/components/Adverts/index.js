import React from 'react';
import styled from 'rn-css';

const Container = styled.View`
    width: 100%;
    align-items: center;
`;

const Advert1 = styled.ImageBackground`
    width: 238px;
    height: 198px;
    margin-top: 10px;
    z-index: 2;
`;

const Advert2 = styled.ImageBackground`
    width: 238px;
    height: 381px;
    margin-top: 20px;
    z-index: 2;
`;

export default function Adverts() {
    return (
        <Container>
            <Advert1 source={require('@gavel/core/assets/advert2.png')} />
            <Advert2 source={require('@gavel/core/assets/advert3.png')} />
        </Container>
    );
}
