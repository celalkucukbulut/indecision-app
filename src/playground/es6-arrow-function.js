const square = function (x){
    return x*x;
};
console.log(square(3));

function square2(x){
    return x*x
};
console.log(square2(4));

const squareArrow = (x) => {
    return x*x;
};
console.log(squareArrow(5));

const squareArrow2 = (x) => x*x;
console.log(squareArrow2(6));


const getFirstName = (nameInput) => {
    return nameInput.split(' ')[0];
}
console.log(getFirstName('Celal K'));

const getFirstName2 = (nameInput) => nameInput.split(' ')[0];
console.log(getFirstName2('Begüm K'));
