// //1) Funkcja this-> global,window
// function Person(imie, nazwisko){
//     this.imie = imie;
//     this.nazwisko = nazwisko;
// }
// //trafi do global
// var p1 = Person('Jan', 'Kowalski')
// var p2 = Person('Janina', 'Kowalska')

// //object z konstruktora
// var p1 = new Person('Jan', 'Kowalski')
// var p2 = new Person('Janina', 'Kowalska')

//wzór klasy w es5
var Person = (function() {
    //private
    var age = 23;
    function Person(imie, nazwisko) {
        //public
        this.imie = imie;
        this.nazwisko = nazwisko;
}
//public przez prototype
Person.prototype.sayHello = function () {
    return "I`m " + this.imie + " of " + age;
}
return Person;
})();


var p1 = new Person('Jan', 'Kowalski');
console.log(p1.sayHello());
var p2 = new Person('Janina', 'Kowalska');
console.log(p1.sayHello());

//2) Metoda this-> Object
//3) Konstruktor this-> new Object
//4) call, apply this->do przekazanego