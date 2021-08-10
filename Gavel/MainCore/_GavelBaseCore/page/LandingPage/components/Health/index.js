import React from 'react';
import styled from 'rn-css';
import { CardHeader, NewsCards } from '@gavel/core/Cards';
import { TextBold } from '@gavel/core/typo';

const Container = styled.View`
    margin-top: 20px;
`;

const NewsContainer = styled.View`
    margin-top: 15px;
`;

const CarouselCard = styled.ImageBackground`
    width: 100%;
    height: 169px;
    margin-top: 15px;
`;

const GradientBox = styled.ImageBackground`
    height: 100%;
    width: 100%;
`;

const CarouselText = styled(TextBold)`
    font-size: 17px;
    line-height: 20px;
    color: #ffffff;
    width: 227px;
    position: absolute;
    bottom: 25px;
    left: 20px;
`;

export default function Health() {
    return (
        <Container>
            <CardHeader titleText="Health" />
            <CarouselCard source={require('@gavel/core/assets/newletter3.png')}>
                <GradientBox source={require('@gavel/core/assets/gd.png')}>
                    <CarouselText>Lorem ipsum dolor Lorem ipsum dolor sit amet</CarouselText>
                </GradientBox>
            </CarouselCard>
            <NewsContainer>
                <NewsCards.NewsCard3 />
                <NewsCards.NewsCard3 />
                <NewsCards.NewsCard3 />
                <NewsCards.NewsCard3 />
                <NewsCards.NewsCard3 />
                <NewsCards.NewsCard3 />
                <NewsCards.NewsCard3 />
            </NewsContainer>
        </Container>
    );
}
