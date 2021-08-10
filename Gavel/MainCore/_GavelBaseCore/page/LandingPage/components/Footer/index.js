import React from 'react';
import styled from 'rn-css';
import StoreSelect from './components/StoreSelect';
import Social from './components/Social';

const Container = styled.View`
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`;

export default function Footer() {
    return (
        <Container>
            <StoreSelect />
            <Social />
        </Container>
    );
}
