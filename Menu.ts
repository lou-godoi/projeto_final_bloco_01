import readline = require('readline-sync');
import { colors } from './src/util/Colors';

export function main() {
    let opcao: number;

    while (true) { 

        console.log(colors.fg.cyan,"*****************************************************");
        console.log(colors.reset,"             ARSENAL MEDIEVAL DA LOU                 ");
        console.log(colors.fg.cyan,"*****************************************************");
        console.log(colors.reset, colors.fg.yellow);
        console.log("            1 - Cadastrar Produto                    ");
        console.log("            2 - Listar todos os Produtos             ");
        console.log("            3 - Atualizar Produto                    ");
        console.log("            4 - Deletar Produto                      ");
        console.log("            0 - Sair                                 ");
        console.log(colors.reset);
        console.log(colors.fg.cyan,"*****************************************************");
        console.log(colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readline.questionInt(""); // Lê um número inteiro

        if (opcao === 0) {
            console.log(colors.fg.redstrong,"\nArsenal Medieval - Onde a história ganha vida!");
            process.exit(0); // Fecha o programa
        }

        // O Switch decide o que fazer com base na opção
        switch (opcao) {
            case 1:
                console.log("\n Cadastrar Produto");
                break;
            case 2:
                console.log("\n Listar Produtos");
                break;
            case 3:
                console.log("\n Atualizar Produto");
                break;
            case 4:
                console.log("\n Deletar Produto");
                break;
            default:
                console.log("\n Opção Inválida!");
                break;
        }
    }
}

main();