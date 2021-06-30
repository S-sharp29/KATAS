var form = document.getElementById("form-age");

form.addEventListener('submit', function(e) {
    e.preventDefault();
    convertDogYears();
});

function convertDogYears() {
    let humanYears = parseInt(document.getElementById("age").value);
    console.log(typeof humanYears);
    //convert human years to dog years
    if(humanYears === 1){
        document.getElementById("years").innerHTML = 10.5;
    } else if (humanYears === 2) {
        document.getElementById("years").innerHTML = 21;
    } else {
        document.getElementById("years").innerHTML = (humanYears - 2) * 8 + 21;
    }

}