
//DOM elements

const menuBtn = document.getElementById("menubtn");
const dropDown = document.getElementById("dropdown");

// hide dropdown menu

dropDown.style.display = "none";

// menu function

function menuClosed() {
    dropDown.style.display = "none";  
}

function menuOpen() {
    dropDown.style.display = "flex";   
}



function openMenu() {
    if (dropDown.style.display === "none") {
        return menuOpen();
    }
    else {
        return menuClosed();
    }
}

// event listeners

menuBtn.addEventListener("click", openMenu);


document.addEventListener('click', function(event) {
  const isClickInside = menuBtn.contains(event.target);

  if (!isClickInside) {
    return menuClosed();
  }
});
