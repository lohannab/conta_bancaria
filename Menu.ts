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

    let cc1: ContaCorrente = new ContaCorrente();
    cc1.numero = contas.gerarNumero();
    cc1.agencia = 123;
    cc1.tipo = 1;
    cc1.titular = "João da Silva";
    cc1.saldo = 1000;
    cc1.limite = 100.0;
    contas.cadastrar(cc1);

    let cc2: ContaCorrente = new ContaCorrente();
    cc2.numero = contas.gerarNumero();
    cc2.agencia = 124;
    cc2.tipo = 1;
    cc2.titular = "Maria da Silva";
    cc2.saldo = 2000;
    cc2.limite = 100.0;
    contas.cadastrar(cc2);

    let cp1: ContaPoupanca = new ContaPoupanca();
    cp1.numero = contas.gerarNumero();
    cp1.agencia = 125;
    cp1.tipo = 2;
    cp1.titular = "Mariana dos Santos";
    cp1.saldo = 4000;
    cp1.aniversario = 12;
    contas.cadastrar(cp1);

    let cp2: ContaPoupanca = new ContaPoupanca();
    cp2.numero = contas.gerarNumero();
    cp2.agencia = 125;
    cp2.tipo = 2;
    cp2.titular = "Juliana Ramos";
    cp2.saldo = 8000;
    cp2.aniversario = 15;
    contas.cadastrar(cp2);

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
                console.log(colors.fg.whitestrong, "\nCriar Conta\n", colors.reset);

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

                        console.clear();

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

                        console.clear();

                        contas.cadastrar(contaPoupanca);
                        break;
                }

                keyPress();
                break;

            case 2:
                console.log(colors.fg.whitestrong, "\n\nListar todas as Contas\n\n", colors.reset);
                console.clear
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
                try {
                    console.log(colors.fg.whitestrong, "\n\nAtualizar dados da Conta\n\n", colors.reset);

                    numero = readlinesync.questionInt("Digite o número da Conta: ");

                    let atualizacao = contas.buscarNoArray(numero)

                    if (atualizacao != null) {
                        agencia = readlinesync.questionInt("Digite a agencia: ");

                        titular = readlinesync.question("Digite o nome do Titular: ");

                        saldo = readlinesync.questionFloat("Digite o saldo inicial: ");

                        console.log("\nDigite o tipo da Conta: ");
                        tipo = readlinesync.keyInSelect(['Conta Corrente', 'Conta Poupanca'], "", { cancel: false }) + 1;
                        switch (tipo) {
                            case 1:
                                limite = readlinesync.questionFloat("Digite o Limite da Conta: ");

                                let contaCorrente = new ContaCorrente();

                                contaCorrente.numero = numero;
                                contaCorrente.agencia = agencia;
                                contaCorrente.titular = titular;
                                contaCorrente.saldo = saldo;
                                contaCorrente.tipo = tipo;
                                contaCorrente.limite = limite;

                                console.clear();

                                contas.atualizar(contaCorrente);
                                break;
                            case 2:
                                aniversario = readlinesync.questionInt("Digite o Dia do aniversario da Conta Poupanca:");

                                let contaPoupanca = new ContaPoupanca();

                                contaPoupanca.numero = numero;
                                contaPoupanca.agencia = agencia;
                                contaPoupanca.titular = titular;
                                contaPoupanca.saldo = saldo;
                                contaPoupanca.tipo = tipo;
                                contaPoupanca.aniversario = aniversario;

                                console.clear();

                                contas.atualizar(contaPoupanca);
                                break;
                        }
                        break;
                    } else {
                        console.log("Nenhuma conta encontrada")
                        keyPress();
                        break;
                    }

                } catch (error: any) {
                    return
                }
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

                numero = readlinesync.questionInt("Digite o número da Conta: ");

                let saque = contas.buscarNoArray(numero)

                if (saque != null) {
                    console.log("\nDigite o valor do Saque (R$): ");
                    let valorSaque = readlinesync.questionFloat("");

                    contas.sacar(numero, valorSaque);
                    break;
                } else {
                    console.log(colors.fg.red, "\nA Conta numero: " + numero + " não foi encontrada!", colors.reset);

                }
                keyPress()
                break;
            case 7:
                console.log(colors.fg.whitestrong, "\n\nDepósito\n\n", colors.reset);

                numero = readlinesync.questionInt("Digite o número da Conta: ");

                let deposito = contas.buscarNoArray(numero)

                if (deposito != null) {

                    let valorDeposito = readlinesync.questionFloat("\nDigite o valor do Depósito (R$): ");

                    contas.depositar(numero, valorDeposito);
                } else {
                    console.log(colors.fg.red, "\nA Conta numero: " + numero + " não foi encontrada!", colors.reset);
                }
                keyPress()
                break;

            case 8:
                console.log(colors.fg.whitestrong, "\n\nTransferência entre Contas\n\n", colors.reset);

                numero = readlinesync.questionInt("Digite o número da Conta: ");

                let transferencia = contas.buscarNoArray(numero)

                if (transferencia != null) {

                    let numeroDestino = readlinesync.questionInt("Digite o número da Conta de Destino: ");

                    let valorTransferencia = readlinesync.questionFloat("\nDigite o valor do Depósito (R$): ");

                    contas.transferir(numero, numeroDestino, valorTransferencia);
                    break;
                } else {
                    console.log(colors.fg.red, "\nA Conta numero: " + numero + " não foi encontrada!", colors.reset);
                }
                keyPress()
                break;
            default:
                console.log(colors.fg.whitestrong, "\nOpção Inválida!\n", colors.reset);

                keyPress()

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