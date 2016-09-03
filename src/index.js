'use strict';

//5/ Tworzymy klasę bazową Animal
class Animal {
  sayName () {
    return this.name;
  }
}

//6/ Standardowe dziedziczenie 
class Dog extends Animal {
  constructor (name) {
    super();
    this.name = name;
  }
}

//6/ Klasa Kota też dziedziczy po Animal
class Cat extends Animal {
  constructor(name) {
    super();
    console.log(this);
    this.name = name;
  }
}

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
