import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";
import { colors } from "../util/Colors";

export class ContaController implements ContaRepository {

    private Contas: Array<Conta> = new Array<Conta>();
    numero: number = 0;

    cadastrar(conta: Conta): void { //cadastra a conta dentro do array criado aqui msm conta que recebe da classe conta, dps imprime qual conta conta foi cadastrada
        this.Contas.push(conta);
        console.log(colors.fg.green, "\nA conta número " + conta.numero + " foi cadastrada com sucesso!", colors.reset);
    }

    listarTodas(): void {           //lista todas as contas, atraves do for ele corre dentro do array imprimindo um por um
        for (let conta of this.Contas) {
            conta.visualizar();
        }
    }
    public buscarNoArray(numero: number): Conta | null{ //esse metodo me ajuda a nao fazer a regra do for pra cada outros metodos, ele tbm corre o array de um em um e se o numero da conta bate com o numero da conta informado, ele guarda qual conta foi.
        try {
            for (let conta of this.Contas) {
                if (conta.numero === numero) {
                    return conta;
                }
            }
            return null;
        } catch (error: any) {
            console.log(error.mensagem);
            return null;
        }
    }

    procurarPorNumero(numero: number): void {
        let conta = this.buscarNoArray(numero);   //ele procura o numero utilizando o metodo de busca, se o metodo não retornar vazio, ele imprime outro medoto com os detalhes da conta, do contrario ele fala que o numero informado n foi encontrado.

        if (conta != null) {
            conta.visualizar();
        } else {
            console.log(colors.fg.red, "\nA Conta número: " + numero + " não foi encontrada!", colors.reset);
        }
    }

    public gerarNumero(): number { //ele incrementa o numero da conta criada
        return ++this.numero;
    }



    deletar(numero: number): void { // atraves do metodo de busca se n retornar vazio ele apaga 1 conta atraves do metodo proprio do array, utilizando 2 argumentos, conta dentro da lista de ontas e o numero de contas a papagar, imprime a o numero da ocnta que apagou ou fala que a conta n foi encontrada se retornar vazio
        let conta = this.buscarNoArray(numero);

        if (conta != null) {
            this.Contas.splice(this.Contas.indexOf(conta), 1);
            console.log("\nA Conta número: " + numero + " foi apagada com sucesso!");
        } else {
            console.log("\nA Conta número: " + numero + " não foi encontrada!");
        }
    }

    atualizar(conta: Conta): void {
        try {
            let buscaConta = this.buscarNoArray(conta.numero); //atraves do metodo de busca ele faz parecido ue o teletar, a diferença é que o parametro é diferente, ele sobrescreve a conta de decontas atraves do que a pessoa mandar 

            if (buscaConta != null) {
                this.Contas[this.Contas.indexOf(buscaConta)] = conta;
                console.log("\nA Conta número: " + conta.numero + " foi atualizada com sucesso!");
            } else {
                console.log("\nA Conta número: " + conta.numero + " não foi encontrada!");
            }
        } catch (error: any) {   //se algo der ruim ele n quebra o codigo e imprime mensagem de erro
            console.log(error.message);
        }
    }


    sacar(numero: number, valor: number): void {
        let conta = this.buscarNoArray(numero);
		
		if (conta != null) {
			
			if(conta.sacar(valor) == true)
            console.log(colors.fg.green,"\nO Saque na Conta numero: " + numero + 
                        " foi efetuado com sucesso!", colors.reset);		
		
		}else
        console.log(colors.fg.red,"\nA Conta numero: " + numero + 
                    " não foi encontrada!", colors.reset);

    }
    depositar(numero: number, valor: number): void { 
        let conta = this.buscarNoArray(numero);
		
		if (conta != null) {
			conta.depositar(valor);
            console.log(colors.fg.green,"\nO Depósito na Conta numero: " + numero + 
                        " foi efetuado com sucesso!", colors.reset);		
		
		}else
        console.log(colors.fg.red,"\nA Conta numero: " + numero + 
                    " não foi encontrada!", colors.reset);
    }
    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        let contaOrigem = this.buscarNoArray(numeroOrigem);
		let contaDestino = this.buscarNoArray(numeroDestino);

		if (contaOrigem != null && contaDestino != null) {
            if(contaOrigem.sacar(valor) == true){
                contaDestino.depositar(valor);
                console.log(colors.fg.green,"\nA Transferência da Conta numero: " + numeroOrigem + 
                            " para a Conta numero: " + numeroDestino + " foi efetuada com sucesso!", 
                            colors.reset);		
            }
		
		}else
        console.log(colors.fg.red,"\nA Conta numero: " + numeroOrigem + 
                    " e/ou a Conta numero: " + numeroDestino + " não foram encontradas!", 
                    colors.reset);
     }
}