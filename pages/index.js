import Head from 'next/head'
import Layout from './components/Layout'
import Hero from './components/Hero'

export default function Home() {

  return (
    <Layout>
      <Head>
        <title>Home Page</title>
      </Head>
      <main className="bg-white p-4 rounded-b-md">
        <Hero />
      </main>
    </Layout>
  )
}
