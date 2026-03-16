import { colors } from "../util/Colors";

export abstract class Produto {
    private _id: number;
    private _nome: string;
    private _tipo: number;
    private _preco: number;

    constructor(id: number, nome: string, tipo: number, preco: number) {
        this._id = id;
        this._nome = nome;
        this._tipo = tipo;
        this._preco = preco;
    }

    //Getters e setters

    public get id() {
        return this._id;
    }

    public set id(id: number) {
        this._id = id;
    }

    public get nome() {
        return this._nome;
    }

    public set nome(nome: string) {
        this._nome = nome;
    }

    public get tipo() {
        return this._tipo;
    }

    public set tipo(tipo: number) {
        this._tipo = tipo;
    }

    public get preco() {
        return this._preco;
    }

    public set preco(preco: number) {
        this._preco = preco;
    }

    public visualizar(): void {
        let tipo: string = "";

        switch (this._tipo) {
            case 1:
                tipo = "Arma";
                break;
            case 2:
                tipo = "Armadura";
                break;
        }

        console.log("\n---------------------------------------------------");
        console.log(colors.fg.cyan,);
        console.log("                DADOS DO PRODUTO                     ");
        console.log(colors.reset,);
        console.log("-----------------------------------------------------");
        console.log(`ID: ${this._id}`);
        console.log(`Nome: ${this._nome}`);
        console.log(`Tipo: ${tipo}`);
        console.log(`Preço: ${this._preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}`);
    }
}