import React from 'react';
import styled from 'rn-css';
import Stories from './components/Stories';
import LatestNews from '@gavel/page/LandingPage/components/LatestNews';
import Adverts from './components/Adverts';

const Container = styled.View`
    flex-direction: row;
    margin-top: 10px;
`;

const StoriesContainer = styled.View`
    flex: 0.6;
`;

const LastestNewsContainer = styled.View`
    flex: 0.3;
`;

const AdvertsContainer = styled.View`
    flex: 0.3;
`;

export default function Header() {
    return (
        <Container>
            <StoriesContainer>
                <Stories />
            </StoriesContainer>
            <LastestNewsContainer>
                <LatestNews />
            </LastestNewsContainer>
            <AdvertsContainer>
                <Adverts />
            </AdvertsContainer>
        </Container>
    );
}
