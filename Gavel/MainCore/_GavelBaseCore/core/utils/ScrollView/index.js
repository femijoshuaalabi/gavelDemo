import React from 'react';
import styled from 'rn-css';
import { colors } from '@gavel/core/typo';

const Container = styled.ScrollView`
    flex: 1;
    background-color: ${colors.cardColor};
    width: 100%;
    margin-top: 7px;
    padding-bottom: 15px;
`;

export default function ScrollView({ children }) {
    return <Container>{children}</Container>;
}
