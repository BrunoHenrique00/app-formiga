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

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-UA-176598763-1"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `<!-- Global site tag (gtag.js) - Google Analytics -->
              <script async src="https://www.googletagmanager.com/gtag/js?id=UA-176598763-1"></script>
              <script>
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
              
                gtag('config', 'UA-176598763-1');
              </script>
              `,
          }}
        />


      </Head>

      <Header isCartShow={false} />
      <CartList />
      <Footer content={'Obrigado por comprar conosco! 😆'} />
    </div>
  )
}
