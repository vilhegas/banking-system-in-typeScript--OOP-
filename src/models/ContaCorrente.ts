import {Conta, Titular} from "./Conta";

class ContaCorrente extends Conta {
    private _limite: number;

    constructor(numero: string, titular: Titular, limite: number = 500) {
        super(numero, titular);
        this._limite = limite;
    }

    get limite(): number {
        return this._limite;
    }

    sacar(valor: number): boolean {
        const limiteTotal = this.Saldo + this._limite;
        if (valor <= 0) {
            console.log("Valor de saque inválido.");
            return false;
        }
        if (valor > limiteTotal) {
            console.log("Saldo insuficiente.");
            return false;
        }
        this._saldo -= valor;
        console.log(`Saque de R$${valor.toFixed(2)} realizado com sucesso.`);
        return true;
    }

    exibirExtrato(): void {
        super.exibirExtrato();
        const limiteDisponivel = this._saldo < 0 ? this._limite + this._saldo : this._limite;
        console.log(`Limite: R$${this._limite.toFixed(2)}`);
        console.log('Tipo: conta corrente');
    }
}

const titularContaCorrente1: Titular = {
    nome: "Maria Oliveira",
    cpf: "987.654.321-00"
};

const contaCorrente1 = new ContaCorrente("98765-4", titularContaCorrente1);
//console.log(`Número da conta corrente: ${contaCorrente.limite}`);
contaCorrente1.sacar(-1000);