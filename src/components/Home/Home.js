import React from 'react'
import AboutUs from '../AboutUs/AboutUs'
import Banner from '../Banner/Banner'
import FAQ from '../FAQ/FAQ'
import Service from '../Service/Service'

function Home()
{
    return (
        <>
            <Banner />
            <Service />
            <AboutUs />
            <FAQ />
        </>
    )
}

export default Home
