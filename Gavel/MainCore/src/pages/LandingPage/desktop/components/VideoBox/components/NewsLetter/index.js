import React from 'react';
import styled from 'rn-css';
import { colors, Text, TextBold } from '@gavel/core/typo';
import { NewsCards, CardHeader } from '@gavel/core/Cards';

const NewsLetterBox = styled.View`
    background-color: #f1f1f1;
    padding: 20px;
    justify-content: center;
    align-items: center;
`;

const NewsLetterHeader = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const RedLine = styled.View`
    height: 4px;
    width: 30px;
    background-color: ${colors.defaultColor};
    margin-left: 5px;
    margin-right: 5px;
`;

const TrandingBox = styled.View`
    padding: 10px;
`;
const HeadingLetter = styled(Text)`
    color: #4f4f4f;
    font-size: 15px;
    line-height: 18px;
`;

const TopicText = styled(TextBold)`
    font-size: 20px;
    line-height: 23px;
    color: #4f4f4f;
    padding: 15px;
`;

const DesctiptionText = styled(Text)`
    font-size: 13px;
    line-height: 15px;
    text-align: center;
    color: #4f4f4f;
`;

const InputTextBox = styled.TextInput`
    height: 40px;
    border: 1px solid ${colors.borderColor};
    border-radius: 5px;
    margin-top: 15px;
    margin-bottom: 10px;
    width: 200px;
    padding-left: 10px;
`;

const SignUpButton = styled.View`
    padding: 10px;
    justify-content: center;
    align-items: center;
    background-color: ${colors.defaultColor};
    margin-top: 15px;
`;

const SignUpText = styled(Text)`
    color: #fff;
`;

export default function NewsLetter() {
    return (
        <>
            <NewsLetterBox>
                <NewsLetterHeader>
                    <RedLine />
                    <HeadingLetter>Sign up for PM News</HeadingLetter>
                    <RedLine />
                </NewsLetterHeader>
                <TopicText>Weekly Newsletter</TopicText>
                <DesctiptionText>Subscribe to stay up-to-date on all the latest news</DesctiptionText>
                <InputTextBox placeholder="Email" />
                <SignUpButton>
                    <SignUpText>Sign Up</SignUpText>
                </SignUpButton>
            </NewsLetterBox>
            <CardHeader titleText="Trending Now" />
            <TrandingBox>
                <NewsCards.NewsCard3 />
                <NewsCards.NewsCard3 />
                <NewsCards.NewsCard3 />
                <NewsCards.NewsCard3 />
                <NewsCards.NewsCard3 />
            </TrandingBox>
        </>
    );
}
