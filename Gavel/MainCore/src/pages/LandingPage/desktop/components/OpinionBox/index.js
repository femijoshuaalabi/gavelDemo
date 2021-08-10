import React from 'react';
import styled from 'rn-css';
import { TextBold } from '@gavel/core/typo';
import '../../index.css';

import Card from './Card';

const Container = styled.View`
    background-color: #f3f3f3;
`;

const BulletBox = styled.View`
    width: 145px;
    height: 21px;
    background-color: #ff0000;
`;

const Title = styled(TextBold)`
    font-size: 37px;
    line-height: 50px;
`;

const ContainerBox = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
    margin-bottom: 15px;
`;

const ContentBox = styled.View`
    flex: 1;
`;

const NewCardContainer = styled.View`
    flex-direction: row;
`;

const AdvertBox = styled.ImageBackground`
    width: 238px;
    height: 198px;
    z-index: 2;
`;

export default function OpinionBox() {
    return (
        <Container>
            <div className="container">
                <BulletBox />
                <ContainerBox>
                    <ContentBox>
                        <Title>Opinions</Title>
                        <NewCardContainer>
                            <Card />
                            <Card />
                            <Card />
                        </NewCardContainer>
                    </ContentBox>
                    <AdvertBox source={require('@gavel/core/assets/advert2.png')} />
                </ContainerBox>
            </div>
        </Container>
    );
}
