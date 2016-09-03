'use strict';

//4/ Tworzymy klasę bazową Animal
function Animal() {}
Animal.prototype.sayName = function () {
  return this.name;
};

//4/ Klasa Psa (każdy pies ma wspólnego przodka)
function Dog(name) {
  this.name = name;
};
Dog.prototype = new Animal();

//4/ Klasa Kota (każdy kot ma wspólnego przodka)
function Cat(name) {
  this.name = name;
}
Cat.prototype = new Animal();

//4/ Stwórzmy instancję kota i psa
const cat1 = new Cat('Tomek');
const dog1 = new Dog('Marek');
console.dir(cat1);
console.dir(dog1);

//11/ Sprawdźmy kilka własności
const result = `
  Cat's Name: ${cat1.sayName()}
  Dog's Name: ${dog1.sayName()}

  Is cat1 a Cat?: ${cat1 instanceof Cat}
  Is dog1 a Dog?: ${dog1 instanceof Dog}
  
  Is cat1 an Animal?: ${cat1 instanceof Animal}

  Is cat1 a Dog?: ${cat1 instanceof Dog}
`;
document.querySelector('.greeter').innerHTML = result;
