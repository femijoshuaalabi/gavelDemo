import React from 'react';
import { MainContainerCard, MobileHeaderCard } from '@gavel/core/Cards';
import { ScrollView } from '@gavel/core/utils';
import styled from 'rn-css';

//Self Import
import Header from './components/Header';
import LastestNews from './components/LatestNews';
import Opinion from './components/Opinion';
import Videos from './components/Videos';
import Business from './components/Business';
import Metropolis from './components/Metropolis';
import Editorial from './components/Editorial';
import Health from './components/Health';
import FromTheWeb from './components/FromTheWeb';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

const ContentContainer = styled.View`
    padding-left: 10px;
    padding-right: 10px;
`;

export default function LandingPage() {
    return (
        <MainContainerCard>
            <MobileHeaderCard />
            <ScrollView>
                <ContentContainer>
                    <Header />
                    <LastestNews />
                    <Opinion />
                    <Videos />
                    <Business />
                    <Metropolis />
                    <Editorial />
                    <Health />
                    <FromTheWeb />
                    <Footer />
                </ContentContainer>
                <NavBar />
            </ScrollView>
        </MainContainerCard>
    );
}
