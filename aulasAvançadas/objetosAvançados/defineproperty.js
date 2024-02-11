function Produto (nome, preco, estoque){
 
 
    Object.defineProperties(this, {
        nome:{
            enumerable: true,
            value:nome,
            writable: true,
            configurable: true
        },
        preco:{
            enumerable: true,
            value:preco,
            writable: true,
            configurable: true
        } });



        
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        value:estoque,
        writable: true,
        configurable: true
    });

    
}
const biscoito = new Produto('Biscoito', 3.75, 234);
console.log(biscoito);