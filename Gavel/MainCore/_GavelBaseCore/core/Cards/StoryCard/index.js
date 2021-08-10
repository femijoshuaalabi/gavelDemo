import React from 'react';
import styled from 'rn-css';
import { Text } from '@gavel/core/typo';

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #bdbdbd;
    margin-top: 5px;
`;

const StoryImage = styled.ImageBackground`
    width: 142.25px;
    height: 82px;
    z-index: 2;
`;

const StoryText = styled(Text)`
    color: #4f4f4f;
    font-size: 15px;
    line-height: 18px;
    padding: 10px;
`;

export default function StoryCard() {
    return (
        <Container>
            <StoryImage source={require('@gavel/core/assets/newletter4.png')} />
            <StoryText>Lorem ipsum dolor sit amet dolor</StoryText>
        </Container>
    );
}
