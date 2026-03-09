import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";

export function main() {
    let opcao: number;
    let contas = new Array<any>();

    do {

        console.log(colors.bg.black, colors.fg.yellow,
                    "*****************************************************");
        console.log("                                                     ");
        console.log("                 Banco do Brazil com Z               ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("           1 - Criar Conta                           ");
        console.log("           2 - Listar todas as contas                ");
        console.log("           3 - Buscar conta por número               ");
        console.log("           4 - Atualizar Dados da Conta              ");
        console.log("           5 - Apagar Conta                          ");
        console.log("           6 - Sacar                                 ");
        console.log("           7 - Depositar                             ");
        console.log("           8 - Transferir valores entre Contas       ");
        console.log("           9 - Sair                                  ");
        console.log("                                                     ");
        console.log("*****************************************************",
            colors.reset);
        console.log("                                                     ");

        opcao = readlinesync.questionInt("\nEntre com a opcao desejada: ");

        if (opcao == 9) {
            console.log(colors.fg.greenstrong,
                "\nBanco do Brazil com Z - O seu futuro começa aqui");
            sobre()
            console.log(colors.reset, "");
            process.exit(0)
        }



        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong,
                    "\nCadastro:", colors.reset);
                let nome = readlinesync.question("Nome do Titular: ");
                let saldoInicial = readlinesync.questionFloat("Saldo Inicial: ");

                contas.push({ titular: nome, saldo: saldoInicial });
                console.log("Nova conta adicionada!");
                keyPress()
                break;

            case 2:
                console.log(colors.fg.whitestrong,
                    "\nContas Cadastradas", colors.reset);
                if (contas.length === 0) {
                    console.log("Nao existem contas cadastradas.");
                } else {
                    console.table(contas);
                }
                keyPress()
                break;

            case 3:
                console.log(colors.fg.whitestrong,
                    "\nBuscar conta por número", colors.reset);
                console.table(contas);
                let numero = readlinesync.questionInt("Digite o número da conta")
                if (numero >= 0 && numero < contas.length) {
                    console.log("\nConta");
                    console.log("Número (ID): " + numero);
                    console.log("Titular: " + contas[numero].titular);
                    console.log("Saldo: R$ " + contas[numero].saldo.toFixed(2));
                } else {
                    console.log("\nNúmero de conta inválido!");
                }

                keyPress()
                break;

            case 4:
                console.log(colors.fg.whitestrong,
                    "\nAtualizar Dados", colors.reset);
                console.table(contas)
                let atualizar = readlinesync.question("Nome do Titular que deseja alterar: ");
                let encontradoAt = false;
                for (let conta of contas) {
                    if (conta.titular.toLowerCase() === atualizar.toLowerCase()) {
                        encontradoAt = true;
                        if (readlinesync.keyInYN("Deseja alterar os dados de " + conta.titular + "?")) {
                            conta.titular = readlinesync.question("Digite o novo nome do Titular: ");
                            console.log("Dados atualizados com sucesso!");
                        }
                        break;
                    }
                }
                if (!encontradoAt) console.log("Conta nao encontrada.");
                keyPress()
                break;

            case 5:
                console.log(colors.fg.whitestrong,
                    "\nExclusao", colors.reset);
                console.table(contas);
                let idApagar = readlinesync.questionInt("Digite o ID da conta: ");
                if (idApagar >= 0 && idApagar < contas.length) {
                    if (readlinesync.keyInYN("Deseja apagar a conta de " + contas[idApagar].titular + "?")) {
                        contas.splice(idApagar, 1);
                        console.log("Conta apagada!");
                    }
                } else {
                    console.log("ID invalido.");
                }
                keyPress()
                break;

            case 6:
                console.log(colors.fg.whitestrong,
                    "\nSaque", colors.reset);
                console.table(contas);
                let idSaque = readlinesync.questionInt("ID da conta para saque: ");

                if (idSaque >= 0 && idSaque < contas.length) {
                    let valorSaque = readlinesync.questionFloat("Valor do saque: ");
                    if (valorSaque > 0 && valorSaque <= contas[idSaque].saldo) {
                        contas[idSaque].saldo -= valorSaque;
                        console.log("Saque realizado! Saldo atual: R$" + contas[idSaque].saldo.toFixed(2));
                    } else {
                        console.log("Saldo insuficiente ou valor invalido.");
                    }
                } else {
                    console.log("Conta nao encontrada.");
                }
                keyPress()
                break;

            case 7:
                console.log(colors.fg.whitestrong,
                    "\nDeposito", colors.reset);
                console.table(contas);
                let idDep = readlinesync.questionInt("ID da conta para deposito: ");

                if (idDep >= 0 && idDep < contas.length) {
                    let valorDep = readlinesync.questionFloat("Valor do deposito: ");
                    if (valorDep > 0) {
                        contas[idDep].saldo += valorDep;
                        console.log("Deposito realizado com sucesso!");
                        console.log("Saldo atual: R$"+ contas[idDep].saldo.toFixed(2))
                    } else {
                        console.log("Valor invalido para deposito.");
                    }
                }
                keyPress()
                break;

            case 8:
                console.log(colors.fg.whitestrong,
                    "\n--- Transferencia ---", colors.reset);
                console.table(contas);
                let idOrigem = readlinesync.questionInt("ID da conta de ORIGEM: ");
                let idDestino = readlinesync.questionInt("ID da conta de DESTINO: ");

                if (idOrigem !== idDestino && contas[idOrigem] && contas[idDestino]) {
                    let valorTransf = readlinesync.questionFloat("Valor da transferencia: ");
                    if (valorTransf > 0 && valorTransf <= contas[idOrigem].saldo) {
                        contas[idOrigem].saldo -= valorTransf;
                        contas[idDestino].saldo += valorTransf;
                        console.log("Transferencia concluida!");
                    } else {
                        console.log("Saldo insuficiente ou valor invalido.");
                    }
                } else {
                    console.log("IDs invalidos ou iguais.");
                }
                keyPress()
                break;
            default:
                console.log(colors.fg.whitestrong,
                    "\n Opção Invalida!", colors.reset);
                keyPress()
                break
        }

    } while (opcao !== 9);
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