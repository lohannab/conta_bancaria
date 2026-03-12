import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";
import { colors } from "../util/Colors";

export class ContaController implements ContaRepository {

    private Contas: Array<Conta> = new Array<Conta>();
    numero: number = 0;

    cadastrar(conta: Conta): void {
        this.Contas.push(conta);
        console.log(colors.fg.green, "\nA conta número " + conta.numero + " foi cadastrada com sucesso!", colors.reset);
    }

    listarTodas(): void {
        for (let conta of this.Contas) {
            conta.visualizar();
        }
    }

    procurarPorNumero(numero: number): void {
        let conta = this.buscarNoArray(numero);

        if (conta != null) {
            conta.visualizar();
        } else {
            console.log(colors.fg.red, "\nA Conta número: " + numero + " não foi encontrada!", colors.reset);
        }
    }

    public gerarNumero(): number {
        return ++this.numero;
    }

    public buscarNoArray(numero: number): Conta | null {
        for (let conta of this.Contas) {
            if (conta.numero === numero) {
                return conta;
            }
        }
        return null;
    }

    deletar(numero: number): void {
        let conta = this.buscarNoArray(numero);

        if (conta != null) {
            this.Contas.splice(this.Contas.indexOf(conta), 1);
            console.log("\nA Conta número: " + numero + " foi apagada com sucesso!");
        } else {
            console.log("\nA Conta número: " + numero + " não foi encontrada!");
        }
    }

    atualizar(conta: Conta): void {
        let buscaConta = this.buscarNoArray(conta.numero);

        if (buscaConta != null) {
            this.Contas[this.Contas.indexOf(buscaConta)] = conta;
            console.log("\nA Conta número: " + conta.numero + " foi atualizada com sucesso!");
        } else {
            console.log("\nA Conta número: " + conta.numero + " não foi encontrada!");
        }
    }

    sacar(numero: number, valor: number): void { }
    depositar(numero: number, valor: number): void { }
    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void { }
}