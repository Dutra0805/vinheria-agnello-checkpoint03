// Array de vinhos

const vinhos = [
    { nome: "Louis V", tipo: "rose", safra: 2014, estoque: 22 },
    { nome: "Roschi", tipo: "tinto", safra: 2008, estoque: 8 },
    { nome: "Gucci", tipo: "branco", safra: 1998, estoque: 3 },
    { nome: "Caribbean", tipo: "tinto", safra: 2019, estoque: 5 }
];

// Adiciona um novo vinho
function adicionarVinho(nome, tipo, safra, estoque) {
    const novoVinho = { nome: nome, tipo: tipo, safra: safra, estoque: estoque };
    vinhos.push(novoVinho);
    console.log("Vinho adicionado: " + nome);
}

// Lista todos os vinhos 
function listarVinhos() {
    console.log("Vinhos: ");
    vinhos.forEach(function (vinho) {
        console.log(vinho.nome + " | " + vinho.tipo + " | Safra: " + vinho.safra + " | Estoque: " + vinho.estoque);
    });
}

// Função dos vinhos com estoque abaixo de 5
function vinhosEstoqueBaixo() {
    return vinhos.filter(function (vinho) {
        return vinho.estoque < 5;
    });
}

// Soma o total de vinhos no estoque
function estoqueTotal() {
    return vinhos.reduce(function (total, vinho) {
        return total + vinho.estoque;
    }, 0);
}

// Os nomes passam a ser maiusculos
function nomesEmCaixaAlta() {
    return vinhos.map(function (vinho) {
        return vinho.nome.toUpperCase();
    });
}

// Adiciona outro vinho a lista
adicionarVinho("Betim", "tinto", 2007, 2);

listarVinhos();

console.log("Vinhos com menos de 5 no estoque: ");
vinhosEstoqueBaixo().forEach(function (vinho) {
    console.log(vinho.nome + " - " + vinho.estoque + " unidades");
});

// Total do estoque de vinhos
console.log("Total do estoque");
console.log(estoqueTotal() + " garrafas");

console.log("Nomes Em Caixa Alta");
console.log(nomesEmCaixaAlta());

// Resumo do alert
alert("Vinharia Agnello\n\nEstoque total: " + estoqueTotal() + " garrafas\nVinhos com pouco estoque: " + vinhosEstoqueBaixo().length + "\n\nAbra o console (F12)");