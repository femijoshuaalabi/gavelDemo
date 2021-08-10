import React from 'react';
import styled from 'rn-css';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { colors } from '@gavel/core/typo';
import NarbarButton from './NarbarButton';
import './index.css';

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
    justify-content: center;
    align-items: center;
`;

const SearchContainer = styled.View`
    width: 250px;
    height: 40px;
`;

const SearchBox = styled.TextInput`
    height: 100%;
    width: 100%;
    border-radius: 10px;
    border: 1px solid #bdbdbd;
    padding-left: 25px;
`;

const SearchIcon = styled.View`
    position: absolute;
    left: 5px;
    bottom: 7px;
`;

export default function DesktopHeaderCard() {
    return (
        <Container>
            <div className="header_container">
                <LogoContainer source={require('@gavel/core/assets/logo.png')} />
                <OpenedMenuContainer>
                    <NarbarButton menuText="Home" />
                    <NarbarButton menuText="Nigeria News" />
                    <NarbarButton menuText="Metro" />
                    <NarbarButton menuText="Headlines" />
                    <NarbarButton menuText="Polictics" />
                    <NarbarButton menuText="Opinions" />
                    <NarbarButton menuText="Entertainment" />
                    <NarbarButton menuText="Sports" />
                    <NarbarButton menuText="More" withCaret />
                </OpenedMenuContainer>
                <SearchContainer>
                    <SearchIcon>
                        <AntDesign name="search1" size={18} color={colors.defaultColor} />
                    </SearchIcon>
                    <SearchBox />
                </SearchContainer>
            </div>
        </Container>
    );
}
