import { Produto } from "./Produto";

export class Arma extends Produto {
    private _dano: number;

    constructor(id: number, nome: string, tipo: number, preco: number, dano: number) {
        super(id, nome, tipo, preco);
        this._dano = dano;
    }

    public get dano() { return this._dano; }
    public set dano(value: number) { this._dano = value; }

    public visualizar(): void {
        super.visualizar(); 
        console.log(`Poder de Ataque (Dano): ${this._dano}`);
    }
}