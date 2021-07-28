export default async function handler(req, res) {

    const dayInMilliseconds = 1000 * 60 * 60 * 12;
    const data = {
        user : {
            email: "bh.bsb2011@hotmail.com",
            password: process.env.PASSWORD
        }
    }

    const assinarData = {
        survey:{
            household_id: null,
            latitude: -15.8054679,
            longitude: -47.9397605,
            symptom: []
        }
    }

    async function tokenGuardioes(){
        try {
            const response = await fetch('http://gds.proepi.org.br/user/login', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept-Encoding': 'gzip,deflate'
                }
            })
            
            return response.headers.get('Authorization')
        } catch (error) {
            console.log(error)
        }
    }

    async function assinarGuardioes(){
        try {
            const token = await tokenGuardioes()
            const response = await fetch('http://gds.proepi.org.br/users/18569/surveys', {
                method: 'POST',
                body: JSON.stringify(assinarData),
                headers: {
                    'Authorization': token,
                    'Content-Type': 'application/json'
                }
            })
            const json = await response.json()
            if(json.errors){
                console.log("Funcionando...")
                return "Hoje eu ja me inscrevi,funcionando..."
            }else{
                return "Inscricao feita com sucesso!"
            }
        } catch (error) {
            return error
        }
    }
    
    const status = await assinarGuardioes()
    setInterval(assinarGuardioes, dayInMilliseconds)
    res.status(200).json({ status: status})
}