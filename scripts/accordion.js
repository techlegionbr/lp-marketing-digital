const questions = document.querySelectorAll("#faq li"); 

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

const removeActive= (e, all)=>{
    if(all.all){
        questions.forEach(e=>{
            e.querySelector('.faq_response').classList.remove('active');
            e.firstElementChild.querySelector('p').style.opacity = '.7';
            e.querySelector('i').style.transform = 'rotate(0)';
        })
    }else {
        e.querySelector('.faq_response').classList.remove('active');
        e.firstElementChild.querySelector('p').style.opacity = '.7';
        e.querySelector('i').style.transform = 'rotate(0)';

    }
}
   