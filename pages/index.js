import Header from '../src/components/Header'
import Menu from '../src/components/Menu'
import Footer from '../src/components/Footer'
import Head from 'next/head'

export default function IndexPage() {
  return (
    <div>
      <Head>
        <title>Formiga Esfirras</title>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"></link>
      </Head>
      
      <Header isCartShow={true} />
      <Menu />
      <Footer />
    </div>
  )
}
