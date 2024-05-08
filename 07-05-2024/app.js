let lightThemeBtn = document.querySelector(".light-btn");
let darkThemeBtn = document.querySelector(".dark-btn");
let card = document.querySelector(".card");
let addBtn = document.querySelector(".add");
let body = document.querySelector("body");


lightThemeBtn.addEventListener("click", function(){
    // alert("Hello you clicked")
    card.style.backgroundColor = "var(--light-bg)";
    card.style.color = "var(--light-text)";
})

darkThemeBtn.addEventListener("click", function(){
    // alert("Hello you clicked")
    card.style.backgroundColor = "var(--dark-bg)";
    card.style.color = "var(--dark-text)";
})

addBtn.addEventListener("click", function(){
    card.remove()
})