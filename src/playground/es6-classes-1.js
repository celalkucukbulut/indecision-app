class Person {
    constructor(name = 'Anonymous', age = 0){
        this.name = name;
        this.age = age;
    }
    getGretting(){
        return `Hi ${ this.name }!`;
    }
    getDescription(){
        return `${ this.name } is ${this.age} year(s) old.`;
    }
};

const me = new Person('Celal');
console.log(me.getDescription());

const other = new Person();
console.log(other.getDescription());


class Traveler extends Person {
    constructor(name,age,homeland){
        super(name,age);
        this.homeland = homeland;
    }
    hasHomelend(){
        return !!this.homeland;
    }
    getGretting(){
        let gretting = super.getGretting();
        this.hasHomelend() ? gretting += ` from ${this.homeland}` : gretting;
        return gretting;
    }
}


const letsoturko = new Traveler('Ahmet',32,'Turkey');
console.log(letsoturko.getGretting());

const hasan = new Traveler();
console.log(hasan.getGretting());

