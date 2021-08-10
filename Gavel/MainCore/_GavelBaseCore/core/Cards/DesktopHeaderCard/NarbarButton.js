import React from 'react';
import styled from 'rn-css';
import { colors, Text } from '@gavel/core/typo';
import { AntDesign } from '@expo/vector-icons';

const Container = styled.View`
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 15px;
    padding-right: 15px;
    border-right: 1px solid ${colors.borderColor};
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export default function NarbarButton({ menuText, withCaret }) {
    return (
        <Container>
            <Text style={{ marginRight: 5 }}>{menuText}</Text>
            {withCaret && <AntDesign name="caretdown" size={14} color={colors.defaultColor} />}
        </Container>
    );
}
