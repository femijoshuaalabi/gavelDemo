import React from 'react';
import styled from 'rn-css';
import { TextBold } from '@gavel/core/typo';

const Container = styled.View`
    flex-direction: row;
    margin: 15px;
    justify-content: center;
    align-items: center;
`;

const Image = styled.ImageBackground`
    width: 150px;
    height: 150px;
    z-index: 3;
`;

const NewsHeading = styled(TextBold)`
    margin-left: 10px;
    font-size: 20px;
    line-height: 23px;
    width: 128px;
`;

export default function Card() {
    return (
        <Container>
            <Image source={require('@gavel/core/assets/newletter1.png')} />
            <NewsHeading>Lorem ipsum dolor Lorem ipsum</NewsHeading>
        </Container>
    );
}
