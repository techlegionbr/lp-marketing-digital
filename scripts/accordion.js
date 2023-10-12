const question = document.querySelectorAll("#faq li");


question.forEach(e => {
    e.addEventListener('click', () => {
        const response = e.querySelector('.faq_response')
        if (response.classList.contains('active')) {
            e.querySelector('.faq_response').classList.remove('active');
            console.log(response);
        } else {
            response.classList.add("active");
        }
    })
})