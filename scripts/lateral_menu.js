const hamburgerButton = document.querySelector('#hamburgerButton');
const lateralMenu = document.querySelector('#lateral_menu');
const arrow_right_menu = document.querySelector('#arrow_right_menu');

// Making the menu appear.
const appearLateralMenu = ()=>{
    lateralMenu.style.right = "0";
}

// Making the menu disappear.
const disappearLateralMenu = ()=>{
    lateralMenu.style.right = "-55%";
}

// Event that identifies click outside the side menu
const handleClickOutside = (event)=>{
    if(!lateralMenu.contains(event.target) && !hamburgerButton.contains(event.target)){
            disappearLateralMenu();
    }
}

hamburgerButton.addEventListener('click', appearLateralMenu);
arrow_right_menu.addEventListener('click', disappearLateralMenu);
document.addEventListener('click', handleClickOutside);