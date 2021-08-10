import React from 'react';
import styled from 'rn-css';
import { TextBold, Text, colors } from '@gavel/core/typo';
import { StyleSheet } from 'react-native';

const CarouselTitleText = styled(TextBold)`
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    padding: 10px;
`;

const CarouselBoxContainer = styled.View`
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-bottom: 10px;
    border-bottom: 1px solid ${colors.borderColor};
`;

const CarouselBox = styled.ImageBackground`
    width: 341px;
    height: 229px;
    justify-content: center;
    align-items: center;
`;

const NewsHeadlinesBox = styled.View`
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid ${colors.borderColor};
`;

const NewsHeadlines = styled(Text)`
    font-size: 15px;
    line-height: 18px;
`;

const styles = StyleSheet.create({
    headlines: {
        fontWeight: '500',
    },
});

export default function Header() {
    return (
        <>
            <CarouselTitleText>Cameroonian or Nigerian? Court to hear Atiku Abubakar’s suit Sept. 2</CarouselTitleText>
            <CarouselBoxContainer>
                <CarouselBox source={require('@gavel/core/assets/mobile_carousel.png')} />
            </CarouselBoxContainer>
            <NewsHeadlinesBox>
                <NewsHeadlines style={styles.headlines}>
                    Lorem ipsum dolor sit amet, consectetur dolor sit amet,adipiscing elit. dolor sit amet.
                </NewsHeadlines>
            </NewsHeadlinesBox>
            <NewsHeadlinesBox>
                <NewsHeadlines style={styles.headlines}>
                    Lorem ipsum dolor sit amet, consectetur dolor sit amet,adipiscing elit. dolor sit amet.
                </NewsHeadlines>
            </NewsHeadlinesBox>
        </>
    );
}
