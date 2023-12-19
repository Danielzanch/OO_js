function Empresa(nomeFuncionario, cargo, anoEntrada, anoSaida, salario) {
    this.nomeFuncionario = nomeFuncionario;
    this.cargo = cargo;
    this.anoEntrada = anoEntrada;
    this.anoSaida = anoSaida;
    this.salario = salario;
}

const funcDaniel = new Empresa("Daniel", "vistoriador/digitador", "2020", "2023", "2000,00");
const funcKelvin = new Empresa("Kelvin", "vistoriador", "2021", "2023", "2000,00");
const funcYuri = new Empresa("Yuri", "estagiario", "2023", "2023", "1500,00");

console.log(funcDaniel);
console.log(funcKelvin);
console.log(funcYuri);

console.log(funcDaniel instanceof Empresa)
console.log(funcKelvin instanceof Empresa)
console.log(funcYuri instanceof Empresa)