import Header from '../src/components/Header'
import Menu from '../src/components/Menu'
import Footer from '../src/components/Footer'
import Head from 'next/head'

export default function IndexPage() {
  return (
    <div>
      <Head>
        <title>Braten Burguer</title>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"></link>
      </Head>
      
      <Header isCartShow={true} />
      <Menu />
      <Footer 
      content={'Finalizou seu pedido? Apenas clique no carrinho e aproveite sua esfirra 😎'}
      />
    </div>
  )
}
