import '../styles/index.css'
import CartProvider from '../src/context/Cart'
import Router from "next/router";
import withGA from "next-ga";

function MyApp({ Component, pageProps }) {
  return (
  <CartProvider>
    <Component {...pageProps} />
  </CartProvider>
)
}

export default withGA("UA-176598763-1", Router)(MyApp);
