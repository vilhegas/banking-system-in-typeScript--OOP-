type Titular = {
    nome: string;
    cpf: string;
}

abstract class Conta {
    // Encapsulamento 
    private _numero: string;
    private _titular: Titular;
    protected _saldo: 0;

    constructor(numero: string, titular: Titular) {
        this._numero = numero;
        this._titular = titular;
        this._saldo = 0;
    }

    get Numero(): string {
        return this._numero;
    }
    get Titular(): string {
        return this.Titular;
    }
    get Saldo(): number {
        return this._saldo;
    }

    depositar(valor: number): void {
        if (valor > 0) {
            this._saldo += valor;
            console.log(`Depósito de R$${valor.toFixed(2)} realizado com sucesso.`);
        } else {
            console.log("Valor de depósito inválido.");
        }
    }

    exibirExtrato(): void {
        console.log(`Extrato da conta ${this._numero}:`);
        console.log(`Titular: ${this._titular.nome}`);
        console.log(`Saldo: R$${this._saldo.toFixed(2)}`);
    }

    abstract sacar(valor: number): boolean;
}

export { Conta };
export type { Titular };
