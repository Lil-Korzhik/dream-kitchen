import { useEffect } from 'react';
import type { GetStaticPropsContext, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import Offer from '@screens/home/Offer/Offer';
import What from '@screens/home/What/What';
import Cases from '@screens/home/Cases/Cases';
import Features from '@screens/home/Features/Features';
import Receive from '@screens/home/Receive/Receive';
import Consultation from '@screens/home/Consultation/Consultation';
import Guarantees from '@screens/home/Guarantees/Guarantees';
import Reviews from '@screens/home/Reviews/Reviews';
import Info from '@screens/home/Info/Info';
import Faq from '@screens/home/Faq/Faq';
import Location from '@screens/home/Location/Location';

const Home: NextPage = () => {
  return (
    <div className="next-page">
      <Head>
        <title>Home | Dream Kitchen</title>
      </Head>

      <Offer />
      <What />
      <Cases />
      <Features />
      <Receive />
      <Consultation />
      <Guarantees />
      <Reviews />
      <Info />
      <Faq />
      <Consultation />
      <Location />
    </div>
  )
}

export default Home;