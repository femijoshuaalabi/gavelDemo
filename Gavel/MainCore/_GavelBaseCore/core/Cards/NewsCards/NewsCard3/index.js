import React from 'react';
import styled from 'rn-css';
import { colors, Text } from '@gavel/core/typo';
import { LinkButton } from '@gavel/core/utils';

const Container = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 5px;
    padding-bottom: 10px;
    border-bottom: 1px solid ${colors.borderColor};
`;

const BulletDot = styled.View`
    height: 10px;
    width: 10px;
    background-color: ${colors.defaultColor};
`;

const NewsContainer = styled.View`
    margin-left: 15px;
    flex: 1;
`;

const NewsText = styled(Text)`
    font-size: 15px;
    line-height: 18px;
    color: ${colors.textColor2};
`;

export default function NewsCard3() {
    return (
        <LinkButton text={false} to="/404">
            <Container>
                <BulletDot />
                <NewsContainer>
                    <NewsText>Lorem ipsum dolor sit amt, cons ectetur dolor sit amta dipiscing elit. </NewsText>
                </NewsContainer>
            </Container>
        </LinkButton>
    );
}
