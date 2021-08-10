import React from 'react';
import styled from 'rn-css';
import { CardHeader, NewsCards } from '@gavel/core/Cards';
import { TextBold } from '@gavel/core/typo';

const MainContainer = styled.View`
    flex-direction: row;
    justify-content: center;
    width: 100%;
`;

const Container = styled.View`
    margin-top: 20px;
    padding: 15px;
    flex: 1;
`;

const NewsCardContainer = styled.View`
    flex: 1;
    flex-direction: row;
`;

const NewsContainer = styled.View`
    margin-top: 15px;
`;

const CarouselCard = styled.ImageBackground`
    width: 100%;
    height: 169px;
    margin-top: 15px;
    z-index: 5;
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

const AdvertContainer = styled.View`
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

export default function Business() {
    return (
        <MainContainer>
            <NewsCardContainer>
                <Container>
                    <CardHeader titleText="Business" />
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
                <Container>
                    <CardHeader titleText="Metroplus" />
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
            </NewsCardContainer>
            <AdvertContainer>
                <Advert1 source={require('@gavel/core/assets/advert2.png')} />
                <Advert2 source={require('@gavel/core/assets/advert3.png')} />
            </AdvertContainer>
        </MainContainer>
    );
}
