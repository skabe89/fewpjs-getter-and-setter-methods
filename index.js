// Add your Circle class here

class Circle {

  constructor(radius){
    this.radius = radius
  }

  set diameter(num){
    this.radius = num/2
  }

  get diameter(){
    return this.radius * 2
  }

  set circumference(num){
     this.radius = num/(Math.PI * 2)
  }

  get circumference(){
    return 2 * (this.radius * Math.PI) 
  }

  get area(){
    return Math.PI * (this.radius ** 2)
  }

}