import React from 'react';
import styled from 'rn-css';
import { TextBold } from '@gavel/core/typo';
import { CardHeader, StoryCard } from '@gavel/core/Cards';

const CarouselContainer = styled.ImageBackground`
    width: 545px;
    height: 385px;
    z-index: 2;
`;

const CarouselTextContainer = styled.View`
    width: 355px;
    position: absolute;
    z-index: 10;
    bottom: 20px;
    left: 50px;
`;

const CarouselText = styled(TextBold)`
    font-size: 25px;
    line-height: 29px;
    color: #fff;
`;

const StoriesContainer = styled.View`
    margin-top: 15px;
`;

const StoryBox = styled.View`
    flex-direction: row;
    margin-top: 5px;
    border-bottom: 1px solid #bdbdbd;
    padding: 10px;
`;

export default function Stories() {
    return (
        <>
            <CarouselContainer source={require('@gavel/core/assets/desktop_carousel.png')}>
                <CarouselTextContainer>
                    <CarouselText>Cameroonian or Nigerian? Court to hear Atiku Abubakar’s suit Sept. 2</CarouselText>
                </CarouselTextContainer>
            </CarouselContainer>
            <StoriesContainer>
                <CardHeader titleText="Top Stories" />
                <StoryBox>
                    <StoryCard />
                    <StoryCard />
                    <StoryCard />
                </StoryBox>
                <StoryBox>
                    <StoryCard />
                    <StoryCard />
                    <StoryCard />
                </StoryBox>
            </StoriesContainer>
        </>
    );
}
