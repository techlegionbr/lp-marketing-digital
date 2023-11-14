const hamburgerButton = document.querySelector('#hamburgerButton');
const lateralMenu = document.querySelector('#lateral_menu');
const arrow_right_menu = document.querySelector('#arrow_right_menu');




const appearLateralMenu = ()=>{
    lateralMenu.style.right = "0";
    hamburgerButton.style.display = "none";

}

const disappearLateralMenu = ()=>{
    lateralMenu.style.right = "-50%";
    hamburgerButton.style.display = "inline";
}

const handleClickOutside = (event)=>{
    if(!lateralMenu.contains(event.target) && !hamburgerButton.contains(event.target)){
            disappearLateralMenu();
    }
}

hamburgerButton.addEventListener('click', appearLateralMenu);
arrow_right_menu.addEventListener('click', disappearLateralMenu);
document.addEventListener('click', handleClickOutside)