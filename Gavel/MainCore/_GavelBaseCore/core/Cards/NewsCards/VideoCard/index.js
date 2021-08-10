import React from 'react';
import styled from 'rn-css';
import { colors, Text } from '@gavel/core/typo';
import { LinkButton } from '@gavel/core/utils';

const Container = styled.View`
    margin-left: 5px;
    margin-right: 5px;
    width: 134px;
`;

const VideoThumblines = styled.ImageBackground`
    width: 131.79px;
    height: 127.94px;
`;

const NewsLetterBox = styled.View``;

const NewsText = styled(Text)`
    font-size: 15px;
    line-height: 18px;
    color: ${colors.textColor2};
`;

export default function VideoCard() {
    return (
        <LinkButton text={false} to="/404">
            <Container>
                <VideoThumblines source={require('@gavel/core/assets/newletter2.png')} />
                <NewsLetterBox>
                    <NewsText>Lorem ipsum dolor sit amt, cons ectetur dolor sit amta dipiscing elit. </NewsText>
                </NewsLetterBox>
            </Container>
        </LinkButton>
    );
}
