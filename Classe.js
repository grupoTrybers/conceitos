//constructor -> método para inicializar o objeto
//super -> acessar informações do pai (herança/inheritance)
//this -> instanciar objeto

//get-> funcionalidades em si (return)
//set-> instanciar o get

class Quadrado{
  constructor(base, altura){
    this.nome = 'Quadrado'
    this.base = base
    this.altura = altura
  }
}

class Triangulo extends Quadrado{
  constructor(base, altura){
    super(base,altura)
    this.nome = 'Triângulo'
    this.definicao = 'O triângulo é um elemento...'
  }

  get area(){
    return (this.base * this.altura)/2
  }
  set area(value){
    this.area = value
  }
  get perimetro(){
    return this.base * 3
  }
  set perimetro(value){
    this.perimetro = value
  }
 
}
let meuTriangulo = new Triangulo(10,10)
console.log(`Área: ${meuTriangulo.area}
Perímetro: ${meuTriangulo.perimetro}`)
console.log(meuTriangulo)















