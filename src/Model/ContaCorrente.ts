import { Conta } from "./Conta";

export class ContaCorrente extends Conta {

    private _limite!: number;

    constructor() {
        super();
    };

    public get limite(): number {
        return this._limite
    }

    public set limite(valor: number) {
        this._limite = valor;
    }



    public sacar(valor: number): boolean {

        if ((this.saldo + this._limite) < valor) {
            console.log("\n Saldo Insuficiente!");
            return false;
        }

        this.saldo = this.saldo - valor;
        return true;
    }


    
    public visualizar(): void {
        super.visualizar()
        console.log(`Limite: ${this._limite}`);

    }
}