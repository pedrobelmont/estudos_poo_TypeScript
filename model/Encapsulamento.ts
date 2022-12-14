
class Vendors{
	nome: String;
	idade: number;
	metaAtigida!: String;
    items: Item;
    itemsVendidos :number;
	
	constructor(nome: String, idade: number, items: Item,  itemsVendidos: number){
		this.nome = nome;
		this.idade = idade;
        this.items = items;
        this.itemsVendidos = itemsVendidos;
	}

}

class Item {
    quantidade: number;
    valor: number;
    nome: String;
    
    constructor(quantidade: number, valor: number, nome: string){
        this.quantidade = quantidade;
        this.valor = valor;
        this.nome = nome;
    }
}


class Gestor {
    gestao:Gestao;
    vendedor:Vendors;

    constructor(vendedor:Vendors, gestao:Gestao){
        this.vendedor = vendedor;
        this.gestao = gestao;
    }

    verificarMeta(valorMeta = 
        this.gestao.metaVendas(this.vendedor.items.quantidade),
         itensAVerificar = this.vendedor.itemsVendidos): boolean{
            
        console.log(itensAVerificar)
        return itensAVerificar >= valorMeta;
    }
}

interface Gestao {
    metaVendas(quantidadeDeitens:number): number; 
}

class GestaoEmbeberibe implements Gestao{
    metaVendas(quantidadeDeItens: number): number {
        return quantidadeDeItens - 2
    }
} 

class GestaoJua implements Gestao{
    metaVendas(quantidadeDeitens: number): number {
        return quantidadeDeitens - 5
    }
} 


const meuDoceChocolate : Item = new Item(10,3,'chocolate');
const meuDoceCoco = new Item(5,5,'coco');


const vendendo1 = new Vendors('flulano',22,meuDoceChocolate,7);

var pedro = new Gestor(vendendo1, new GestaoEmbeberibe());
console.log(pedro.verificarMeta())