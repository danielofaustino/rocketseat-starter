let endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
};

const Frase = (a) => {

return console.log(`O usuario mora em ${a.cidade} / ${a.uf}, no bairro ${a.bairro}, na rua ${a.rua} com n ${a.numero}`)


}


Frase(endereco);

