function f(){
    console.log(i);
    for(var i = 0; i < 10; i++) {
    }
    console.log("i = " + i);
}

f();

// linter co to?
var a = 1;
function doSmthg() {
    a = 5;
    function doMore() {
        a = 10;
    }
    return {
        doMore: doMore
    };
}

var d = doSmthg();
d.doMore();
console.log("a = " + a);

function counter() {
    var i = 0;
    return function() {
        return ++i;
    }
}

var inc1 = counter()();
console.log("incremented = " + inc1)

//IEF
var inc = function(){
    var i = 0;
    return function() {
        return i++;
    };
}();

console.log(inc());
console.log(inc());

var lib = {};
lib.module = (function() {
    var im = "Jan";
    var na = "Kowalski";

    return {
        imie: im + " " + na,
        przedstawSie: function() {
            console.log("Dane: " + im + " " + na)
        },
        sayHello: function() {
            this.przedstawSie();
        }
    }
}());

// THIS, DUCKTYPING, CLOUSURES
console.log(lib.module.imie);
lib.module.przedstawSie();

function sayHello() {
    this.imie = "Jan";
    var self = this;
    return {
        przedstawSie: function(){
            console.log(self.imie);
        }
    }
}

sayHello().przedstawSie();

// KONSTRUKTORY
function Person(imie, nazwisko) {
    this.imie = imie;
    this.nazwisko = nazwisko;
}

var jasiu = new Person("Kamil", "Kowalski");
console.log(jasiu.imie + " " + jasiu.nazwisko);

// APPLY,CALL
function kwaKwa(end) {
    console.log(this.name + " says: Kwa Kwa " + end);
} 

var kaczka = {
    name: 'Kaczka dziwaczka'
}

kwaKwa.apply(kaczka, ['!']);