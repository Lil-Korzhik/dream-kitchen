import { FC } from 'react'
import { Html, Main, Head, NextScript } from 'next/document'

const Document = () => {
    return (
        <Html lang={'en'}>
            <Head>
                {/* Meta base */}
                <meta charSet="utf-8" />
                <meta name="description" content="We are engaged in the creation and installation of luxurious kitchens that will fit perfectly into your interior and will be as practical as possible." />
                <meta name="theme-color" content="#373EF1" />
                <meta name="msapplication-navbutton-color" content="#373EF1" />
                <meta name="apple-mobile-web-app-status-bar-style" content="#373EF1" />

                {/* Open Graph meta */}
                <meta property="og:site_name" content="Dream Kitchen" />
                <meta property="og:title" content="Dream Kitchen" />
                <meta property="og:description" content="We are engaged in the creation and installation of luxurious kitchens that will fit perfectly into your interior and will be as practical as possible." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://dream-kitchen.com" />
                <meta property="og:image" content="/favicons/card.png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />

                {/* Twitter meta */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Dream Kitchen" />
                <meta name="twitter:description" content="We are engaged in the creation and installation of luxurious kitchens that will fit perfectly into your interior and will be as practical as possible." />
                <meta name="twitter:image" content="/favicons/card.png" />

                {/* Manifest Site */}
                <link rel="manifest" href="/favicons/manifest.json" />

                {/* Favicon */}
                <link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" />
                <link rel="apple-touch-icon" href="/favicons/apple-touch-icon-152.png" sizes="152x152" />
                <link rel="apple-touch-icon" href="/favicons/apple-touch-icon-167.png" sizes="167x167" />
                <link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png-180" sizes="180x180" />
                <link rel="shortcut icon" href="/favicons/favicon.png" />

                {/* Fonts */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600&family=Poppins:wght@400;500&display=swap" rel="stylesheet" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};

export default Document;