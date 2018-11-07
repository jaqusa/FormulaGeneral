
function general (a,b,c){
  this.a = a
  this.b = b
  this.c = c


  this.mult = function (n1,n2){
     return  n1 * n2
  }

  this.division = function (n1,n2){
      if(n2 != 0 )
          return n1/n2
      else console.log('no se puede dividir')
  }

  this.cuadrado = function (n){
     return this.mult(n,n)
  }

  this.raiz = function(){
      return Math.sqrt(this.cuadrado(this.b)- this.mult(this.mult(this.a,this.c),4))
  }

  this.formpos = function(){
    return this.division( -this.b+this.raiz(), this.mult(this.a,2))
  }

  this.formneg = function(){
    return this.division( -this.b-this.raiz(), this.mult(this.a,2))
  }

}

var solucion = new general (4,6,2)

console.log('raiz positiva: ', solucion.formpos())
console.log('raiz negativa: ',solucion.formneg())
