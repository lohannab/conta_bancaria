import { Conta } from "../model/Conta";

export interface ContaRepository {    //O QUE

    cadastrar(conta: Conta): void;
    listarTodas(): void;
    procurarPorNumero(numero: number): void;
    atualizar(conta: Conta): void;
    deletar(numero: number): void;
    sacar(numero: number, valor: number): void;
    depositar(numero: number, valor: number): void;
    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void;
}