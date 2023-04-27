class Student {
    constructor(firstName, secondName){
        this.firstName = firstName;
        this.secondName = secondName;
        this.late = 0;
        this.scores = [];
    }
    fullName(){
        return `Your name is ${this.firstName} ${this.secondName}`
    }
    markLate(){
        this.late += 1;
        if(this.late >= 3){
          return "YOU ARE EXPELLED!!!";
        }
        return `${this.firstName} ${this.secondName} has been late ${this.late} times`;
    }
    addScores(score){
        this.scores.push(score);
        return this.scores
    }
    calculateAverage(){
        let sum = this.scores.reduce(function(a,b) {return a+b;});
        return sum/this.scores.length;
    }
}

let student1 = new Student("Samuel", "Wachira");
let student2 = new Student("Grace", "Nduta");

console.log(student1.calculateAverage());