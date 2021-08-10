import React from 'react';
import styled from 'rn-css';
import { CardHeader, NewsCards } from '@gavel/core/Cards';

const Container = styled.View`
    flex-direction: row;
    margin-top: 20px;
`;

const VideoBox = styled.View`
    flex: 1;
    border-right: 1px solid #bdbdbd;
    justify-content: center;
    align-items: center;
`;

export default function Videos() {
    return (
        <>
            <CardHeader titleText="Business" />
            <Container>
                <VideoBox>
                    <NewsCards.VideoCard />
                </VideoBox>
                <VideoBox>
                    <NewsCards.VideoCard />
                </VideoBox>
                <VideoBox>
                    <NewsCards.VideoCard />
                </VideoBox>
            </Container>
            <Container>
                <VideoBox>
                    <NewsCards.VideoCard />
                </VideoBox>
                <VideoBox>
                    <NewsCards.VideoCard />
                </VideoBox>
                <VideoBox>
                    <NewsCards.VideoCard />
                </VideoBox>
            </Container>
            <Container>
                <VideoBox>
                    <NewsCards.VideoCard />
                </VideoBox>
                <VideoBox>
                    <NewsCards.VideoCard />
                </VideoBox>
                <VideoBox>
                    <NewsCards.VideoCard />
                </VideoBox>
            </Container>
        </>
    );
}
