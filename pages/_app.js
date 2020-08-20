import '../styles/index.css'
import CartProvider from '../src/context/Cart'

function MyApp({ Component, pageProps }) {
  return (
  <CartProvider>
    <Component {...pageProps} />
  </CartProvider>
)
}

export default MyApp
