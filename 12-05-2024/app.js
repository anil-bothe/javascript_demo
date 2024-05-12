userInput = 5;

if (userInput % 2 != 0) {
  console.log("Odd");
} else {
  console.log("Even");
}

// function myFunc() {
//     return "Hi, how are you?"
// }

// // x = myFunc();
// // console.log(x)

// console.log(myFunc())

let x = "sumit";

// goal; search i exist or not:

// isExist = x.includes("i")

if (!isExist) {
  console.log("`i` is not found in: " + x);
} else {
  console.log("`i` is found");
}


// reverse the js string

// for (let i=0; i< 10; i++) {
//     console.log(i)
// }

x = 'sumit'
for (let charIndex=0; charIndex < x.length; charIndex ++ ){
    console.log(x[charIndex])
}


x = 'sumit'
for (let charIndex=x.length - 1; charIndex >= 0 ; charIndex -- ){
    console.log(x[charIndex])
}
