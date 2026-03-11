export class Conta {

    private static proximoNumero: number = 1; //to ousando hehe

    private _numero!: number;
    private _agencia!: number;
    private _tipo!: number;
    private _titular!: string;
    private _saldo!: number;

    // constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number) {
    //     this._numero = numero;
    //     this._agencia = agencia;
    //     this._tipo = tipo;
    //     this._titular = titular;
    //     this._saldo = saldo;
    // }

    constructor() {
        this._numero = Conta.proximoNumero++;
    };

    public get numero(): number {
        return this._numero
    }

    public set numero(valor: number) {
        this._numero = valor;
    }

    public get agencia(): number {
        return this._agencia
    }

    public set agencia(valor: number) {
        this._agencia = valor;
    }

    public get tipo(): number {
        return this._tipo
    }

    public set tipo(valor: number) {
        this._tipo = valor;
    }

    public get titular(): string {
        return this._titular
    }

    public set titular(valor: string) {
        this._titular = valor;
    }

    public get saldo(): number {
        return this._saldo
    }

    public set saldo(valor: number) {
        this._saldo = valor;
    }

    public sacar(valor: number): boolean {

        if (this._saldo < valor) {
            console.log("\n Saldo Insuficiente!");
            return false;
        }

        this._saldo = this._saldo - valor;
        return true;
    }

    public depositar(valor: number): void {
        this._saldo = this._saldo + valor;
    }

    public visualizar(): void {

        let tipoConta: string = "";

        switch (this._tipo) {
            case 1:
                tipoConta = "Conta Corrente";
                break;
            case 2:
                tipoConta = "Conta Poupança";
                break;
        }

        console.log("\n\n*****************************************************");
        console.log("Dados da Conta:");
        console.log("*****************************************************");
        console.log("Numero da Conta: " + this._numero);
        console.log("Agência: " + this._agencia);
        console.log("Tipo da Conta: " + tipoConta);
        console.log("Titular: " + this._titular);
        console.log("Saldo: " + this._saldo.toFixed(2));

    }

}