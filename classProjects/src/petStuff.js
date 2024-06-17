var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Pet = /** @class */ (function () {
    function Pet(name, age, species) {
        this.name = name;
        this.age = age;
        this.species = species;
    }
    Pet.prototype.toString = function () {
        return "Name: " + this.name + ", Age: " + this.age + ", Species: " + this.species;
    };
    return Pet;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, age) {
        return _super.call(this, name, age, 'Dog') || this;
    }
    return Dog;
}(Pet));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name, age) {
        return _super.call(this, name, age, 'Cat') || this;
    }
    return Cat;
}(Pet));
var Lizard = /** @class */ (function (_super) {
    __extends(Lizard, _super);
    function Lizard(name, age) {
        return _super.call(this, name, age, 'Lizard') || this;
    }
    return Lizard;
}(Pet));
var pets = [
    new Dog('Rex', 4),
    new Cat('Whiskers', 2),
    new Lizard('Spike', 1)
];
// Map the pet array onto an array of species strings
var speciesArray = pets.map(function (pet) { return pet.species; });
console.log('Species:', speciesArray);
// Print the toString output of each pet
pets.forEach(function (pet) { return console.log(pet.toString()); });
