const multiplier = {
    numbers : [2,3,4],
    multiplyBy : 5,
    multiplier () {
        return this.numbers.map(number => number*this.multiplyBy);
    }
}
console.log(multiplier.multiplier());