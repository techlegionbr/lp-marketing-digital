const listNav = document.querySelectorAll('.nav_item')
const listTarget = document.querySelectorAll("div [rect]");

const updateNav = (section) => {

    listNav.forEach(item => {
        item.classList.remove('current_section')
    })

    section.classList.add('current_section');
}



const handleIntersect = (entries, observer) => {

    entries.forEach(entry => {
        if (entry.isIntersecting) {
            listNav.forEach(item => {
                
                if ("#" + entry.target.getAttribute('rect') == item.getAttribute('href')) {
                    updateNav(item)
                }
            })
        }

    });


}

const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
}

const observer = new IntersectionObserver(handleIntersect, options);


listTarget.forEach(target => {
    observer.observe(target);
})

console.log(document.querySelectorAll('div [rect]')[0].getAttribute('rect'))
