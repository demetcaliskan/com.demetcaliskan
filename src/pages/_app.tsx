import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import BasicLayout from '@/layout/Basic'
import { Analytics } from '@vercel/analytics/react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Demet Çalışkan</title>
        <meta
          name='description'
          content={`Welcome to Demet Çalışkan's personal website!`}
        />
        <link
          rel='icon'
          href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👩🏻‍💻</text></svg>'
        />
        <link rel='canonical' href='https://www.demetcaliskan.com' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://www.demetcaliskan.com' />
        <meta property='og:title' content='Demet Çalışkan' />
        <meta
          property='og:description'
          content={`Welcome to Demet Çalışkan's personal website!`}
        />
        <meta property='og:image' content='/images/preview-image.png' />
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://www.demetcaliskan.com' />
        <meta property='twitter:title' content='Demet Çalışkan' />
        <meta
          property='twitter:description'
          content={`Welcome to Demet Çalışkan's personal website!`}
        />
        <meta
          property='twitter:image'
          content='/images/preview-image.png'
        ></meta>
      </Head>
      <BasicLayout>
        <Component {...pageProps} />
        <Analytics />
      </BasicLayout>
    </>
  )
}
