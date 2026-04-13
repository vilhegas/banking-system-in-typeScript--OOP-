import { Conta, Titular } from "./Conta";

class ContaPoupanca extends Conta {
  private _taxaRendimento: number;

  constructor(numero: string, titular: Titular, taxaRendimento: number = 0.05) {
    super(numero, titular);
    this._taxaRendimento = taxaRendimento;
  }

  get taxaRendimento(): number {
    return this._taxaRendimento;
  }

  sacar(valor: number): boolean {
    if (valor <= 0) {
      console.log("Valor de saque inválido.");
      return false;
    }
    if (valor > this.Saldo) {
      console.log("Saldo insuficiente.");
      return false;
    }
    this._saldo -= valor;
    console.log(`Saque de R$${valor.toFixed(2)} realizado com sucesso.`);
    return true;
  }

  exibirExtrato(): void {
    super.exibirExtrato();
    console.log(
      `Taxa de Rendimento: ${(this._taxaRendimento * 100).toFixed(2)}%`,
    );
    console.log("Tipo: conta poupança");
  }

  aplicarRendimento(): void {
    const rendimento = this._saldo * this._taxaRendimento;
    this._saldo += rendimento;
    console.log(
      `Rendimento de R$${rendimento.toFixed(2)} aplicado com sucesso.`,
    );
  }
}

const titularContaPoupanca1: Titular = {
  nome: "João Silva",
  cpf: "123.456.789-00",
};

const contaPoupanca1 = new ContaPoupanca("12345-6", titularContaPoupanca1);
//contaPoupanca1.depositar(200);
//contaPoupanca1.aplicarRendimento();
//contaPoupanca1.sacar(200);