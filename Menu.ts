import readlinesync = require("readline-sync");
import { colors } from './src/util/Colors';
import { Conta } from "./src/model/Conta";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupança";
import { ContaController } from "./src/controller/ContaController";

export function main() {

    let contas: ContaController = new ContaController();

    let continuar: boolean = true

    let opcao, numero, agencia, tipo, saldo, limite, aniversario: number;
    let titular: string;
    const tipoConta = ['Conta Corrente, Conta Poupança']
    do {
        console.log(colors.bg.black, colors.fg.yellow,
            "*****************************************************");
        console.log("                                                     ");
        console.log("                BANCO DO BRAZIL COM Z                ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Conta                          ");
        console.log("            2 - Listar todas as Contas               ");
        console.log("            3 - Buscar Conta por Numero              ");
        console.log("            4 - Atualizar Dados da Conta             ");
        console.log("            5 - Apagar Conta                         ");
        console.log("            6 - Sacar                                ");
        console.log("            7 - Depositar                            ");
        console.log("            8 - Transferir valores entre Contas      ");
        console.log("            9 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");

        console.log(colors.bg.black, colors.fg.yellow,
            "Entre com a opção desejada: ", colors.reset);
        opcao = readlinesync.questionInt("");

        if (opcao == 9) {
            console.log(colors.fg.greenstrong, "\nBanco do Brazil com Z - O seu Futuro começa aqui!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
            case 1:
                console.log(colors.fg.whitestrong, "\n\nCriar Conta\n\n", colors.reset);

                agencia = readlinesync.questionInt("Digite a agencia: ");
                titular = readlinesync.question("Digite o nome do Titular: ");
                saldo = readlinesync.questionFloat("Digite o saldo inicial: ");

                console.log("\nDigite o tipo da Conta: ");
                tipo = readlinesync.keyInSelect(['Conta Corrente', 'Conta Poupanca'], "", { cancel: false }) + 1;

                switch (tipo) {
                    case 1:
                        limite = readlinesync.questionFloat("Digite o Limite da Conta: ");

                        let contaCorrente = new ContaCorrente();

                        contaCorrente.numero = contas.gerarNumero();
                        contaCorrente.agencia = agencia;
                        contaCorrente.titular = titular;
                        contaCorrente.saldo = saldo;
                        contaCorrente.tipo = tipo;
                        contaCorrente.limite = limite;

                        contas.cadastrar(contaCorrente);
                        break;
                    case 2:
                        aniversario = readlinesync.questionInt("Digite o Dia do aniversario da Conta Poupanca:");

                        let contaPoupanca = new ContaPoupanca();

                        contaPoupanca.numero = contas.gerarNumero();
                        contaPoupanca.agencia = agencia;
                        contaPoupanca.titular = titular;
                        contaPoupanca.saldo = saldo;
                        contaPoupanca.tipo = tipo;
                        contaPoupanca.aniversario = aniversario;

                        contas.cadastrar(contaPoupanca);
                        break;
                }
                keyPress();
                break;
    
            case 2:
        console.log(colors.fg.whitestrong, "\n\nListar todas as Contas\n\n", colors.reset);

        contas.listarTodas();

        keyPress()
        break;
            case 3:
        console.log(colors.fg.whitestrong, "\n\nConsultar dados da Conta - por número\n\n"
            , colors.reset);

        console.log("Digite o número da Conta: ");
        numero = readlinesync.questionInt("");
        contas.procurarPorNumero(numero);

        keyPress()
        break;
            case 4:
        console.log(colors.fg.whitestrong, "\n\nAtualizar dados da Conta\n\n", colors.reset);
        console.log("Digite o número da Conta: ");

        keyPress();
        break;
            case 5:
        console.log(colors.fg.whitestrong, "\n\nApagar uma Conta\n\n", colors.reset);

        console.log("Digite o número da Conta: ");
        numero = readlinesync.questionInt("");
        contas.deletar(numero);

        keyPress()
        break;
            case 6:
        console.log(colors.fg.whitestrong, "\n\nSaque\n\n", colors.reset);

        keyPress()
        break;
            case 7:
        console.log(colors.fg.whitestrong, "\n\nDepósito\n\n", colors.reset);

        keyPress()
        break;
            case 8:
        console.log(colors.fg.whitestrong, "\n\nTransferência entre Contas\n\n", colors.reset);

        keyPress()
        break;
            default:
        console.log(colors.fg.whitestrong, "\nOpção Inválida!\n", colors.reset);

        keyPress()
        break;
    }


    } while (continuar)

}

function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: ")
    console.log("Lohanna B - lohannausa@gmailcom");
    console.log("github.com/lohannab")
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();