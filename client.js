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

    function launchProjectile(v, theta) {
        theta = (theta* Math.PI)/180;
        var distance = (Math.pow(v, 2) * Math.sin(2 * theta))/9.8;
        if (distance < 98) {
            return -1;
        } else if (distance > 102) {
            return 1; 
        } else {
            return 0; 
        }
    }

    res4 = launchProjectile(exercises["jaca-wars"].entrada.v,exercises["jaca-wars"].entrada.theta);

    function ehBissexto(ano) {
        if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
            return true;
        } else {
            return false;
        }
    }

    res5 = ehBissexto(exercises["ano-bissexto"].entrada.ano);

    function calcularVolumePizza(z, a) {
        const volume = Math.PI * Math.pow(z, 2) * a;
        return Math.round(volume);
    }

    res6 = calcularVolumePizza(exercises["volume-da-pizza"].entrada.z, exercises["volume-da-pizza"].entrada.a);


    function mru(s0,v,t){
        return s0 + v*t;
    }

    res7 = mru(exercises["mru"].entrada.s0, exercises["mru"].entrada.v, exercises["mru"].entrada.t);

    function inverterString(string) {
        return string.split('').reverse().join('');
    }

    stringInversa = inverterString(exercises['inverte-string'].entrada.string);

    function soma_valores(objeto) {
        return Object.values(objeto).reduce((a, b) => a + b);
    }


    sum = soma_valores(exercises["soma-valores"].entrada.objeto);


    axios.post("https://tecweb-js.insper-comp.com.br/exercicio/soma", { resposta: res1 }, config).then((response) => {console.log("soma");console.log(response.data)});
    axios.post("https://tecweb-js.insper-comp.com.br/exercicio/tamanho-string", { resposta: tamanhoString }, config).then((response) => {console.log("tamanho-string");console.log(response.data)});
    axios.post("https://tecweb-js.insper-comp.com.br/exercicio/nome-do-usuario", { resposta: nomeUsuario }, config).then((response) => {console.log("nome-usuario");console.log(response.data)});
    axios.post("https://tecweb-js.insper-comp.com.br/exercicio/jaca-wars", { resposta: res4 }, config).then((response) => {console.log("jaca-wars");console.log(response.data)});
    axios.post("https://tecweb-js.insper-comp.com.br/exercicio/ano-bissexto", { resposta: res5 }, config).then((response) => {console.log("ano-bissexto");console.log(response.data)});
    axios.post("https://tecweb-js.insper-comp.com.br/exercicio/volume-da-pizza", { resposta: res6 }, config).then((response) => {console.log("volume-da-pizza");console.log(response.data)});
    axios.post("https://tecweb-js.insper-comp.com.br/exercicio/mru", { resposta: res7 }, config).then((response) => {console.log("mru");console.log(response.data)});
    axios.post("https://tecweb-js.insper-comp.com.br/exercicio/inverte-string", { resposta: stringInversa }, config).then((response) => {console.log("inverte-string");console.log(response.data)});
    axios.post("https://tecweb-js.insper-comp.com.br/exercicio/soma-valores", { resposta: sum }, config).then((response) => {console.log("soma-valores");console.log(response.data);});
}   




main();