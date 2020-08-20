import Footer from '../src/components/Footer'
import Header from '../src/components/Header'
import CartList from '../src/components/CartList'
    

export default function Checkout() {
  return (
    <div>
      <Header isCartShow={false} />
      <CartList />
      <Footer />
    </div>
  )
}
