import readline = require('readline-sync');
import { ProdutoController } from './src/controller/ProdutoController';
import { Arma } from './src/model/Arma';
import { Armadura } from './src/model/Armadura'; // Não esqueça de criar esse arquivo!
import { colors } from './src/util/Colors';

export function main() {

    const produtos = new ProdutoController();

    let opcao, id, tipo, preco, dano, defesa: number;
    let nome: string;
    const tiposProdutos = ['Arma', 'Armadura'];

    // DADOS INICIAIS (Opcional, mas ajuda muito no teste)
    produtos.cadastrar(new Arma(produtos.gerarId(), "Espada Claymore", 1, 1500.00, 85));
    produtos.cadastrar(new Arma(produtos.gerarId(), "Zweihander", 1, 2500.00, 95));
    produtos.cadastrar(new Armadura(produtos.gerarId(), "Armadura de Ferro", 2, 3000.00, 70));

    while (true) {

        console.log(colors.fg.cyan, "*****************************************************");
        console.log(colors.reset, "             ARSENAL MEDIEVAL DA LOU                 ");
        console.log(colors.fg.cyan, "*****************************************************");
        console.log(colors.reset, colors.fg.yellow);
        console.log("            1 - Cadastrar Produto                    ");
        console.log("            2 - Listar todos os Produtos             ");
        console.log("            3 - Atualizar Produto                    ");
        console.log("            4 - Deletar Produto                      ");
        console.log("            5 - Consultar Produto por Nome           ");
        console.log("            6 - Listar Produtos por Tipo             ");
        console.log("            0 - Sair                                 ");
        console.log(colors.reset);
        console.log(colors.fg.cyan, "*****************************************************");
        console.log(colors.reset);

       try {
            console.log("Entre com a opção desejada: ");
            opcao = readline.questionInt("");
        } catch (error) {
            console.log(colors.fg.red, "\nErro: Digite apenas números inteiros!", colors.reset);
            opcao = -1; // Sswitch vai cair no "default" e não fechar o programa
        }

        switch (opcao) {

            case 0:
                console.log(colors.fg.redstrong, "\nArsenal Medieval - Onde a história ganha vida!", colors.reset);
                // Um efeito visual simples antes de fechar
                console.log(colors.bg.black, colors.fg.magenta, "Fechando as portas do ferreiro...", colors.reset);
                sobre();
                process.exit(0);

            case 1:
                console.log(colors.fg.white, "\n Cadastrar Produto\n", colors.reset);
                
                nome = readline.question("Digite o nome do produto: ");
                
                // keyInSelect facilita a escolha entre Arma (1) e Armadura (2)
                tipo = readline.keyInSelect(tiposProdutos, "Selecione o tipo: ", { cancel: false }) + 1;
                
                preco = readline.questionFloat("Digite o preco (moedas de ouro): ");

                if (tipo === 1) {
                    dano = readline.questionInt("Digite o dano da arma: ");
                    produtos.cadastrar(new Arma(produtos.gerarId(), nome, tipo, preco, dano));
                } else {
                    defesa = readline.questionInt("Digite a defesa da armadura: ");
                    produtos.cadastrar(new Armadura(produtos.gerarId(), nome, tipo, preco, defesa));
                }
                    console.log(colors.fg.greenstrong, "\nO Produto ID: " + produtos.id + 
                                " foi cadastrado com sucesso!", colors.reset);
                keyPress();
                break;

            case 2:
                console.log(colors.fg.white, "\n Listar Produtos\n", colors.reset);
                produtos.listarTodos();
                keyPress();
                break;

            case 3:
                console.log(colors.fg.white, "\n Atualizar Produto\n", colors.reset);
                
                id = readline.questionInt("Digite o ID do produto que deseja atualizar: ");
                let busca = produtos.buscarNoArray(id);

                if (busca != null) {
                    nome = readline.question("Digite o novo nome: ");
                    preco = readline.questionFloat("Digite o novo preco: ");
                    tipo = busca.tipo; // Mantém o tipo original

                    if (tipo === 1) {
                        dano = readline.questionInt("Digite o novo dano: ");
                        produtos.atualizar(new Arma(id, nome, tipo, preco, dano));
                    } else {
                        defesa = readline.questionInt("Digite a nova defesa: ");
                        produtos.atualizar(new Armadura(id, nome, tipo, preco, defesa));
                    }
                } else {
                    console.log(colors.fg.red, "\nProduto não encontrado!", colors.reset);
                }
                
                keyPress();
                break;

            case 4:
                console.log(colors.fg.white, "\n Deletar Produto\n", colors.reset);
                id = readline.questionInt("Digite o ID do produto: ");
                produtos.deletar(id);
                keyPress();
                break;

            case 5:
                console.log(colors.fg.white, "\n Consultar Produto por Nome\n", colors.reset);
                nome = readline.question("Digite o nome do produto: ");
                produtos.procurarPorNome(nome);
                keyPress();
                break;

                case 6:
                console.log(colors.fg.white, "\n Listar por Tipo\n", colors.reset);
                tipo = readline.keyInSelect(tiposProdutos, "Selecione o tipo: ", { cancel: false }) + 1;
                produtos.listarPorTipo(tipo);
                keyPress();
                break;

            default:
                console.log(colors.fg.red, "\n Opção Inválida!", colors.reset);
                keyPress();
                break;
        }
    }
}

function sobre(): void {
    console.log("\n-----------------------------------------------------------");
    console.log(colors.fg.blue,"Projeto Desenvolvido por: Lorena Godoi Almeida");
    console.log("Generation Brasil - lorenaa@genstudents.org");
    console.log("github.com/lou-godoi");
    console.log(colors.reset,"-----------------------------------------------------------");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readline.prompt();
}

main();