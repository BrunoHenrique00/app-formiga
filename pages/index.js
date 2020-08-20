import Header from '../src/components/Header'
import Menu from '../src/components/Menu'
import Footer from '../src/components/Footer'

export default function IndexPage() {
  return (
    <div>
      <Header isCartShow={true} />
      <Menu />
      <Footer />
    </div>
  )
}
