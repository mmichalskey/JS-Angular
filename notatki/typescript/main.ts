interface Person {
    readonly imie: string;
    nazwisko?: string; //opcjonalnosc ?
}

//class Student implements Person { klasa moze implementowac interface
class Student{
    constructor(public imie: string, public nazwisko: string){}

    sayHello() {
        return `Hi, I'm ${this.imie})`;
    }
}

let add = (a: number, b: number):number => a + b;

// function sayHi(person: Person){ funkcja moze byc typowana na interfejs
function sayHi(person: {imie: string, nazwisko?: string}, wiek: number = 18){ //interface wirtualny
    if(person.nazwisko){
        console.log(`I'm ${person.imie} ${person.nazwisko} of ${wiek}`);    
    }
    else{    
    console.log("I`m " + person.imie);
    }
}

let stud:Person = new Student('Jan', 'Kowalski');
// stud.imie = "Zenek"; nie zadziala bo imie readonly w interface
sayHi(stud);