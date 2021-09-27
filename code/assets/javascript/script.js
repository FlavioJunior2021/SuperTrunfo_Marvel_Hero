//Verificar o que acontece caso você não selecione nenhum dos atributos e como solucionar
//Desenvolver um sistema em que a cada carta que um jogador ganhe, ele fique com a carta do oponente e vice versa
//Adicionar a imagem do personagem assim que você selecionar a carta dele
//Transformar as funções exibirCartaMaquina() e exibirCartaJogador() em apenas uma, chamada exibirCarta(), utilizando para isso a passagem de parâmetros


var carta1 = {
    nome: "Homem aranha",
    atributos:{
      forca: 85,
      defesa: 75,
      inteligencia: 95
  }
  };
  var carta2 = {
    nome: "Capitão America",
    atributos:{
      forca: 90,
      defesa: 100,
      inteligencia: 75
    }
    
  };
  var carta3 = {
    nome: "Homem de Ferro",
    atributos:{
       forca: 80,
      defesa: 88,
      inteligencia: 100
    }
  };
  var carta4 = {
    nome: "Hulk",
    atributos:{
       forca: 100,
      defesa: 100,
      inteligencia: 15
    }
  };
  var carta5 = {
    nome: "Doutor Estranho",
    atributos:{
       forca: 80,
      defesa: 85,
      inteligencia: 97
    }
  };
  var carta6 = {
    nome: "Capitã Marvel",
    atributos:{
       forca: 100,
      defesa: 100,
      inteligencia: 85
    }
  };
  var baralho = [carta1,carta2,carta3,carta4,carta5,carta6];
  //criando variavel para guardar a carta do jogador e a carta da maquina
  var cartaJogador
  var cartaMaquina
  //função para sortear cartas do jogo
  function sortearCarta(){
    var numeroCartaMaquina = parseInt(Math.random()*baralho.length);
    cartaMaquina = baralho[numeroCartaMaquina];
    
    var numeroCartaJogador = parseInt(Math.random()*baralho.length)
    while(numeroCartaJogador==numeroCartaMaquina){
      var numeroCartaJogador = parseInt(Math.random()*baralho.length)
    };
    cartaJogador = baralho[numeroCartaJogador];
  
     document.getElementById("btnSortear").disabled = true;
     document.getElementById("btnJogar").disabled = false;
     exibirOpcoes()
  }
  function exibirOpcoes(){
    var opcoes = document.getElementById("opcoes");
    var opcoesTexto = ""
    for(var atributo in cartaJogador.atributos){
      opcoesTexto += "<input type='radio' name='atributo' class='inputOpcoes' value='"+ atributo +"'>"+atributo
    }
    opcoes.innerHTML = opcoesTexto
  }
  function obterAtributo(){
    var radioAtributos = document.getElementsByName("atributo");
    var resultado = document.getElementById("resultado");
    for(var i = 0; i<radioAtributos.length; i++){
      if(radioAtributos[i].checked==true){
        return radioAtributos[i].value;
      } else if(radioAtributos[i].checked===false){
        resultado.innerHTML = "<h2>Selecione um atributo</h2>"
        obterAtributo()
      }
    };
  };
  function jogar(){
    var atributoSelecionado = obterAtributo()
    var resultado = document.getElementById("resultado");
    console.log(atributoSelecionado)
    console.log(cartaJogador.atributos[atributoSelecionado])
    
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
    if(valorCartaMaquina>valorCartaJogador){
      resultado.innerHTML = "<h2>Você perdeu</h2>"
      document.getElementById("btnJogar").disabled = true;
    } else if(valorCartaJogador>valorCartaMaquina){
      resultado.innerHTML = "<h2>Você Venceu!</h2>"
      document.getElementById("btnJogar").disabled = true;
    } else {
      resultado.innerHTML = "<h2>Empate!</h2>"
      document.getElementById("btnJogar").disabled = true;
    }
  }