import { cartContext } from '../../context/Cart';
import {useContext ,useState , useRef} from "react"
import stringPedido from "../../Functions/stringPedido";

export default function CartList(){
    const {cart} = useContext(cartContext)
    const [list, setList] = useState({})

    const inputName = useRef()
    const inputPayment = useRef()
    const inputLocation = useRef()
    const inputAddress = useRef()
    const inputObservation = useRef()

    function getCartPrice(){
        return cart === [] ? 0 : cart.reduce((sum, { price }) => sum + price,0)
    }

    function getCartList(name){
        cart.forEach(function({name}) {
            list[name] = (list[name] || 0) + 1;
        });
        return list
    }

    function handleOrder(){
        const orders = Object.entries(getCartList())
        const infoClient = {
            name: inputName.current.value,
            payment: inputPayment.current.value,
            address: inputAddress.current.value ,
            location: inputLocation.current.value,
            observation: inputObservation.current.value,
        }
        const total = getCartPrice()

        const finalString = window.encodeURIComponent(stringPedido(orders,infoClient,total))

        window.open("https://api.whatsapp.com/send?phone=556199187463&text=" + finalString , "_blank" )
    }

    return(
        <div className="bg-orange-700 pt-16 flex flex-col items-center">
            {Object.entries(getCartList()).map(([key, value]) => (
                <div key={key} className="bg-gray-300 text-center w-5/6 rounded mb-4 font-semibold">
                   {key}{' '}{value}x
                </div>
            ))
            }
            <div>
                <strong>Total:</strong>R${getCartPrice().toFixed(2)}
            </div>
            <div className="p-5 rounded bg-white w-5/6 max-w-6xl">
                <label className="block">
                    <span className="text-black font-bold">Nome</span>
                    <input ref={inputName} type="text" className=" mt-1 block w-full rounded p-2 border border-gray-400" placeholder="Seu Nome" />

                    <span className="text-black font-bold">Forma de pagamento</span>
                    <select ref={inputPayment} className=" block w-full mt-1 rounded p-2 border border-gray-400">
                        <option>Dinheiro</option>
                        <option>Cartão + taxa</option>
                        <option>PicPay</option>
                    </select>

                    <span className="text-black font-bold">Localidade</span>
                    <select ref={inputLocation} className=" block w-full mt-1 rounded p-2 border border-gray-400">
                        <option>Guará 1 e 2 (Grátis)</option>
                        <option>Octogonal (R$ 5.00)</option>
                        <option>Sudoeste (R$ 5.00)</option>
                        <option>Cruzeiro (R$ 5.00)</option>
                        <option>Águas Claras (R$ 5.00)</option>
                        <option>Asa Sul (R$ 10.00)</option>
                    </select>

                    <span className="text-black font-bold">Endereço</span>
                    <input ref={inputAddress} type="address" className=" mt-1 block w-full rounded p-2 border border-gray-400" placeholder="Endereço Completo" />

                    <span className="text-black font-bold">Observação</span>
                    <textarea ref={inputObservation} placeholder="Sem queijo..." className="mt-1 block w-full rounded p-2 border border-gray-400"></textarea>

                </label>
            </div>
            <button onClick={() => handleOrder()} className="bg-green-500 rounded-lg p-2 mt-10">Enviar Mensagem</button>
        </div>
    )
}