const sections = document.querySelector('#main_text');
const header = document.querySelector('header')

const option = {
    root: null,
    rootMargin: "0px",
    threshold: 1
}

const handleHeader = (entries, observer) => {
    entries.forEach((entry => {
        if (entry.isIntersecting) {
            header.classList.remove('appearHeader')
        } else {
            header.classList.add('appearHeader');
        }
    }))

}
const observerHeader = new IntersectionObserver(handleHeader, option);


observerHeader.observe(sections);




