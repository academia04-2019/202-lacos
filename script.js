// for(let contador=0; contador<4; contador++){
//   console.log("Lucas");
// }

// for(let contador2=10; contador2>0; contador2--){
//   console.log("Teste");
// }


// for(let i=0; i<signos.length; i++){
//   console.log(signos[i]);
// }


let signos = ["aries", "aquario", "cancer", "peixes", "sagitouro", "escorpiao", "libra","gemeos"];
// O signo no indice 0 é: aries;

// FARINHA
for(let indice in signos){
  console.log("O signo no indice " + indice + " é: " + signos[indice]);
}