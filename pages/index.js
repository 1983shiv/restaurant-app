import Head from 'next/head'
import Image from 'next/image'
import logo from './../public/img/logo.png'
import Layout from './../components/Layout'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pizza Restaurant in Mumbai</title>
        <meta name="description" content="Pizza Restaurant in Mumbai" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}
