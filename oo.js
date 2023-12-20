function clube(nomeClube, nomeTecnico, nomePresidente) {
    this.nomeClube = nomeClube;
    this.nomeTecnico = nomeTecnico;
    this.nomePresidente = nomePresidente;

    this.dizPosicao = function() {
        console.log(this.idadeTecnico);
    }
}

function Jogador (nome, nomeProfissional, nomeClube, posicaoJogador, salarioJogador, tecnico) {
    clube.call (this, nomeClube, tecnico);
    this.nome = nome;
    this.posicaoJogador = posicaoJogador;
    this.nomeProfissional = nomeProfissional;
    this.salarioJogador = salarioJogador;
}

function Pessoa(nome, idade, ondeNasceu, Profisao) {
    Jogador.call (this, nome);
    this.idade = idade;
    this.ondeNasceu = ondeNasceu;
    this.Profisao = Profisao;
}

function comisaoTecnica(idadeTecnico ,nomeClube, nomeTecnico, nomePresidente) {
    clube.call (this, nomeClube, nomeTecnico, nomePresidente);
    this.idadeTecnico = idadeTecnico;
}

function Diretoria(nomeClube, idadepresidente, nomeTecnico, nomePresidente) {
    clube.call (this, nomeClube, nomeTecnico, nomePresidente);
    this.idadepresidente = idadepresidente;
}

const Clube1 = new clube("Palmeiras", "Abel Ferreira", "Leila Pereira");

const tecnicoClube = new comisaoTecnica("44 anos");

const presidenteClube = new Diretoria("59 anos");

const Eduardo_Pereira = new Pessoa("Eduardo Pereira Rodrigues", "31 anos", "Goiânia", "Jogador de futebol");
const Gustavo_Raúl = new Pessoa("Gustavo Raúl Gómez Portillo", "30 anos", "San Juan Bautista", "Jogador de futebol");
const Raphael_Cavalcante = new Pessoa("Raphael Cavalcante Veiga", "28 anos", "São Paulo", "Jogador de futebol");

const Dudu = new Jogador("Eduardo Pereira Rodrigues", "Dudu", "Palmeiras", "Meio-campista", "2,1 milhões por mês", "Abel Ferreira");
const Gustavo_Gomes = new Jogador("Gustavo Raúl Gómez Portillo", "Gustavo Gomes", "Palmeiras", "Zagueiro", "1,1 milhão por mês", "Abel Ferreira");
const Rafael_Veiga = new Jogador("Raphael Cavalcante Veiga", "Rafael Veiga", "Palmeiras", "Meio-Atacante", "1,0 milhão por mês", "Abel Ferreira");

tecnicoClube.dizPosicao();