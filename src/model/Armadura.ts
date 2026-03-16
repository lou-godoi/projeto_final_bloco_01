import { Produto } from "./Produto";

export class Armadura extends Produto {
    private _defesa: number;

    constructor(id: number, nome: string, tipo: number, preco: number, defesa: number) {
        super(id, nome, tipo, preco); 
        this._defesa = defesa;
    }

    public get defesa() {
        return this._defesa;
    }

    public set defesa(defesa: number) {
        this._defesa = defesa;
    }

    public visualizar(): void {
        super.visualizar();
        console.log(`Poder de Defesa: ${this._defesa}`);
    }
}