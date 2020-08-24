import Footer from '../src/components/Footer'
import Header from '../src/components/Header'
import CartList from '../src/components/CartList'
import Head from 'next/head'

export default function Checkout() {
  return (
    <div>
      <Head>
        <title>Formigas Esfirras</title>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"></link>
      </Head>

      <Header isCartShow={false} />
      <CartList />
      <Footer content={'Obrigado por comprar conosco! 😆'} />
    </div>
  )
}
