//manipulação de array
/*var k = [1,2,3,4]

console.log(k)

console.log(k[2])

console.log(k.length)

k.push(5)

console.log(k)

console.log(k.length)

k.pop()
k.pop()

console.log(k)

console.log(k.length)*/

//Função
/*
function Pessoa(a,b,c){
    this.nome = a
    this.idade = b
    this.telefone = c
}

var x = new Pessoa ("Afonso", 31, 912341234)
var y = new Pessoa ("Teste", 20, 940028922)
console.log(x)
console.log(y)*/

/*function Carro(a,b,c,d, popular){
    this.nome = a
    this.ano = b
    this.cor = c
    this.modelo = d
    this.popular = popular ? "Popular" : "É capenga" //alternario. 
}

var y = new Carro("Teste", 2002, "vermelho", "veronao", false)

console.log(y)*/

/*t = [1,2,3,4]

t.forEach(x => {
    if(x%2 == 0){
        console.log(x, "é par")
    } else {
        console.log(x, "é impar")
    }
});

console.log(t[0], t[1])*/

//javascript
//tipos de variavel
/* 
    let = escopo local
    var = escopo global
    const = constante
*/

a = []

function Aluno(nome, curso){
    this.nome = nome
    this.curso = curso 
    a.push(nome,curso)
}

var b = new Aluno ("Nome: teste, rgm: 202", "ads")
var c = new Aluno ("Nome: jao rgm: 203", "ads")
var d = new Aluno ("Nome: aron rgm: 202", "direito")
var e = new Aluno ("Nome: bado, rgm: 203", "estetica")

a.forEach(x => {
    if(x === 'ads'){
        console.log(x, "é bao")
    } else {
        console.log(x, "é bagre")
    }
});

console.log(a[0])