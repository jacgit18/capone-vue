class Pet {
    constructor(
      public name: string,
      public age: number,
      public species: string
    ) {}
  
    toString(): string {
      return `Name: ${this.name}, Age: ${this.age}, Species: ${this.species}`;
    }
  }
  
  class Dog extends Pet {
    constructor(name: string, age: number) {
      super(name, age, 'Dog');
    }
  }
  
  class Cat extends Pet {
    constructor(name: string, age: number) {
      super(name, age, 'Cat');
    }
  }
  
  class Lizard extends Pet {
    constructor(name: string, age: number) {
      super(name, age, 'Lizard');
    }
  }
  
  const pets: Pet[] = [
    new Dog('Rex', 4),
    new Cat('Whiskers', 2),
    new Lizard('Spike', 1)
  ];
  
  // Map the pet array onto an array of species strings
  const speciesArray: string[] = pets.map(pet => pet.species);
  console.log('Species:', speciesArray);
  
  // Print the toString output of each pet
  pets.forEach(pet => console.log(pet.toString()));
  