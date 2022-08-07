import { precosEntrega } from '../data/precoEntrega'

export default function stringPedido(arr,{ name, payment, address, location, observation}, total){
    const precoEntrega = precosEntrega.find(preco => preco.label === location)
    console.log(precoEntrega)
    return (
        `*Olá, gostaria de fazer um pedido. Os itens escolhidos são*:\n  
${arr.map(([key, value]) =>(`*${key}*\n*Quantidade:* ${value}
--------------
`)).join('')}
        ---------------------------------------------  
        *Valor total do pedido*:  R$${precoEntrega.value === 'Grátis' ? total.toFixed(2) + ' (Sem Taxa)' : `${total.toFixed(2)} + Taxa = ${(total + precoEntrega.value).toFixed(2)}` }  
        
        *Nome*: ${name}
        
        *Forma de pagamento*: ${payment}

        *Observação*: ${observation ? observation : 'Nenhuma'}
       
        *Endereço para entrega*:  
        ${address}, Cidade: ${location}`
    )
}