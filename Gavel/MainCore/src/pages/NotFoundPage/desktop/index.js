import React from 'react';
import styled from 'rn-css';
import { MainContainerCard, DesktopHeaderCard } from '@gavel/core/Cards';
import { ScrollView } from '@gavel/core/utils';

import { Text, colors } from '@gavel/core/typo';
import { StyleSheet } from 'react-native';

const ErrorCode = styled.Text`
    font-size: 50px;
    font-family: Roboto-Black;
    color: ${colors.defaultColor};
`;

const styles = StyleSheet.create({
    errorText: { fontSize: 18, color: '#FF8794' },
});

const NotFoundImageBox = styled.ImageBackground`
    height: 200.04px;
    width: 361.49px;
    margin-top: 30px;
    z-index: 3;
`;

const Container = styled.View`
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    flex-direction: row;
`;

const InfoBox = styled.View``;

export default function NotFoundPage() {
    return (
        <MainContainerCard>
            <DesktopHeaderCard />
            <ScrollView>
                <Container>
                    <InfoBox>
                        <Text style={styles.errorText}>Error</Text>
                        <ErrorCode>404</ErrorCode>
                        <Text style={styles.errorText}>Page not found</Text>
                    </InfoBox>
                    <NotFoundImageBox source={require('@gavel/core/assets/404Mobile.png')} />
                </Container>
            </ScrollView>
        </MainContainerCard>
    );
}
