import Header from '../src/components/Header'
import Menu from '../src/components/Menu'
import Footer from '../src/components/Footer'
import Head from 'next/head'

export default function IndexPage() {
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
      
      <Header isCartShow={true} />
      <Menu />
      <Footer 
      content={'Finalizou seu pedido? Apenas clique no carrinho e aproveite sua esfirra 😎'}
      />
    </div>
  )
}
