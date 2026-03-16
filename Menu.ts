import readline = require('readline-sync');

export function main() {
    let opcao: number;

    // O laço de repetição: "Enquanto for verdadeiro, continue mostrando o menu"
    while (true) {

        console.log("*****************************************************");
        console.log("             ARSENAL MEDIEVAL DO LOU                 ");
        console.log("*****************************************************");
        console.log("            1 - Cadastrar Produto                    ");
        console.log("            2 - Listar todos os Produtos             ");
        console.log("            3 - Atualizar Produto                    ");
        console.log("            4 - Deletar Produto                      ");
        console.log("            0 - Sair                                 ");
        console.log("*****************************************************");

        console.log("Entre com a opção desejada: ");
        opcao = readline.questionInt(""); // Lê um número inteiro

        if (opcao === 0) {
            console.log("\nArmuraria Medieval - Onde a história ganha vida!");
            process.exit(0); // Fecha o programa
        }

        // O Switch decide o que fazer com base na opção
        switch (opcao) {
            case 1:
                console.log("\n Cadastrar Produto");
                // Aqui depois vamos pedir Nome, Preço, etc.
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