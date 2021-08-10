import React from 'react';
import styled from 'rn-css';

import Videos from './components/Videos';
import NewsLetterBox from './components/NewsLetter';
import Adverts from './components/Adverts';

const Container = styled.View`
    flex-direction: row;
`;

const VideoContainer = styled.View`
    flex: 0.6;
`;

const NewsLetter = styled.View`
    flex: 0.3;
    margin: 10px;
`;

const AdvertContainer = styled.View`
    flex: 0.3;
    justify-content: center;
    align-items: center;
`;

export default function VideoBox() {
    return (
        <Container>
            <VideoContainer>
                <Videos />
            </VideoContainer>
            <NewsLetter>
                <NewsLetterBox />
            </NewsLetter>
            <AdvertContainer>
                <Adverts />
            </AdvertContainer>
        </Container>
    );
}
