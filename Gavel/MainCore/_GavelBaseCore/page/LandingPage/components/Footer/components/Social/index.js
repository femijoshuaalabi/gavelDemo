import React from 'react';
import styled from 'rn-css';
import { Text, colors } from '@gavel/core/typo';
import { AntDesign } from '@expo/vector-icons';

const Container = styled.View`
    margin-top: 15px;
    justify-content: center;
    align-items: center;
`;

const LogoImage = styled.ImageBackground`
    width: 73.15px;
    height: 71px;
`;

const InfoText = styled(Text)`
    color: ${colors.gray3};
    font-size: 17px;
    line-height: 18px;
    margin-top: 15px;
`;

const FollowIcons = styled.ImageBackground`
    width: 45px;
    height: 9.21px;
    margin-top: 10px;
`;

const SearchContainer = styled.View`
    width: 250px;
    height: 40px;
    margin-top: 15px;
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

export default function Social() {
    return (
        <Container>
            <LogoImage source={require('@gavel/core/assets/logo.png')} />
            <InfoText>Follow PM News</InfoText>
            <FollowIcons source={require('@gavel/core/assets/socialGroup.png')} />
            <SearchContainer>
                <SearchIcon>
                    <AntDesign name="search1" size={18} color={colors.defaultColor} />
                </SearchIcon>
                <SearchBox />
            </SearchContainer>
        </Container>
    );
}
