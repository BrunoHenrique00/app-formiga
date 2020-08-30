export default function stringPedido(arr,{ name, payment, address, location, observation}, total){

    return (
        `*Olá, gostaria de fazer um pedido. Os itens escolhidos são*:\n  
${arr.map(([key, value]) =>(`*${key}*\n*Quantidade:* ${value/2}
--------------
`)).join('')}
        ---------------------------------------------  
        *Valor total do pedido*:  R$${total.toFixed(2)}  
        
        Nome: ${name}
        
        *Forma de pagamento*: ${payment}

        *Observação*: ${observation ? observation : 'Nenhuma'}
       
        *Endereço para entrega*:  
        ${address}, Cidade: ${location}`
    )
}