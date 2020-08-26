export default function isEmpty({ name , address}){
    if(!name){
        window.alert('Ops, Parece que faltou seu nome!')
        return true;
    }
    if(!address){
        window.alert('Opa, Parece que faltou seu endereço!')
        return true;
    }
    else{
        return false
    }
}