import { cartContext } from '../../context/Cart';
import {useContext} from "react"
import Link  from "next/link";
import { useRouter } from 'next/router'
import { FaShoppingCart } from "react-icons/fa"
import { IoIosArrowRoundBack }  from "react-icons/io"

export default function Header({isCartShow}){
    const {cart} = useContext(cartContext)
    const router = useRouter()

    function handleCartClick(){
        cart.length < 8 ? window.alert('Você precisa pedir pelo menos 8 esfirras :)') : router.push('/checkout')
    }

    return(
    <header className='flex bg-orange-600 items-center justify-around p-2 fixed w-full z-10 shadow-lg'>
        <Link href="/">
            <div className="font-semibold text-xl">FORMIGAS ESFIRRAS</div>
        </Link>
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
                <IoIosArrowRoundBack className="h-10 w-10" />
        </Link>
        }
    </header>
    )
}