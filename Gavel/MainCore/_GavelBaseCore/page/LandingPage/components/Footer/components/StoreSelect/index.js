import React from 'react';
import styled from 'rn-css';
import { Text, colors } from '@gavel/core/typo';

const InfoText = styled(Text)`
    color: ${colors.gray3};
    font-size: 17px;
    line-height: 18px;
`;

const StoreSelectContainer = styled.View`
    flex-direction: row;
    margin-bottom: 20px;
`;

const Store = styled.ImageBackground`
    width: 243px;
    height: 48px;
`;

const Seperator = styled.View`
    height: 5px;
    width: 100%;
    background-color: ${colors.defaultColor};
`;

export default function StoreSelect() {
    return (
        <>
            <InfoText>Download PM News app.</InfoText>
            <StoreSelectContainer>
                <Store source={require('@gavel/core/assets/stores.png')} />
            </StoreSelectContainer>
            <Seperator />
        </>
    );
}
