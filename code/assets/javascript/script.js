
//Adicionar a imagem do personagem assim que você selecionar a carta dele
//Desenvolver um sistema em que a cada carta que um jogador ganhe, ele fique com a carta do oponente e vice versa

var carta1 = {
    nome: "Homem aranha",
    imagem: "https://i.pinimg.com/originals/44/10/83/441083c0c8d8edeb6f0187e74147dd25.jpg",
    atributos:{
      forca: 95,
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
      forca: 90,
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
  var carta7 = {
    nome: "Soldado Invernal",
    imagem: "https://pbs.twimg.com/media/EOrqiHAX4AE_NMl.jpg",
    atributos:{
      forca: 90,
      defesa: 85,
      inteligencia: 80
    }
  }
  var carta8 = {
    nome: "Venon",
    imagem: "https://i.pinimg.com/564x/a5/72/aa/a572aa873393288b3870b4a6769243c4.jpg",
    atributos:{
      forca: 90,
      defesa: 90,
      inteligencia: 60
    }
  }
  var carta9 = {
    nome: "Thanos",
    imagem: "https://universohq.com/wp-content/uploads/2014/10/thanos_rising.jpg",
    atributos:{
      forca: 100,
      defesa: 100,
      inteligencia: 99
    }
  }
  var carta10 = {
    nome: "Senhor das estrelas",
    imagem: "https://nerdbreak.com.br/wp-content/uploads/2017/04/starlord-001.jpg",
    atributos:{
      forca: 88,
      defesa: 75,
      inteligencia: 80
    }
  }
  var baralho = [carta1,carta2,carta3,carta4,carta5,carta6,carta7,carta8,carta9,carta10];
  //criando variavel para guardar a carta do jogador e a carta da maquina
  var cartaJogador
  var cartaMaquina
  //função para sortear cartas do jogo
  function sortearCarta(){

    embaralharCartas(baralho)
    dividirCartas(baralho)
    var numeroCartaMaquina = parseInt(Math.random()*cartasMaquina.length);
    cartaMaquina = cartasMaquina[numeroCartaMaquina];
    
    var numeroCartaJogador = parseInt(Math.random()*cartasJogador.length)
    while(numeroCartaJogador==numeroCartaMaquina){
      var numeroCartaJogador = parseInt(Math.random()*cartasJogador.length)
    };
    cartaJogador = cartasJogador[numeroCartaJogador];
  
     document.getElementById("btnSortear").disabled = true;
     document.getElementById("btnJogar").disabled = false;
     setTimeout(function(){
      exibirCarta()
      embaralhandoCartas.innerHTML = ""
     }, 5000);
     
     var embaralhandoCartas = document.getElementById("embaralhandoCartas");
     embaralhandoCartas.innerHTML = "<h2> Embaralhando cartas </h2>"
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
    var resultado = document.getElementById("resultado-final");
    console.log(atributoSelecionado)
    console.log(cartaJogador.atributos[atributoSelecionado])
    
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
    if(valorCartaMaquina>valorCartaJogador){
      resultado.innerHTML = "<h2 class='resultado-final'>Você perdeu</h2>"
      document.getElementById("btnJogar").disabled = true;
    } else if(valorCartaJogador>valorCartaMaquina){
      resultado.innerHTML =  "<h2 class='resultado-final'>Você Venceu!</h2>"
      document.getElementById("btnJogar").disabled = true;
    } else {
      resultado.innerHTML =  "<h2 class='resultado-final'>EMPATE!</h2>"
      document.getElementById("btnJogar").disabled = true;
    }
    exibirCartaMaquina()
    document.getElementById("btnReset").disabled = false;
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
function reset(){
  var divCartaMaquina = document.getElementById("carta-maquina");
  var divCartaJogador = document.getElementById("carta-jogador");
  var resultado = document.getElementById("resultado-final");
  var moldura = "<img src='https://wallpaperaccess.com/full/4834549.jpg' style=' width: inherit; height: inherit; position: absolute;'>"
  divCartaMaquina.style.backgroundImage = ""
  divCartaJogador.style.backgroundImage = ""
  divCartaJogador.innerHTML = moldura
  divCartaMaquina.innerHTML = moldura
  resultado.innerHTML = ""
  document.getElementById("btnSortear").disabled = true;  
  newRound()
  exibirCarta()
  exibirCartaMaquinaSemAtributos()
}
function exibirCartaMaquinaSemAtributos(){
  var divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var moldura = "<img src='https://i.pinimg.com/originals/4e/49/06/4e490632804acd7d22a85d0bcf3e319e.png' style=' width: inherit; height: inherit; position: absolute;'>"
    var tagHTML = "<div id='opcoes' class='carta-status'>"
    var opcoesTexto = ""
    for(var atributo in cartaMaquina.atributos){
      opcoesTexto += "<p class='cartamaquinaP'>"+atributo+"</p>";
    }
    var nomeMaquina = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    divCartaMaquina.innerHTML = moldura + tagHTML + nomeMaquina + opcoesTexto + "</div>"
}
function newRound(){
  var numeroCartaMaquina = parseInt(Math.random()*cartasMaquina.length);
  cartaMaquina = cartasMaquina[numeroCartaMaquina];
  
  var numeroCartaJogador = parseInt(Math.random()*cartasJogador.length)
  while(numeroCartaJogador==numeroCartaMaquina){
    var numeroCartaJogador = parseInt(Math.random()*cartasJogador.length)
  };
  cartaJogador = cartasJogador[numeroCartaJogador];
  document.getElementById("btnJogar").disabled = false;
}
//função embaralhar cartas

function embaralharCartas(embaralhar){
  for(var i = embaralhar.length -1; i>0; i--){
    const j = Math.floor(Math.random() * (i+1));
    [embaralhar[i], embaralhar[j]] = [embaralhar[j], embaralhar[i]];
  }
  return embaralhar;
}
var cartasMaquina = []
var cartasJogador = []

function dividirCartas(dividir){
  for(var i = dividir.length -1; i>0; i--){
    cartasJogador = dividir.slice(0,5)
    cartasMaquina = dividir.slice(5,10)
    var baralhoDivido = [cartasJogador,cartasMaquina]
  }
  return baralhoDivido
}
function exposeCardsPlayer(){
  var exposeCardsPlayerDiv = document.getElementById("exposeCardsPlayer");
  exposeCardsPlayerDiv.innerHTML = ""
  for(var i = 0; i < cartasJogador.length; i++){
      exposeCardsPlayerDiv.innerHTML += `<h2>${cartasJogador[i].nome}</h2>`
    }
}