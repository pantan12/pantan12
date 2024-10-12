let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "./이상해씨.jpg") {
    myImage.setAttribute("src", "./클루.jpg");
  } else {
    myImage.setAttribute("src", "./ncdinos.png");
  }
  if(mySrc === "./ncdinos.png")
    myImage.setAttribute("src", "./이상해씨.jpg");
};

let myButton = document.querySelector("button");

function setUserAge() {
    let myAge = prompt("Please enter your age.");
    localStorage.setItem("age", myAge);
    if(myAge > 14)
        alert("You are older than me!")
    else if(myAge == 14)
        alert("You are the same age as me")
    else
        alert("You are younger than me")
  }

  if (!localStorage.getItem("age")) {
    setUserAge();
  } else {
    let storedage = localStorage.getItem("age");
  }

  myButton.onclick = function () {
    setUserAge();
  };
  
  
