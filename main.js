const nav_burger=document.querySelector(".nav-burger")

const nav_list = document.querySelector(".nav-list")

burger_click_counter = "false";
function burger_click(){
    if (burger_click_counter == "false"){
        burger_click_counter = "true"
        nav_list.style.right = "0"
    } else {
        burger_click_counter = "false"
        nav_list.style.right = "-25rem"
    }
}

nav_burger.addEventListener("click", burger_click)
