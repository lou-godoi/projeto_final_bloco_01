import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";
import { colors } from "../util/Colors";

export class ProdutoController implements ProdutoRepository {

    listarPorTipo(tipo: number): void {
    let buscaPorTipo = this.listaProdutos.filter(p => p.tipo === tipo);

    if (buscaPorTipo.length > 0) {
        buscaPorTipo.forEach(produto => produto.visualizar());
    } else {
        console.log(colors.fg.redstrong, "\nNenhum produto deste tipo foi encontrado!", colors.reset);
    }
}

    procurarPorNome(nome: string): void {
    let buscaPorNome = this.listaProdutos.filter(p => 
        p.nome.toUpperCase().includes(nome.toUpperCase())
    );

    if (buscaPorNome.length > 0) {
        buscaPorNome.forEach(produto => produto.visualizar());
    } else {
        console.log(colors.fg.redstrong, `\nNenhum produto com o nome "${nome}" foi encontrado!`, colors.reset);
    }
}

    private listaProdutos: Array<Produto> = new Array<Produto>();
    id: number = 0;

    listarTodos(): void {
        for (let produto of this.listaProdutos) {
            produto.visualizar();
        }
    }

    procurarPorId(id: number): void {
        let buscaProduto = this.buscarNoArray(id);

        if (buscaProduto != null) {
            buscaProduto.visualizar();
        } else {
            console.log(colors.fg.redstrong, "\nO Produto ID: " + id +
                " não foi encontrado!", colors.reset);
        }
    }

    cadastrar(produto: Produto): void {
        this.listaProdutos.push(produto);
    }

    atualizar(produto: Produto): void {
        let buscaProduto = this.buscarNoArray(produto.id);

        if (buscaProduto != null) {
            this.listaProdutos[this.listaProdutos.indexOf(buscaProduto)] = produto;
            console.log(colors.fg.greenstrong, "\nO Produto ID: " + produto.id +
                " foi atualizado com sucesso!", colors.reset);
        } else {
            console.log(colors.fg.redstrong, "\nO Produto ID: " + produto.id +
                " não foi encontrado!", colors.reset);
        }
    }

    deletar(id: number): void {
        let buscaProduto = this.buscarNoArray(id);

        if (buscaProduto != null) {
            this.listaProdutos.splice(this.listaProdutos.indexOf(buscaProduto), 1);
            console.log(colors.fg.greenstrong, "\nO Produto ID: " + id +
                " foi apagado com sucesso!", colors.reset);
        } else {
            console.log(colors.fg.redstrong, "\nO Produto ID: " + id +
                " não foi encontrado!", colors.reset);
        }
    }

    public gerarId(): number {
        return ++this.id;
    }

    public buscarNoArray(id: number): Produto | null {
        for (let produto of this.listaProdutos) {
            if (produto.id === id) {
                return produto;
            }
        }
        return null;
    }
}