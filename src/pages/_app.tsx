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
          content='Personal website owned by Demet Caliskan'
        />
        <link
          rel='icon'
          href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👩🏻‍💻</text></svg>'
        ></link>
      </Head>
      <BasicLayout>
        <Component {...pageProps} />
        <Analytics />
      </BasicLayout>
    </>
  )
}
