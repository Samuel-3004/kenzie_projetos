// Exercício 1
/*
function cubicSquare(){
    for(let i = 1; i <= 10; i++){
        console.log(i**3);
    }
}
cubicSquare() 
*/
// Exercício 2
/*
function divisiblesFor(x, y){
    for(let i = y; i <= x; i+=10){
        console.log(i);
    }
}
divisiblesFor(100, 10); 
*/

// Exercício 3
/*
function stringElement(a, b){
  let texto = a;
  let posicao = b;
  for(let i = 0; i < texto.length; i++){
    if(posicao == i){
      let resultado = texto[i].toUpperCase()
      return resultado
    }
  }
}
console.log(stringElement("algorítmos", 7)); */


// Exercício 4
/*
function stringSlicer(c, d){
    let texto = c;
    let posicao = d;
    for(let i = 0; i < texto.length; i++){
      if(i == posicao);
      let resultado = texto.substr(0, posicao);
      return resultado
    }
}
console.log(stringSlicer("ALGORÌTMOS", 4)); */


 
// Exercício 5
/*
function stringRest(e, f){
    let texto = e;
    let posicao = f;
    for(let i = 0; i < texto.length; i++){
      if(posicao == i){
        let resultado = texto.substr(i);
        return resultado
      }
    }
}
console.log(stringRest("ALGORÌTMOS", 2)); */

// Exercício 6
/*
function countVowels(palavra){    
    let contador = 0;
    if(typeof palavra !== 'string') {
      console.log(`Não é uma string`);
    } 
    else{
        for(let i = 0; i < palavra.length; i++) {
            if( palavra[i] == "a" || palavra[i] == "e" || palavra[i] == "i" || palavra[i] == "o" || palavra[i] == "u") {
              contador++;
            }
          }
    }
    console.log(contador);
  }
  countVowels("abacaxi");  
*/
// Exercício 7
/*
  function countTextOccurrences(string, pesquisa){
    let cont = 0;
    let palavra = string;
    for(let i = 0; i < palavra.length; i++){
        if(palavra[i].toLowerCase() == pesquisa){
          cont++
        }   
    }
    console.log(cont)
}
countTextOccurrences('Abacaxi', 'a') */

// Exercício 8 
/*
function reverterString(string){
  let novaString = "";
  for(let i = string.length - 1; i >= 0; i--){
    novaString += string[i];
  }
  return novaString;
}
let revert = reverterString("abacaxi");
console.log(revert)*/

// Exercício 9 
/*
function removeBlank(frase){
  let semEspaco = '';
  for(let index = 0; index < frase.length; index++){
    if(frase[index] != ' '){
      semEspaco = semEspaco + frase[index]; 
    }
  }
  return semEspaco;
}
let removido = removeBlank("Não ficará   espaços em branco");
console.log(removido) */

// Exercício 10
/*
function encryptText(frase){
  
  let novaFrase = "";
 
  for(let index = 0; index < frase.length; index++){
    if(frase[index] == "a"){
      novaFrase += "x";
    }  

    else if(frase[index] == 'A'){
      novaFrase += 'X';
    }

    else if(frase[index] == "e"){
      novaFrase += "y";
    }  

    else if(frase[index] == 'E'){
      novaFrase += 'Y';
    }

    else if(frase[index] == "i"){
      novaFrase += "w";
    }  

    else if(frase[index] == 'I'){
      novaFrase += 'W';
    }
    
    else if(frase[index] == "o"){
      novaFrase += "k";
    }  

    else if(frase[index] == 'O'){
      novaFrase += 'K';
    }

    else if(frase[index] == "u"){
      novaFrase += "z";
    }  

    else if(frase[index] == 'U'){
      novaFrase += 'Z';
    }

    else{
      novaFrase += frase[index];
    }
  }
  
  return novaFrase
}

console.log(encryptText("Uma frase ultra secreta que precisa ser criptografada"))
*/
