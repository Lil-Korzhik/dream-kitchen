import Head from 'next/head'
import Layout from '@components/layout/Layout'
import type { AppProps } from 'next/app'

import { Provider } from 'react-redux';
import store from '@store/store';

import '@styles/global.scss'

const MyApp = ({Component, pageProps}: AppProps) => (
  <Provider store={store}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </Provider>
);

export default MyApp;