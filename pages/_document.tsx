import React, { FC } from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

const Document: FC = () => {
  return (
    <Html>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
        <link
          href='https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Wix+Madefor+Display:wght@400;500;600;700;800&display=swap'
          rel='stylesheet'
        />
        <link
          rel='apple-touch-icon-precomposed'
          sizes='57x57'
          href='fav/apple-touch-icon-57x57.png'
        />
        <link
          rel='apple-touch-icon-precomposed'
          sizes='114x114'
          href='fav/apple-touch-icon-114x114.png'
        />
        <link
          rel='apple-touch-icon-precomposed'
          sizes='72x72'
          href='fav/apple-touch-icon-72x72.png'
        />
        <link
          rel='apple-touch-icon-precomposed'
          sizes='144x144'
          href='fav/apple-touch-icon-144x144.png'
        />
        <link
          rel='apple-touch-icon-precomposed'
          sizes='60x60'
          href='fav/apple-touch-icon-60x60.png'
        />
        <link
          rel='apple-touch-icon-precomposed'
          sizes='120x120'
          href='fav/apple-touch-icon-120x120.png'
        />
        <link
          rel='apple-touch-icon-precomposed'
          sizes='76x76'
          href='fav/apple-touch-icon-76x76.png'
        />
        <link
          rel='apple-touch-icon-precomposed'
          sizes='152x152'
          href='fav/apple-touch-icon-152x152.png'
        />
        <link
          rel='icon'
          type='image/png'
          href='fav/favicon-196x196.png'
          sizes='196x196'
        />
        <link rel='icon' type='image/png' href='fav/favicon-96x96.png' sizes='96x96' />
        <link rel='icon' type='image/png' href='fav/favicon-32x32.png' sizes='32x32' />
        <link rel='icon' type='image/png' href='fav/favicon-16x16.png' sizes='16x16' />
        <link rel='icon' type='image/png' href='fav/favicon-128.png' sizes='128x128' />
        <meta name='application-name' content='&nbsp;' />
        <meta name='msapplication-TileColor' content='#333333' />
        <meta name='msapplication-TileImage' content='mstile-144x144.png' />
        <meta name='msapplication-square70x70logo' content='mstile-70x70.png' />
        <meta name='msapplication-square150x150logo' content='mstile-150x150.png' />
        <meta name='msapplication-wide310x150logo' content='mstile-310x150.png' />
        <meta name='msapplication-square310x310logo' content='mstile-310x310.png' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
