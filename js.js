var txtBox   = document.getElementById("message");
var pergunta = "";
var resposta = "";
var flagResp = false;
var texto    = " poderoso SUED?";
var posTexto = 0;

function teste(msg){
  alert(pergunta);
  alert(resposta);
}

function verificaTecla(e, message)
{
  if (e.keyCode) // testa se é IE
    var tecla = e.keyCode; // variavel tecla é igualada ao valor da tecla pressionada no IE
  else if (e.which) // testa se é FF
    var tecla = e.which; // variavel tecla é igualada ao valor da tecla pressionada no FF
 
  if(flagResp){ //Este IF verifica se a tecla de resposta está ativada para alimentar a variável resposta
    resposta += String.fromCharCode(tecla);  //Soma tecla precionada a string resposta
    if(posTexto < 15){
      pergunta += texto.charAt(posTexto);
      posTexto += 1;
    }
    message.blur();
  }

  if(tecla == 59){ //Aqui está verificando se a tecla pressionada é a ";"
    flagResp = true;
    message.value = pergunta;
  }else if(!flagResp){ //Se não verifica se a flag está desativada
    if(e.keyCode != 8){
      pergunta = message.value + String.fromCharCode(tecla); 
    }
    if(e.keyCode == 8){
      pergunta = message.value + String.fromCharCode(tecla); 
    }
  }
}

function solta(message){
  if(flagResp){
    message.value = pergunta;
  }
  message.focus();
}
