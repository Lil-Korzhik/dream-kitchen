import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import Offer from '@components/screens/home/Offer/Offer';
import What from '@components/screens/home/What/What';
import Cases from '@components/screens/home/Cases/Cases';
import Proud from '@components/screens/home/Proud/Proud';

const Home: NextPage = () => {
  return (
    <div className="next-page">
      <Head>
        <title>Home | Dream Kitchen</title>
      </Head>

      <Offer />
      <What />
      <Cases />
      <Proud />
    </div>
  )
}

export default Home;