import { Conta, Titular } from "./Conta";

class ContaSalario extends Conta {
  private _limiteSaqueMensal: number;
  private _saquesRealizados: 0;

  constructor(numero: string, titular: Titular, limiteSaqueMensal: number = 2) {
    super(numero, titular);
    this._limiteSaqueMensal = limiteSaqueMensal;
    this._saquesRealizados = 0;
  }

  get limiteSaqueMensal(): number {
    return this._limiteSaqueMensal;
  }
  get saquesRealizados(): number {
    return this._saquesRealizados;
  }

  sacar(valor: number): boolean {
    if (valor <= 0) {
      console.log("Valor de saque inválido.");
      return false;
    }
    if (this._saquesRealizados >= this._limiteSaqueMensal) {
      console.log("Limite de saques mensais atingido.");
      return false;
    }
    if (valor > this.Saldo) {
      console.log("Saldo insuficiente.");
      return false;
    }
    this._saldo -= valor;
    this._saquesRealizados++;
    console.log(`Saque de R$${valor.toFixed(2)} realizado com sucesso.`);
    console.log(
      `Saques realizados este mês: ${this._saquesRealizados}/${this._limiteSaqueMensal}`,
    );
    return true;
  }

  exibirExtrato(): void {
    super.exibirExtrato();
    console.log(`Limite de Saques Mensais: ${this._limiteSaqueMensal}`);
    console.log(`Saques Realizados: ${this._saquesRealizados}`);
    console.log("Tipo: conta salário");
  }
  resetarSaquesMensais(): void {
    this._saquesRealizados = 0;
    console.log("Contador de saques mensais resetado.");
  }
}

const contaSalario1 = new ContaSalario("54321-0", {
  nome: "Carlos Pereira",
  cpf: "555.666.777-88",});

//contaSalario1.depositar(300);
//contaSalario1.sacar(100);
//contaSalario1.sacar(50);
//contaSalario1.exibirExtrato();