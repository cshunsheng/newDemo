//Es6关键字，是面向对象编程的新形势
//基本用法
function PersonEs5(name,age){
    this.name = name
    this.age = age
}
console.dir(PersonEs5)
//静态属性
PersonEs5.info = 'ccc'
//静态方法
PersonEs5.show = function(){
    console.log('111')
}
//添加方法
PersonEs5.prototype.say = function(){
    console.log('-----say')
}
const p1Es5 = new PersonEs5('xiaoxiao',14)
console.log(p1Es5)
p1Es5.say()



//------------------------------------------------


class Person {
    //constructor,每个类都用，如果没有写，也会有默认的
    //  当new的时候优先之行constructor
    constructor(name,age){
        //实例属性
        this.name = name
        this.age = age
    }
    //静态属性
    static info = 'aaaa'
    //静态方法
    static show = function() {
        console.log('+++++++show')
    }
    //实例方法
    say(){
        console.log('==============say')
    }

}

const p1 = new Person('小明',13) //实例
console.log(p1)
p1.say()
console.log(Person.info)
Person.show()