import React from 'react';
import Banner from './Banner';
import Features from './Features';
import AboutUs from './AboutUs';
import Team from './Team';
import FeatureClasses from './FeatureClasses';
import Stats from './Stats';
import Memberships from './Memberships';
import Testimonial from './Testimonial';
import CommunityPreviewSection from './CommunityPreviewSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Team></Team>
            <Features></Features>
            <FeatureClasses></FeatureClasses>
            <Stats></Stats>
            <Memberships></Memberships>
            <Testimonial></Testimonial>
            <CommunityPreviewSection></CommunityPreviewSection>
        </div>
    );
};

export default Home;