import { cartContext } from '../../context/Cart';
import {useContext ,useState , useRef , useEffect} from "react"
import stringPedido from "../../Functions/stringPedido";
import isEmpty from "../../Functions/isEmpty";
import { AiOutlineWhatsApp } from "react-icons/ai"
import { VscTriangleRight } from "react-icons/vsc" 
import { precosEntrega } from '../../data/precoEntrega'

export default function CartList(){

    useEffect(() =>{
        getCartList()
    },[])

    const {cart} = useContext(cartContext)
    const [list, setList] = useState({})

    const inputName = useRef()
    const inputPayment = useRef()
    const inputLocation = useRef()
    const inputAddress = useRef()
    const inputObservation = useRef()
    const inputDay = useRef()

    function getCartPrice(){
        return cart === [] ? 0 : cart.reduce((sum, { price }) => sum + price,0)
    }

    function getCartList(name){
        const newList = {}
        // Mapeia o objeto cart e conta quanto ha de cada item
        cart.forEach(function({name}) {
            newList[name] = (newList[name] || 0) + 1;
        });

        setList(newList)
    }

    function handleOrder(){
        // transforma um objeto em array
        const orders = Object.entries(list)

        const infoClient = {
            name: inputName.current.value,
            payment: inputPayment.current.value,
            address: inputAddress.current.value ,
            location: inputLocation.current.value,
            observation: inputObservation.current.value,
        }
        const total = getCartPrice()

        const finalString = window.encodeURIComponent(stringPedido(orders,infoClient,total))
        // Verifica se preencheu os campos
        isEmpty(infoClient) ? false : window.open("https://api.whatsapp.com/send?phone=5561999215126&text=" + finalString , "_blank" )
    }
    return(
        <div className="bg-orange-700 pt-16 flex flex-col items-center">
            <div className="bg-white w-5/6 rounded mb-4 p-2">
                {Object.entries(list).map(([key, value]) => (
                    <>
                    <div key={key} className="flex items-center bg-gray-300 rounded font-semibold py-1 my-1">
                        <VscTriangleRight /> {key}{' '}{value}x
                    </div>
                    </>
                ))
                }
            </div>
            
            <div className="p-2 mb-3 bg-white rounded">
                <strong>Total:</strong>R${getCartPrice().toFixed(2)}
            </div>
            <div className="p-5 rounded bg-white w-5/6 max-w-6xl">
                <label className="block">
                    <span className="text-black font-bold">Nome</span>
                    <input ref={inputName} type="text" className=" mt-1 block w-full rounded p-2 border border-gray-400" placeholder="Seu Nome" />
                    
                    <span className="text-black font-bold">Forma de pagamento</span>
                    <select ref={inputPayment} className=" block w-full mt-1 rounded p-2 border border-gray-400">
                        <option>Dinheiro</option>
                        <option>Cartão</option>
                    </select>

                    <span className="text-black font-bold">Localidade</span>
                    <select ref={inputLocation} className=" block w-full mt-1 rounded p-2 border border-gray-400">
                        {precosEntrega.map(preco => (
                            <option>{preco.label}</option>
                        ))}
                    </select>

                    <span className="text-black font-bold">Endereço</span>
                    <input ref={inputAddress} type="address" className=" mt-1 block w-full rounded p-2 border border-gray-400" placeholder="Endereço Completo" />

                    <span className="text-black font-bold">Observação</span>
                    <textarea ref={inputObservation} placeholder="Sem queijo..." className="mt-1 block w-full rounded p-2 border border-gray-400"></textarea>

                </label>
            </div>
            <div className="pt-5 text-center">
                <strong>Entregas: </strong>pedidos com um dia de antecedência!
            </div>
            <div className="pt-5">
                <strong>ATENÇÃO:</strong> Nossas <strong>esfirras</strong> são <strong>congeladas!</strong>
            </div>
            <div onClick={() => handleOrder()} className="flex items-center bg-green-500 rounded-lg p-4 space-x-2 mt-6">
                <button >Enviar Pedido</button>
                <AiOutlineWhatsApp className="h-6 w-6" />
            </div>
        </div>
    )
}