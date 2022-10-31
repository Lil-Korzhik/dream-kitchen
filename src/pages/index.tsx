import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import Offer from '@components/screens/home/Offer/Offer';

const Home: NextPage = () => {
  return (
    <div className="next-page">
      <Head>
        <title>Home | Dream Kitchen</title>
      </Head>

      <Offer />
    </div>
  )
}

export default Home;