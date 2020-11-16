import { precosEntrega } from '../data/precoEntrega'

export default function stringPedido(arr,{ name, payment, address, location, observation, day}, total){
    return (
        `*Olá, gostaria de fazer um pedido. Os itens escolhidos são*:\n  
${arr.map(([key, value]) =>(`*${key}*\n*Quantidade:* ${value}
--------------
`)).join('')}
        ---------------------------------------------  
        *Valor total do pedido*:  R$${precosEntrega[location] === 'Grátis' ? total.toFixed(2) + ' (Sem Taxa)' : `${total.toFixed(2)} + Taxa = ${(total + precosEntrega[location]).toFixed(2)}` }  
        
        *Nome*: ${name}
        
        *Forma de pagamento*: ${payment}

        *Observação*: ${observation ? observation : 'Nenhuma'}

        *Dia para entrega*: ${day}
       
        *Endereço para entrega*:  
        ${address}, Cidade: ${location}`
    )
}