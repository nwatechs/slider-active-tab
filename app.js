// Select the buttons from html
const allBtns = document.querySelectorAll('.nav-btn')

// Select all the screens from html
const allScreens = document.querySelectorAll('.display div')

// Loop through all buttons using forEach method
allBtns.forEach(function (btn, index) {
    btn.onclick = function () {
        // Remove .active class from other buttons and screens
        // allBtns.forEach(function (btn) {
          //  btn.classList.remove('active')
      //  }); is same as line 14
        // allBtns.forEach(btn => btn.classList.remove('active'));
        allScreens.forEach(screen => screen.classList.remove('active'));
        // Add the .active class to the button
        btn.classList.add('active')
        allScreens[index].classList.add('active')
    }
})


