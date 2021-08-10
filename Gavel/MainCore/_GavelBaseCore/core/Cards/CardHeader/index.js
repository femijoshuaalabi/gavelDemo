import React from 'react';
import styled from 'rn-css';
import { colors, TextBold } from '@gavel/core/typo';

const Container = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const BulletBox = styled.View`
    width: 12px;
    height: 12px;
    background-color: ${colors.defaultColor};
`;

const TitleText = styled(TextBold)`
    font-size: 17px;
    line-height: 20px;
    margin-left: 10px;
`;

const ContinuousLine = styled.View`
    flex: 1;
    border-bottom: 1px solid ${colors.borderColor};
    height: 100%;
`;

export default function CardHeader({ titleText }) {
    return (
        <Container>
            <BulletBox />
            <TitleText>{titleText}</TitleText>
            <ContinuousLine />
        </Container>
    );
}
