//Verificar o que acontece caso você não selecione nenhum dos atributos e como solucionar
//Utilizar personagens que você gosta para criar as cartas e compartilhe com o pessoal lá na comunidade do Discord!
//Adicionar a imagem do personagem assim que você selecionar a carta dele

var carta1 = {
    imagem: "https://i.pinimg.com/474x/80/03/cd/8003cddfc723914e236f047793f25d7d.jpg",
    nome: "Homem Aranha",
    atributos:{
        ataque:9,
        defesa:6,
        acrobacias:10,
        magia:0,
        forca: 9,
        inteligencia:9
    }
};
var carta2 = {
    imagem: "https://i.pinimg.com/474x/6a/48/24/6a48243db07f036cf67372bcb40c3268.jpg",
    nome: "Homem de Ferro",
    atributos:{
        ataque:7,
        defesa:9,
        acrobacias:8,
        magia:0,
        forca: 8,
        inteligencia:10
    }
};
var carta3 = {
    imagem: "https://www.hqzona.com.br/wp-content/uploads/2018/03/fmt_94_24_kehp1.jpg",
    nome: "Capitão America",
    atributos:{
        ataque:8,
        defesa:10,
        acrobacias:7,
        magia:0,
        forca: 9,
        inteligencia:6
    }
};
var carta4 = {
    imagem: "https://i.pinimg.com/originals/86/ef/54/86ef544581734054623ef7cf15fe0abd.jpg",
    nome: "Hulk!",
    atributos:{
        ataque:10,
        defesa:10,
        acrobacias:5,
        magia:0,
        forca: 10,
        inteligencia:3
    }
};
var carta5 = {
    imagem: "https://static.wikia.nocookie.net/marvel/images/7/79/Black_Widow_Vol_6_12_Textless.jpg/revision/latest/top-crop/width/360/height/450?cb=20181108015928&path-prefix=pt-br",
    nome: "Viuva Negra",
    atributos:{
        ataque:7,
        defesa:7,
        acrobacias:9,
        magia:0,
        forca: 5,
        inteligencia:8
    }
};
var carta6 = {
    imagem: "https://i1.wp.com/chefaodefase.com.br/Pt-br/wp-content/uploads/2018/02/Dr-Estranho5.jpg",
    nome: "Doutor Estranho",
    atributos:{
        ataque:9,
        defesa:9,
        acrobacias:5,
        magia:10,
        forca: 5,
        inteligencia:9
    }
};

var baralho = [carta1,carta2,carta3,carta4,carta5,carta6];

//criando variaveis para guardar carta da maquina e carta do jogador
var cartaMaquina
var cartaPlayer

function sortearCarta() {
    
    //sorteando carta da maquina
    var numeroCartaMaquina = parseInt(Math.random()*baralho.length);
    cartaMaquina = baralho[numeroCartaMaquina];

    //sorteando carta do jogador
    var numeroCartaPlayer = parseInt(Math.random()*baralho.length);
    while(numeroCartaPlayer==numeroCartaMaquina){
        var numeroCartaPlayer = parseInt(Math.random()*baralho.length);
    }
    cartaPlayer = baralho[numeroCartaPlayer];

    //habilitando botão jogar e desabilitando botão sortear
    document.getElementById("btnSortear").disabled = true
    document.getElementById("btnJogar").disabled = false;

    //exibindo opcoes de atributos para o player
    exibirOpcoes()
    exibirCartaJogador()
    exibirCartaComputador()
};

//função para imprimir opções
function exibirOpcoes(){
    var opcoes = document.getElementById("opcoes");
    var opcoesValor = "";

    for(var atributo in cartaPlayer.atributos){
        opcoesValor += "<input type='radio' name='atributo' value='"+atributo+"'>"+atributo;
    };
    opcoes.innerHTML = opcoesValor;
};

//função para obter o valor do input
function obterAtributo(){
    var radioAtributo = document.getElementsByName("atributo");
    for(var i = 0; i < radioAtributo.length; i++){
        if(radioAtributo[i].checked==true){
            return radioAtributo[i].value
        };
    };
};

//função jogar, responsavel por toda a lógica do jogo
function jogar(){
    var atributoSelecionado = obterAtributo()
    var resultado = document.getElementById("resultado");

    var valorCartaPlayer = cartaPlayer.atributos[atributoSelecionado];
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

    if(valorCartaPlayer>valorCartaMaquina){
        resultado.innerHTML = "<h2>VOCÊ VENCEU</h2>"
        document.getElementById("btnJogar").disabled = true;
    } else if(valorCartaPlayer<valorCartaMaquina){
        resultado.innerHTML = "<h2>VOCÊ PERDEU</h2>"
        document.getElementById("btnJogar").disabled = true;
    } else{
        resultado.innerHTML = "<h2>EMPATE</h2>"
        document.getElementById("btnJogar").disabled = true;
    };
};

function exibirCartaJogador(){
    var heroiSorteado = document.getElementById("heroiJogador");
    heroiSorteado.innerHTML = `${cartaPlayer.nome}<br><p>Essa é sua carta</p><br><img id='imagemJogador'src="${cartaPlayer.imagem}">`
};
function exibirCartaComputador(){
    var heroiSorteadoMaquina = document.getElementById("heroiMaquina");
    heroiSorteadoMaquina.innerHTML = `${cartaMaquina.nome}<br><p>Carta do computador</p><br><img id='imagemDoComputador'src="${cartaMaquina.imagem}">`
}
function exibirBaralho(){
    var elemento = "";
    for(var j = 0; j < baralho.length; j++){
        elemento +=  "<img id='carta-jogador' src=" + baralho[j].imagem +">";
    };
    var cartajogador = document.getElementById("carta-jogador");
    cartajogador.innerHTML = elemento;
};
//exibirBaralho(); 