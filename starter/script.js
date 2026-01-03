'use strict';

// video 104
/*function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let outPut = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(outPut);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'mimo';
      const str = `Oh, and you are a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      // Reassigning outer scope's variable
      outPut = 'NEW OUTPUT!';
    }
    // console.lo(str);
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(outPut);
  }
  printAge();

  return age;
}

const firstName = 'milad';
calcAge(1991);*/

// video 105
// variables
/*
console.log(me);
//console.log(job);
//console.log(year);

var me = 'milad';
let job = 'teacher';
const year = 1991;

// functions
console.log(addDec(2, 3));
//console.log(addExpr(2, 3));
//console.log(addArrow(2, 3));

function addDec(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// example
console.log(undefined);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}
*/
// video 106 - this keyword

// video 107 - this keyword practice
/*console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1980);

const milad = {
  year: 1991,
  calcAge: function () {
    console.log(2037 - this.year);
  },
};
milad.calcAge();

const matilda = {
  year: 2017,
};
matilda.calcAge = milad.calcAge;
matilda.calcAge();*/

// video 108

/*const milad = {
  firstName: 'milad',
  year: 1991,
  calcAge: function () {
    //console.log(this);
    console.log(2037 - this.year);

    // solution 1
    /*const self = this; // self or that
    const isMillenial = function () {
      console.log(self);
      console.log(self.year >= 1981 && self.year <= 1996);
    };*/

// solution 2
/*const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
milad.greet();
milad.calcAge();

// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);*/

// video 109 - description of memory management

// video 110 - Object References in Practice Shallow vs Deep Copies
/*const jessica1 = {
  firstName: 'jessika',
  lastName: 'williams',
  age: 27,
};

function marryPerson(originalPerson, newLastName) {
  originalPerson.lastName = newLastName;
  return originalPerson;
}

const marriedJessica = marryPerson(jessica1, 'davis');

//const marriedJessica = jessica1;
//marriedJessica.lastName = 'davis';

console.log('Before:', jessica1);
console.log('After:', marriedJessica);

const jessica = {
  firstName: 'jessika',
  lastName: 'williams',
  age: 27,
  family: ['bob', 'alice'],
};

// shallow copy
const jessicaCoppy = { ...jessica };
jessicaCoppy.lastName = 'Davis';

//jessicaCoppy.family.push('marry');
//jessicaCoppy.family.push('john');

//console.log('Before:', jessica);
//console.log('After:', jessicaCoppy);

// deep copy or clone - best practice
const jessicaClone = structuredClone(jessica);
jessicaClone.family.push('marry');
jessicaClone.family.push('john');

console.log('Before clone:', jessica);
console.log('After clone:', jessicaClone);*/

// video 111 - Memory Management Garbage Collection - description

// video 112 - description
