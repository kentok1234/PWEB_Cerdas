// Mobile
// Inisialisasi menu icon
let button_menu = document.getElementsByClassName("mobile-menu");
let menu_icon = button_menu[0];

// Inisialisasi menu
let get_menu = document.getElementsByClassName("menu")
let get_btn_login_signup = document.getElementsByClassName("login-signup");
let menu = get_menu[0];
let btn_login_signup = get_btn_login_signup[0];

menu_icon.addEventListener("click", (event) => {
    event.preventDefault();
    console.log('Halo saya di klik', menu_icon);
    menu.classList.toggle("active");
});

// Non-Mobile
let have_submenu = document.querySelectorAll(".have-submenu");
have_submenu.forEach((submenu) => {
    submenu.addEventListener("click", (event) => {
        event.preventDefault();
        
        let item_submenu = document.querySelectorAll(".submenu");
        item_submenu.forEach((item) => {
            item.classList.toggle("show")
        });
    });
}) ;

// let menus = document.querySelectorAll(".menu");
// menus.forEach((menu) => {
//     console.log('Hai ',menu);

//     menu.addEventListener('click', (event) => {
//         event.preventDefault();
//         console.log("clicked", menu);
//         let submenu = menu.getElementsByClassName("submenu");
//         Array.from(submenu).forEach((item_menu) => {
//             item_menu.classList.toggle("active");
//         });
//     });
// });