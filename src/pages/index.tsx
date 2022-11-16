import { useEffect } from 'react';
import type { GetStaticPropsContext, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import Offer from '@components/screens/home/Offer/Offer';
import What from '@components/screens/home/What/What';
import Cases from '@components/screens/home/Cases/Cases';
import Features from '@components/screens/home/Features/Features';
import Receive from '@components/screens/home/Receive/Receive';
import Consultation from '@components/screens/home/Consultation/Consultation';
import Guarantees from '@components/screens/home/Guarantees/Guarantees';
import Reviews from '@components/screens/home/Reviews/Reviews';
import Info from '@components/screens/home/Info/Info';

const Home: NextPage = ({config}: any) => {
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
    </div>
  )
}

export default Home;