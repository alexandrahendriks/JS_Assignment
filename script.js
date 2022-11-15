let toggleNavStatus = false;


const toggleNav = function (){
    let getSidebar = document.querySelector(".nav-dropdown");
    let getSidebarUl = document.querySelector(".nav-dropdown ul");
    
    if (toggleNavStatus === false) {
        getSidebarUl.style.visibility = "visible";
        getSidebar.style.width = "200px";

        toggleNavStatus = true; 
    }
     else if (toggleNavStatus === true) {
        getSidebar.style.width = "0px";
        getSidebarUl.style.visibility = "hidden";

        toggleNavStatus = false; 
    }
}

const home = document.getElementById('home');

home.addEventListener('click', function onClick() {
  document.body.style.backgroundColor = 'grey';
  toggleNav();
});

const red = document.getElementById('red');

red.addEventListener('click', function onClick() {
  document.body.style.backgroundColor = 'red';
  toggleNav();
});

const blue = document.getElementById('blue');

blue.addEventListener('click', function onClick() {
  document.body.style.backgroundColor = 'blue';
  toggleNav();
});


const purple = document.getElementById('purple');

purple.addEventListener('click', function onClick() {
  document.body.style.backgroundColor = 'purple';
  toggleNav();
});

const yellow = document.getElementById('yellow');

yellow.addEventListener('click', function onClick() {
  document.body.style.backgroundColor = 'yellow';
  toggleNav();
});

