class Person {
    constructor(name,age){
        this.name = name
        this.age = age
    }
    say(){
        console.log('say:yuyan')
    }
}
const p1 = new Person('people',56)
console.log(p1)


class Chinese extends Person{
    constructor(name,age,cardID){
        super(name,age)//当extends时必须优先调用super，super是一个函数，而且是父类的构造器
        this.cardID = cardID//this只能在super()后面使用
    }
}
const c1 = new Chinese('小明',13,'12131231')

console.log(c1)
c1.say()