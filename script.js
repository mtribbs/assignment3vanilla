
//DOM elements

const menuBtn = document.getElementById("menubtn");
const dropDown = document.getElementById("dropdown");

const formBox = document.getElementById("formbox");
const signUpBtn = document.getElementById("btnsignup");
const signUpBox = document.getElementById("signup");
const exitBtn = document.getElementById("exitbtn");

// hide

dropDown.style.display = "none";

formBox.style.display = "none";


//functions

function menuClosed() {
    dropDown.style.display = "none";  
}

function menuOpen() {
    dropDown.style.display = "flex";   
}


function formClosed() {
    formBox.style.display = "none";
    signUpBox.style.display = "block";
}

function formOpen() {
    formBox.style.display = "flex";
    signUpBox.style.display = "none";
}

//

function openMenu() {
    if (dropDown.style.display === "none") {
        return menuOpen();
    }
    else {
        return menuClosed();
    }
}

function openForm() {
    if (formBox.style.display === "none") {
        return formOpen();
    }
    else {
        return formClosed();
    }
}


// event listeners

menuBtn.addEventListener("click", openMenu);

document.addEventListener('click', function(menuClick) {
  const clickOnMenuBtn = menuBtn.contains(menuClick.target);
  const clickInsideMenu = dropDown.contains(menuClick.target);

  if (!clickOnMenuBtn && !clickInsideMenu) {
    return menuClosed();
  }
});


signUpBtn.addEventListener("click", openForm);

document.addEventListener("click", function(formClick) {
    const clickOnSignUp = signUpBtn.contains(formClick.target);
    const clickInsideForm = formBox.contains(formClick.target);
  
    if (!clickOnSignUp && !clickInsideForm) {
        return formClosed();
    }
});

exitBtn.addEventListener("click", formClosed);