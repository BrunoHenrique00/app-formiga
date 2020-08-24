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
            <div className="font-semibold">FORMIGAS ESFIRRAS</div>
        </Link>
        {isCartShow && 
        <div className="flex">
            <FaShoppingCart onClick={handleCartClick} className="h-10 w-10" />
            <div className="">{cart.length}</div>
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