import React from 'react';
import styled from 'rn-css';
import { colors, Text } from '@gavel/core/typo';
import { LinkButton } from '@gavel/core/utils';

const Container = styled.View`
    flex-direction: row;
    padding-bottom: 10px;
    border-bottom: 1px solid ${colors.borderColor};
    justify-content: center;
    align-items: center;
    margin-top: 10px;
`;

const NewsImage = styled.ImageBackground`
    width: 93px;
    height: 76.5px;
`;

const NewsLetterBox = styled.View`
    margin-left: 15px;
    flex: 1;
`;

const NewsText = styled(Text)`
    font-size: 15px;
    line-height: 18px;
    color: ${colors.textColor2};
`;

export default function NewsCard2() {
    return (
        <LinkButton text={false} to="/404">
            <Container>
                <NewsImage source={require('@gavel/core/assets/newletter1.png')} />
                <NewsLetterBox>
                    <NewsText>Lorem ipsum dolor sit amt, cons ectetur dolor sit amta dipiscing elit. </NewsText>
                </NewsLetterBox>
            </Container>
        </LinkButton>
    );
}
