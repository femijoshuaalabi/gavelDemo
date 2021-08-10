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

const LoadMoreContainer = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
`;

const LoadMoreButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    background-color: ${colors.gray4};
    width: 127px;
    height: 42px;
`;

const LoadMoreText = styled(Text)`
    color: #fff;
`;

export default function LastestNews() {
    return (
        <Container>
            <CardHeader titleText="Latest News" />
            <NewsContainer>
                <NewsCards.NewsCard1 />
                <NewsCards.NewsCard1 />
                <NewsCards.NewsCard1 />
                <NewsCards.NewsCard1 />
                <NewsCards.NewsCard1 />
                <NewsCards.NewsCard1 />
                <NewsCards.NewsCard1 />
                <NewsCards.NewsCard1 />
            </NewsContainer>
            <LoadMoreContainer>
                <LoadMoreButton>
                    <LoadMoreText>Load More</LoadMoreText>
                </LoadMoreButton>
            </LoadMoreContainer>
        </Container>
    );
}
