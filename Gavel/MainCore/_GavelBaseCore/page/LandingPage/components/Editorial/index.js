import React from 'react';
import styled from 'rn-css';
import { CardHeader, NewsCards } from '@gavel/core/Cards';
import { colors, Text } from '@gavel/core/typo';

const Container = styled.View`
    margin-top: 20px;
`;

const NewsContainer = styled.View`
    margin-top: 15px;
`;

export default function Editorial() {
    return (
        <Container>
            <CardHeader titleText="Editorial" />
            <NewsContainer>
                <NewsCards.NewsCard2 />
                <NewsCards.NewsCard2 />
                <NewsCards.NewsCard2 />
                <NewsCards.NewsCard2 />
            </NewsContainer>
        </Container>
    );
}
