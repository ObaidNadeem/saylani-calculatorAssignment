
function getNumber(num) {
    //console.log(num)
    var Result = document.getElementById("result")

    Result.value += num;
}

function clearDisplay() {
    var Result = document.getElementById("result")
    Result.value = "";
}
function getResult() {
    var Result = document.getElementById("result")
    Result.value = eval(Result.value)
}