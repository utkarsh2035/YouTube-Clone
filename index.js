var menuIcon = document.querySelector(".toggle_btn"); // Select the menu icon with the class "toggle_btn"
var sideBar = document.querySelector(".sidebar_container");

menuIcon.onclick = function(){
    sideBar.classList.toggle("small_menubar"); // Toggle the class "small_menubar" on the sideBar element
}

