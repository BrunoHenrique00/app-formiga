import { cartContext } from '../../context/Cart';
import { useContext } from "react"
import Link from "next/link";
import { useRouter } from 'next/router'
import { FaShoppingCart } from "react-icons/fa"
import { IoIosArrowRoundBack } from "react-icons/io"

export default function Header({ isCartShow }) {
  const { cart } = useContext(cartContext)
  const router = useRouter()

  function handleCartClick() {
    cart.length < 8 ? window.alert('Você precisa pedir pelo menos 8 esfirras :)') : router.push('/checkout')
  }

  return (
    <header className='flex bg-orange-600 items-center justify-around p-2 fixed w-full z-10 shadow-lg'>
      <div className='flex items-center'>
        <img src="https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/8d6d97c9-e3e3-452e-9afd-802e2323049b/202202060025_K95v_i.jpg" className='w-10 h-10 rounded-full mt-2 object-cover' />
        <Link href="/">
          <div className="font-semibold text-xl">BRATEN</div>
        </Link>
      </div>
      {isCartShow &&
        <div onClick={handleCartClick} className="flex relative px-5">
          <FaShoppingCart className="h-10 w-10" />
          {
            cart.length > 0 && <div className="bg-white rounded-full absolute top-0 right-0 h-6 w-6 z-20 text-center">{cart.length}</div>
          }
        </div>
      }

      {!isCartShow &&
        <Link href="/">
          
          <IoIosArrowRoundBack className="h-10 w-10" color='white'/>
        </Link>
      }
    </header>
  )
}