const arrows = document.querySelectorAll('#container_carousel i');
const cards = document.querySelectorAll('.steps_cards');
const maxIdex = cards.length;

let currentItem = 0;

// Checking whether the style will be removed from just one question or all.
arrows.forEach(e=>{
    e.addEventListener('click', (arrow)=>{
        if(arrow.target.id == 'arrow_left'){
            currentItem -= 1; 
        }else{
            currentItem += 1;
        }
        if(currentItem > maxIdex - 1){
            currentItem = 0;
        }
        if(currentItem < 0){
            currentItem = maxIdex - 1;
        }
        cards.forEach(card=>{
            card.classList.remove('current_item')
        })

        centerCard();

        cards[currentItem].classList.add('current_item');
    })
})

// Centering the current card.
const centerCard = ()=>{
    cards[currentItem].scrollIntoView({
        inline: 'center',
        behavior: 'smooth',
        block: 'nearest'
    })
}

// Centering the card when changing the screen size.
window.addEventListener('resize', centerCard);


