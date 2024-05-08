const plusBtn = document.querySelector(".plus");
const out = document.querySelector(".out");
const minusBtn = document.querySelector(".minus");
const select = document.querySelector("#selectCount");

var count = 0;
var selectedValue = 1

select.addEventListener('change', function() {
    let changed_value = this.value
    // console.log(changed_value);
    selectedValue = parseInt(changed_value);
})

plusBtn.addEventListener('click', function(){
    count += selectedValue ;
    // console.log(count)
    // out.innerHTML = `<b>${count}</b>`
    out.innerHTML = "<b>" + count + "</b>"
})

minusBtn.addEventListener('click', function(){
    count -= selectedValue;
    // console.log(count)
    out.innerHTML = "<b>" + count + "</b>"
})