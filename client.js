const axios = require("axios");

async function get_token(){
    const config = {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    }

    return axios
        .post("https://tecweb-js.insper-comp.com.br/token", { username: "rafael agnelo" }, config)
        .then((response) => response.data.accessToken);
}


async function get_exercises(token){
    const config2 = {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }
    return axios
        .get("https://tecweb-js.insper-comp.com.br/exercicio", config2)
        .then((response) => response.data)
}

async function main(){
    let token = await get_token();
    let exercises = await get_exercises(token);
    const config = {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`
        }

    }
    console.log(exercises);

    res1 = exercises.soma.entrada.a + exercises.soma.entrada.b;

    tamanhoString = exercises['tamanho-string'].entrada.string.length;

    nomeUsuario = exercises['nome-do-usuario'].entrada.email.split('@')[0];



    

    





    axios.post("https://tecweb-js.insper-comp.com.br/exercicio/soma", { resposta: res1 }, config).then((response) => {console.log("soma");console.log(response.data)});
    axios.post("https://tecweb-js.insper-comp.com.br/exercicio/tamanho-string", { resposta: tamanhoString }, config).then((response) => {console.log("tamanho-string");console.log(response.data)});
    axios.post("https://tecweb-js.insper-comp.com.br/exercicio/nome-do-usuario", { resposta: nomeUsuario }, config).then((response) => {console.log("nome-usuario");console.log(response.data)});
}   




main();