import React from 'react';
import styled from 'rn-css';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { colors } from '@gavel/core/typo';
import NarbarButton from './NarbarButton';

const Container = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: ${colors.cardColor};
    padding-left: 10px;
    padding-right: 10px;
    width: 100%;
`;

const LogoContainer = styled.ImageBackground`
    height: 70px;
    width: 60.2px;
    z-index: 3;
`;

const OpenedMenuContainer = styled.View`
    flex: 1;
    flex-direction: row;
`;

const ActionButtonContainer = styled.View`
    flex-direction: row;
`;

const ActionButton = styled.View`
    height: 35px;
    width: 35px;
    align-items: center;
    justify-content: center;
`;

export default function MobileHeaderCard() {
    return (
        <Container>
            <LogoContainer source={require('@gavel/core/assets/logo.png')} />
            <OpenedMenuContainer>
                <NarbarButton menuText="Home" />
                <NarbarButton menuText="Nigeria News" />
                <NarbarButton menuText="Metro" />
                <NarbarButton menuText="Sports" />
            </OpenedMenuContainer>
            <ActionButtonContainer>
                <ActionButton>
                    <AntDesign name="search1" size={18} color={colors.defaultColor} />
                </ActionButton>
                <ActionButton>
                    <Ionicons name="menu" size={34} color={colors.defaultColor} />
                </ActionButton>
            </ActionButtonContainer>
        </Container>
    );
}
