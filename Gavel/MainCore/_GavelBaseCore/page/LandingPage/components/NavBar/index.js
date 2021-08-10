import React from 'react';
import styled from 'rn-css';
import { colors, TextBold } from '@gavel/core/typo';

const Container = styled.View`
    background-color: ${colors.backgroundColor};
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 35px;
    padding-right: 35px;
    margin-top: 25px;
`;

const NavBarContainer = styled.View`
    flex-direction: row;
    justify-content: space-evenly;
`;

const Nav = styled(TextBold)`
    font-size: 15px;
    line-height: 173.69%;
    color: #4f4f4f;
    padding: 10px;
`;

const Spacer = styled.View`
    height: 40px;
    background-color: #c4c4c4;
`;

export default function Navbar() {
    return (
        <>
            <Container>
                <NavBarContainer>
                    <Nav>News</Nav>
                    <Nav>Business</Nav>
                </NavBarContainer>
                <NavBarContainer>
                    <Nav>Sports</Nav>
                    <Nav>Opinion</Nav>
                </NavBarContainer>
                <NavBarContainer>
                    <Nav>Metro Plus</Nav>
                    <Nav>Entertainment</Nav>
                </NavBarContainer>
                <NavBarContainer>
                    <Nav>Business</Nav>
                    <Nav>Auto Punch</Nav>
                </NavBarContainer>
            </Container>
            <Spacer />
        </>
    );
}
