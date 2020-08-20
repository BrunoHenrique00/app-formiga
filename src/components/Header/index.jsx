import { cartContext } from '../../context/Cart';
import {useContext} from "react"
import Link  from "next/link";

export default function Header({isCartShow}){
    const {cart} = useContext(cartContext)

    return(
    <header className='flex bg-orange-600 items-center justify-around p-2 fixed w-full z-10 shadow-lg'>
        <Link href="/">
            <div className="font-semibold">FORMIGAS ESFIRRAS</div>
        </Link>
        {isCartShow && 
        <div className="flex">
            <Link href="/checkout">
                <img src="./assets/cart.png" alt="Cart"/>
            </Link>
            <div className="">{cart.length}</div>
        </div>
        }
        
        {!isCartShow &&
        <Link href="/">
            <img className="pl-12" src="./assets/left-arrow.png" />
        </Link>}
    </header>
    )
}