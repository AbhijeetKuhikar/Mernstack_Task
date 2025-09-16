/* let e2 = document.getElementById("e2")

function addBorder() {
    let borderClassExist = e2.classList.includes("border")
    console.log(e2.classList[0])
    if (borderClassExist) {
        e2.classList = `${e2.classList}`
    }else{
        e2.classList = `${e2.classList} border`
    }
}
let button = document.querySelector("#btn1");
button.addEventListener("click", addBorder);
 */

//Method 1


/* let e2 = document.getElementById("e2");
function addBorder() {
    e2.classList.toggle("border");  // adds if not there, removes if already there
}

let button = document.querySelector("#btn1");
button.addEventListener("click", addBorder);
 */


//Method 2


/* let e2 = document.getElementById("e2");

function addBorder() {
    if (e2.classList.contains("border")) {
        e2.classList.remove("border"); // remove if exists
    } else {
        e2.classList.add("border"); // add if not exists
    }
}

let button = document.querySelector("#btn1");
button.addEventListener("click", addBorder);  // attach click event
 */


//method 3

let e2 = document.getElementById("e2");
let button = document.getElementById("btn1");

function addBorder() {
    if (e2.style.border == "") {
        e2.style.border = "10px solid black";
    } else {
        e2.style.border = "";
    }
}

button.addEventListener("click", addBorder);