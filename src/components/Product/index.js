import React, { useState, useContext, useEffect }from 'react';
import { cartContext } from '../../context/Cart';


export default function Product({name,price}){
    const [number, setNumber] = useState(0)
    const {cart,setCart} = useContext(cartContext)

    useEffect(() => {
        let count = 0
        cart.forEach(({name: nameCart}) => {
            if(nameCart === name){
                count++
            }
        })
        setNumber(count)
    },[cart,name])

    function removeFromCart(number,name){
        // Verifica se o numero e zero
        number === 0 ? setNumber(number) : setNumber(number - 1)
        //Retira o primeiro item que encontrar, mesmo repetido...
        for (let index = 0; index < cart.length; index++) {
            if(cart[index].name === name){
                cart.splice(index,1)
                break;  
            }
        }
        const newCart = [...cart]

        setCart(newCart)
        console.log(newCart)
    }
    function addProduct(number,name,price){
        setCart([...cart,{ name , price }])
        setNumber(number + 1)
    }
    return(
        <div className=''>
            <div className='relative bg-white w-11/12 m-auto rounded-lg flex flex-col items-center shadow-md'>
                <div className='font-semibold absolute top-0 right-0 pr-2'>{number}</div>
                <img src="./assets/esfirra.png" className='w-20 h-20 rounded-full mt-2'/>
                <div className="font-semibold">{name}</div>
                <div>R${price.toFixed(2)}</div> 
            </div>
            <div className="flex justify-center py-2">
                <img src="./assets/plus.png" className='px-3' alt="plus button" onClick={() => addProduct(number,name,price)} />
                <img src="./assets/minus.png" className='px-3' alt="minus button" onClick={() => removeFromCart(number,name,price)} />
            </div>
        </div>
    )
}