console.log('oi sou chamado')

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
    
    verificarMeta(){
        if(this.items.quantidade == this.itemsVendidos){
            this.metaAtigida = 'sim';
        }else{
            this.metaAtigida = 'não'
        }
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
    
    MetaVendasItemBeberibe(): number{
        let valorBeberibe = this.valor * 1.10
        return this.quantidade * valorBeberibe
    }
    MetaVendasItemUruau(): number{
        let valorBeberibe = this.valor * 0.90
        return this.quantidade * valorBeberibe
    }
}

const meuDoceChocolate : Item = new Item(10,3,'chocolate');
const meuDoceCoco = new Item(5,5,'coco');


const vJessica = new Vendors('jessica',22,meuDoceChocolate,7);
const pedro = new Vendors('pedro', 20, meuDoceCoco,2);
vJessica.verificarMeta()

console.log(meuDoceChocolate.MetaVendasItemBeberibe());

console.log('a vendedora ' + vJessica.nome + ' vedeu ' + vJessica.itemsVendidos + ' de ' + vJessica.items.nome + ' meta atigida ' + vJessica.metaAtigida);
