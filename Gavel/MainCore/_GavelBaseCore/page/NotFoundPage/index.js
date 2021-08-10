import React from 'react';
import { MainContainerCard, MobileHeaderCard } from '@gavel/core/Cards';
import styled from 'rn-css';
import { Text, colors } from '@gavel/core/typo';
import { StyleSheet } from 'react-native';

const Container = styled.View`
    flex: 1;
    background-color: #fff;
    width: 100%;
    margin-top: 7px;
    justify-content: center;
    align-items: center;
`;

const ErrorCode = styled.Text`
    font-size: 50px;
    font-family: Roboto-Black;
    color: ${colors.defaultColor};
`;

const styles = StyleSheet.create({
    errorText: { fontSize: 18, color: '#FF8794' },
});

const NotFoundImageBox = styled.ImageBackground`
    height: 164.04px;
    width: 261.49px;
    margin-top: 30px;
    z-index: 3;
`;

export default function NotFoundPage() {
    return (
        <MainContainerCard>
            <MobileHeaderCard />
            <Container>
                <Text style={styles.errorText}>Error</Text>
                <ErrorCode>404</ErrorCode>
                <Text style={styles.errorText}>Page not found</Text>
                <NotFoundImageBox source={require('@gavel/core/assets/404Mobile.png')} />
            </Container>
        </MainContainerCard>
    );
}
