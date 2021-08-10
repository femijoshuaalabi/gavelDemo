import React from 'react';
import styled from 'rn-css';
import { colors } from '@gavel/core/typo';

const Container = styled.View`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    background-color: ${colors.backgroundColor};
`;

export default function MainContainerCard({ children }) {
    return <Container>{children}</Container>;
}
