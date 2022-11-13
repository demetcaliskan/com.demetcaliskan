import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import BasicLayout from '@/layout/Basic'
import Header from '@/components/Header'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Demet Çalışkan</title>
        <meta
          name='description'
          content='Personal website owned by Demet Caliskan'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <BasicLayout>
        <Header />
        <Component {...pageProps} />
      </BasicLayout>
    </>
  )
}
