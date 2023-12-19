function Pessoa(nome, idade, ondeNasceu, Profisao) {
    this.nome = nome;
    this.idade = idade;
    this.ondeNasceu = ondeNasceu;
    this.Profisao = Profisao;

    this.dizPosicao = function() {
        console.log(this.posicaoJogador);
    }

}

function Jogador (nome, nomeProfissional, posicaoJogador, salarioJogador) {
    Pessoa.call (this, nome);
    this.posicaoJogador = posicaoJogador;
    this.nomeProfissional = nomeProfissional;
    this.salarioJogador = salarioJogador;
}

const Eduardo_Pereira = new Pessoa("Eduardo Pereira Rodrigues", "31 anos", "Goiânia", "Jogador de futebol");
const Gustavo_Raúl = new Pessoa("Gustavo Raúl Gómez Portillo", "30 anos", "San Juan Bautista", "Jogador de futebol");
const Raphael_Cavalcante = new Pessoa("Raphael Cavalcante Veiga", "28 anos", "São Paulo", "Jogador de futebol");

const Dudu = new Jogador("Eduardo Pereira Rodrigues", "Dudu", "Meio-campista", "2,1 milhões por mês");
const Gustavo_Gomes = new Jogador("Gustavo Raúl Gómez Portillo", "Gustavo Gomes", "Zagueiro", "1,1 milhão por mês");
const Rafael_Veiga = new Jogador("Raphael Cavalcante Veiga", "Rafael Veiga", "Meio-Atacante", "1,0 milhão por mês");

Dudu.dizPosicao();

// console.log(Dudu);
// console.log(Gustavo_Gomes);
// console.log(Rafael_Veiga);