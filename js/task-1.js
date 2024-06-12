// console.log('Hello');
// alert ('Hello');
// prompt('Enter value');

// CONST OR LET
// const number = 20;
// console.log(number);

// let num;
// console.log(num);

// const a = 10;
// const b = 15;

// let res = null;
// res = a + b;
// console.log(res);

// res = 25 + 5;
// console.log(res);

//how TO initialize 
// const $ = 10;
// const $num = 10;
// const _ = 10;
// const user_name = 'Jim';

//how NOT initialize
// const 10nun = 10;
// const user-name = 'Jim';
// const let = 20;
// const const = 10;
// const false = false;



// const number = 10;
// const string = '15';
// const boolean = true;
// const someDate = null;
// const anotherDate = undefined;
// console.log(typeof someDate);

// const res = number + Number(string);
// console.log(res);

// console.log(10 / 'hello'); //NaN
// console.log(10 / 0); //Infinity when / 0

// console.log(10 + 10); //20
// console.log(10 - 5); //5
// console.log(10 / 5); //2
// console.log(10 + 'hello'); //10hello
// console.log(10 + true); // 11
// console.log(10 + '10' - 2); //1008
// console.log(10 + ('10' - 2)); // 18
// console.log(10 + ('hello' - 2)); //Nan
// console.log(10 + false); // 10
// console.log(10 + (true - 2)); // 9
// console.log(isNan(10 / 'hello')); // 
// console.log(isNan(10 / 2)); //


// console.log(typeof String(10)); //string
// console.log(10.2); // 10.2
// console.log(0.1 + 0.2); //0.30000000000000004
// console.log((0.1 + 0.2).toFixed(1)); // 0.3
// console.log(2 + 0.2); // 2.2


// const firstName = 'Liza';
// const secondName = 'Popko';
// const fullName = firstName + ' ' + secondName;
// console.log(fullName);
// const normalizeFullName = `${firstName} ${secondName}`;// interpolation

const userName = prompt ('Enter your name');
function greet(name) {
 
    return(`Hello ${name}`);
}
console.log(greet(userName));
