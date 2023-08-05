const atacante = prompt("Qual é o nome do personagem atacante?");
const poderDeAtaque = parseFloat(prompt("Qual é o poder de ataque?"));

const defensor = prompt("Qual é o nome do personagem defensor?");
let vida = parseFloat(prompt("Quantos pontos de vida ele tem?"));
const poderDeDefesa = parseFloat(prompt("Qual é o poder de defesa dele?"));
const possuiEscudo = prompt("Possui escudo? (Sim/Não)");

let danoCausado = 0;

if (poderDeAtaque > poderDeDefesa && possuiEscudo === " Não ") {
  danoCausado = poderDeAtaque - poderDeDefesa;
} else if (poderDeAtaque > poderDeDefesa && possuiEscudo === " Sim ") {
  danoCausado = (poderDeAtaque - poderDeDefesa) / 2;
}

vida -= danoCausado;

alert(atacante + " causou " + danoCausado + " pontos de dano em " + defensor);
alert(
  atacante +
  "\nPoder de ataque: " +
  poderDeAtaque +
  "\n\n" +
  defensor +
  "\nVida: " +
  vida +
  "\nPoder de defesa: " +
  poderDeDefesa +
  "\nPossui escudo: " +
  possuiEscudo
);
