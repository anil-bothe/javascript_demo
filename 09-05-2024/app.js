// const 
// let 
// var

// console.log("simple log")
// console.warn("warning messages!")
// console.error("error message sample!")

// x = ""

// if (!x) {
//     console.log("in if statement")
// } else {
//     console.log("else statement")
// }

// x = 5;
// y = 6;

// true => 1
// false => 0

// if (true && false) {
//   console.log("successfully applied condition!");
// } else if (x > 5 || y > 5) {
//   console.log("..... done!");
// } else if (x > 5 || y > 5) {
//   console.log("..... done!");
// } else {
//   console.log("... default");
// }


class Student {
    constructor (name){
        this.name = name;
    }

    examResult() { 
        return `${this.name} has 85% in last exam!` 
    }
}

let obj = new Student("Anil")

let result = obj.examResult()
// console.log(result)

x = [1,2,4]


x.map(function(e){
    console.log(e)
})


x = x.map(i => i + 2)

// [3, 4, 6]