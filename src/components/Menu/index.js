import Product from "../Product/";
import { menu } from '../../data/menu'

export default function Menu(){

    return(
        <div className="w-full pt-16 bg-orange-700">
            <div className="grid grid-cols-2">
            {menu.map(({name,price},index) => <Product key={index} name={name} price={price}/>)}
            </div>
        </div>
    )
}