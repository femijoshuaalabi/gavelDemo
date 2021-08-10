import React from 'react';
import styled from 'rn-css';
import './index.css';
import { MainContainerCard, DesktopHeaderCard } from '@gavel/core/Cards';
import { ScrollView } from '@gavel/core/utils';

//selg Import
import Header from './components/Header';
import { Advert1 } from './components/Adverts';
import OpinionBox from './components/OpinionBox';
import VideoBox from './components/VideoBox';
import Business from './components/BusinessNews';

export default function LandingPage() {
    return (
        <MainContainerCard>
            <DesktopHeaderCard />
            <ScrollView>
                <div className="container">
                    <Header />
                    <Advert1 />
                </div>
                <OpinionBox />
                <div className="container">
                    <VideoBox />
                    <Business />
                </div>
            </ScrollView>
        </MainContainerCard>
    );
}
