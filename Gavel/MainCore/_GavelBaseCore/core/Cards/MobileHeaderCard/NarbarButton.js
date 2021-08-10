import React from 'react';
import styled from 'rn-css';
import { colors, Text } from '@gavel/core/typo';

const Container = styled.View`
    padding: 5px;
    border-right: 1px solid ${colors.borderColor};
`;

export default function NarbarButton({ menuText }) {
    return (
        <Container>
            <Text>{menuText}</Text>
        </Container>
    );
}
