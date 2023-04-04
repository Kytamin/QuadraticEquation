class QuadraticEquation {
    A
    B
    C

    constructor(A, B, C) {
        this.A = A
        this.B = B
        this.C = C
    }
    getA(){
        return this.A
    }
    getB(){
        return this.B
    }
    getC(){
        return this.C
    }
    getDiscriminant(){

         let detal=(this.B*this.B)-(4*this.A*this.C)
        return detal
    }
    getRoot1(){
        let x1=(-this.B +  Math.sqrt(this.getDiscriminant()))/2*this.A
        return x1

    }
    getRoot2(){
       let x2 =(-this.B - Math.sqrt(this.getDiscriminant()))/2*this.A
        return x2
    }
    count(){
        if(this.getDiscriminant()>0){
            return `Phương trình có 2 nghiệm x1=${this.getRoot1()} ; x2= ${this.getRoot2()}`
        }else if (this.getDiscriminant()===0){
            return `Phương trình có nghiệm kép x= ${(-this.getB())/2*this.getA()}`
        }else {
            return `The equation has no roots`
        }
    }


}
   let QuadraticEquation1= new QuadraticEquation(1,2,9)
console.log(QuadraticEquation1.count())
console.log(QuadraticEquation1.getDiscriminant())