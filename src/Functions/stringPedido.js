export default function stringPedido(arr,{ name, payment, address, location}, total){

    return (
        `*Olá, gostaria de fazer um pedido. Os itens escolhidos são:\n*  
${arr.map(([key, value]) => (
        `-*${key}*\n*Quantidade:* ${value/2}\n\n`
        )).join('')
        }
        ---------------------------------------------  
        *Valor total do pedido*:  R$${total.toFixed(2)}  
        
        Nome: ${name}
        
        *Forma de pagamento*: ${payment} 
       
        *Endereço para entrega*:  
        ${address}, Cidade: ${location}`
    )
}