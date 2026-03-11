import readlinesync = require("readline-sync");
import { colors } from './src/util/Colors';
import { Conta } from "./src/model/Conta";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupança";

export function main() {

    const Contas = new Array<Conta>();

    let continuar: boolean = true
    let opcao: number;

    do {

        const conta: Conta = new Conta();

        conta.agencia = 123;
        conta.tipo = 1;
        conta.titular = "Adriana";
        conta.saldo = 10000;

        conta.visualizar();
        conta.sacar(10500);
        conta.visualizar();
        conta.depositar(5000);
        conta.visualizar();

        const conta2: Conta = new Conta();

        conta2.agencia = 789;
        conta2.tipo = 1;
        conta2.titular = "Marcela";
        conta2.saldo = 1000;

        conta2.visualizar();
        conta2.sacar(500);
        conta2.visualizar();
        conta2.depositar(3000);
        conta2.visualizar();

        const contacorrente: ContaCorrente = new ContaCorrente();

        contacorrente.agencia = 123;
        contacorrente.tipo = 1;
        contacorrente.titular = "Mariana";
        contacorrente.saldo = 15000;
        contacorrente.limite = 1000;

        contacorrente.visualizar();
        contacorrente.sacar(2000);
        contacorrente.visualizar();
        contacorrente.depositar(1000);
        contacorrente.visualizar();

        const contapoupanca: ContaPoupanca = new ContaPoupanca();

        contapoupanca.agencia = 123;
        contapoupanca.tipo = 2;
        contapoupanca.titular = "Victor";
        contapoupanca.saldo = 1000;
        contapoupanca.aniversario = 10;

        contapoupanca.visualizar();
        contapoupanca.sacar(200);
        contapoupanca.visualizar();
        contapoupanca.depositar(1000);
        contapoupanca.visualizar();

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
                console.log(colors.fg.whitestrong, "\n\nCriar Conta\n\n", colors.reset);
                // console.log("\n1 - Conta Corrente \n2 - Conta Poupança");
                // let opcaoConta = readlinesync.questionInt("Digite a opção desejada: ")
                // let conta: Conta;
                // conta = opcaoConta == 1 ? new ContaCorrente() : new ContaPoupanca();
                // conta.tipo = opcaoConta;
                // conta.titular = readlinesync.question("Digite o nome do Titular: ")
                // conta.agencia = readlinesync.questionInt("Digite a agencia: ")
                // conta.saldo = readlinesync.questionFloat("Digite o saldo inicial: ")

                // if (conta instanceof ContaCorrente) {
                //     conta.limite = readlinesync.questionInt("Digite o limite da conta: ")
                // }
                // if (conta instanceof ContaPoupanca) {
                //     conta.aniversario = readlinesync.questionInt("Digite o aniversário: ")
                // }
                // Contas.push(conta);
                // console.log("\nConta cadastrada com sucesso!")

                // console.log(`\nO cliente ${conta.titular} foi adicionado com sucesso!`)
                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong, "\n\nListar todas as Contas\n\n", colors.reset);
                // for (let conta of Contas) {
                //     conta.visualizar();
                //     keyPress()
                // }
                break;
            case 3:
                console.log(colors.fg.whitestrong, "\n\nConsultar dados da Conta - por número\n\n", colors.reset);
                // let buscaNumero = readlinesync.questionInt("Número da conta: ");

                // let buscaConta = Contas.find(conta => conta.numero === buscaNumero);

                // buscaConta ? buscaConta.visualizar() : console.log("Conta não encontrada!");

                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong, "\n\nAtualizar dados da Conta\n\n", colors.reset);
                console.log("Opção Indisponível. Tente novamente mais tarde.")
                keyPress()
                break;
            case 5:
                console.log(colors.fg.whitestrong, "\n\nApagar uma Conta\n\n", colors.reset);

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

//update: tentando o github