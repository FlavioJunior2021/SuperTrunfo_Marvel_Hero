//Verificar o que acontece caso você não selecione nenhum dos atributos e como solucionar
//Desenvolver um sistema em que a cada carta que um jogador ganhe, ele fique com a carta do oponente e vice versa
//Adicionar a imagem do personagem assim que você selecionar a carta dele
//Transformar as funções exibirCartaMaquina() e exibirCartaJogador() em apenas uma, chamada exibirCarta(), utilizando para isso a passagem de parâmetros


var carta1 = {
    nome: "Homem aranha",
    imagem: "https://i.pinimg.com/originals/44/10/83/441083c0c8d8edeb6f0187e74147dd25.jpg",
    atributos:{
      forca: 85,
      defesa: 75,
      inteligencia: 95
  }
  };
  var carta2 = {
    nome: "Capitão America",
    imagem: "http://1.bp.blogspot.com/-o1c-lwwMEIs/Vk5pozoCcXI/AAAAAAAAAsQ/HigEX_SpjXQ/s1600/capitao_america.jpg",
    atributos:{
      forca: 90,
      defesa: 100,
      inteligencia: 75
    }
    
  };
  var carta3 = {
    nome: "Homem de Ferro",
    imagem: "https://www.cinehero.com.br/wp-content/uploads/2021/01/gggggg.jpg",
    atributos:{
       forca: 80,
      defesa: 88,
      inteligencia: 100
    }
  };
  var carta4 = {
    nome: "Hulk",
    imagem: "http://pm1.narvii.com/6933/26ab0489816e81efc87e9de66658888ecd5eb89ar1-424-512v2_00.jpg",
    atributos:{
       forca: 100,
      defesa: 100,
      inteligencia: 15
    }
  };
  var carta5 = {
    nome: "Doutor Estranho",
    imagem: "https://westfieldcomics.com/wow/art/large/NOV180933.jpg",
    atributos:{
       forca: 90,
      defesa: 85,
      inteligencia: 97
    }
  };
  var carta6 = {
    nome: "Capitã Marvel",
    imagem: "https://i.pinimg.com/originals/b9/b5/3a/b9b53a947db0af96e4f60dfa2fd233d3.jpg",
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
     exibirCarta()
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
      if(radioAtributos[i].checked == true){
        return radioAtributos[i].value;
      };
    };
    for(var i = 0; i<radioAtributos.length; i++){
        if(radioAtributos[i].checked === false){
            resultado.innerHTML = "<h2>Selecione um atributo</h2>"
            obterAtributo()
        };
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
    exibirCartaMaquina()
  }
  function exibirCarta(){
    var divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var moldura = "<img src='https://i.pinimg.com/originals/4e/49/06/4e490632804acd7d22a85d0bcf3e319e.png' style=' width: inherit; height: inherit; position: absolute;'>"
    var tagHTML = "<div id='opcoes' class='carta-status'>"
    var opcoesTexto = ""
    for(var atributo in cartaJogador.atributos){
      opcoesTexto += "<input type='radio' name='atributo' value='"+ atributo +"'>"+" "+" "+atributo + " " + cartaJogador.atributos[atributo]+"<br>";
    }
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    divCartaJogador.innerHTML = moldura +  tagHTML + nome + opcoesTexto + "</div>"
}
  function exibirCartaMaquina(){
    var divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`

    var moldura = "<img src='https://i.pinimg.com/originals/4e/49/06/4e490632804acd7d22a85d0bcf3e319e.png' style=' width: inherit; height: inherit; position: absolute;'>"
    var tagHTML = "<div id='opcoes' class='carta-status'>"
    var opcoesTexto = ""
    for(var atributo in cartaMaquina.atributos){
      opcoesTexto += "<p class='cartamaquinaP'>"+atributo + " " + cartaMaquina.atributos[atributo]+"</p>";
    }
    var nomeMaquina = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    divCartaMaquina.innerHTML = moldura + tagHTML + nomeMaquina + opcoesTexto + "</div>"
}