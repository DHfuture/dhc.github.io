// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";
//
// if (true) {
//     alert("Hello dhc!");
// }
//
// for (let i = 0; i < 10; i++) {
//     alert(multiply(i, i));
// }
//
// document.querySelector("html").addEventListener("click", function () {
//     alert("别戳我，我怕疼！");
// });
//
//
// function multiply(num1, num2)  {
//     let result = num1 * num2;
//     return result;
// }

const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/1.png") {
        myImage.setAttribute("src", "images/2.jpg");
    } else {
        myImage.setAttribute("src", "images/1.png");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
}


if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = function () {
    setUserName();
};
