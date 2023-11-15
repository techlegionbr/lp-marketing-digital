const sections = document.querySelector('#main_text');
const header = document.querySelector('header');

const option = {
    root: null,
    rootMargin: "0px",
    threshold: 1
}

// Checking if the page has been scrolled to add a background to the header.
const handleHeader = (entries, observer) => {
    entries.forEach((entry => {
        if (entry.isIntersecting) {
            header.classList.remove('appearHeader');
        } else {
            header.classList.add('appearHeader');
        }
    }))
}

// Intercepting section to check if it is necessary for background in the header.
const observerHeader = new IntersectionObserver(handleHeader, option);

observerHeader.observe(sections);




