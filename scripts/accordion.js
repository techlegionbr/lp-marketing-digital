const questions = document.querySelectorAll("#faq li"); 

// Adding click event to FAQ questions.
questions.forEach(e => {
    e.addEventListener('click', () => {
        const response = e.querySelector('.faq_response')
        if (response.classList.contains('active')) {
           removeActive(e, {all: false});

        } else {
            removeActive(e, {all : true})
            response.classList.add("active");
            e.firstElementChild.querySelector('p').style.opacity = '1';
            e.querySelector('i').style.transform = 'rotate(180deg)';
        }
    })
})

// Returning the question style to deactivated.
const removingActive = (elemet)=>{
    elemet.querySelector('.faq_response').classList.remove('active');
    elemet.firstElementChild.querySelector('p').style.opacity = '.7';
    elemet.querySelector('i').style.transform = 'rotate(0)';
}

// Checking whether the style will be removed from just one question or all.
const removeActive= (e, all)=>{
    if(all.all){
        questions.forEach(e=>{
          removingActive(e)
        })
    }else {
        removingActive(e);
    }
}
   