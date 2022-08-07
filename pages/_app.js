import '../styles/index.css'
import CartProvider from '../src/context/Cart'
import Router from "next/router";
import withGA from "next-ga";
import { IconContext } from "react-icons";

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <IconContext.Provider
        value={{ color: 'white', size: '50px' }}
      >
        <Component {...pageProps} />
      </IconContext.Provider>
    </CartProvider>
  )
}

export default withGA("UA-176598763-1", Router)(MyApp);
