import React from 'react';
import styled from 'rn-css';
import { CardHeader, NewsCards } from '@gavel/core/Cards';

const Container = styled.View`
    margin-top: 20px;
`;

const NewsContainer = styled.ScrollView`
    margin-top: 15px;
`;

export default function Videos() {
    return (
        <Container>
            <CardHeader titleText="Videos" />
            <NewsContainer horizontal>
                <NewsCards.VideoCard />
                <NewsCards.VideoCard />
                <NewsCards.VideoCard />
                <NewsCards.VideoCard />
                <NewsCards.VideoCard />
                <NewsCards.VideoCard />
                <NewsCards.VideoCard />
                <NewsCards.VideoCard />
            </NewsContainer>
        </Container>
    );
}
