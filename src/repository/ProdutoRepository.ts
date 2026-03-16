import { Produto } from "../model/Produto";

export interface ProdutoRepository {
    // CRUD - Create, Read, Update, Delete
    procurarPorId(id: number): void;
    listarTodos(): void;
    cadastrar(produto: Produto): void;
    atualizar(produto: Produto): void;
    deletar(id: number): void;
    procurarPorNome(nome: string): void;
    listarPorTipo(tipo: number): void;
}