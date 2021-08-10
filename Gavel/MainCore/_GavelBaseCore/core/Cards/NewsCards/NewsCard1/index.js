import React from 'react';
import styled from 'rn-css';
import { colors, Text } from '@gavel/core/typo';
import { LinkButton } from '@gavel/core/utils';

const Container = styled.View`
    padding-bottom: 15px;
    padding-left: 10px;
    padding-right: 10px;
    flex-direction: row;
    border-left: 1px solid ${colors.borderColor};
    margin-left: 15px;
`;

const ContentBox = styled.View`
    flex: 1;
    border-bottom: 1px solid ${colors.borderColor};
    padding-bottom: 10px;
`;

const NewsLetterBox = styled.View`
    margin-left: 15px;
`;

const NewsText = styled(Text)`
    font-size: 15px;
    line-height: 18px;
    color: ${colors.textColor2};
`;

const DateText = styled(Text)`
    font-size: 11px;
    line-height: 13px;
    font-style: italic;
    color: ${colors.defaultColor};
    text-align: right;
`;

const BulletBox = styled.View`
    width: 15px;
    height: 15px;
    border-radius: 10px;
    background-color: ${colors.defaultColor};
    position: absolute;
    top: 0px;
    left: -9.5px;
    z-index: 11;
    justify-content: center;
    align-items: center;
`;

const BulletDox = styled.View`
    height: 8px;
    width: 8px;
    border-radius: 6px;
    background-color: #fff;
`;

export default function NewsCard1() {
    return (
        <LinkButton text={false} to="/404">
            <Container>
                <BulletBox>
                    <BulletDox />
                </BulletBox>
                <ContentBox>
                    <NewsLetterBox>
                        <NewsText>Lorem ipsum dolor sit amt, cons ectetur dolor sit amta dipiscing elit. </NewsText>
                        <DateText>10 seconds ago </DateText>
                    </NewsLetterBox>
                </ContentBox>
            </Container>
        </LinkButton>
    );
}
