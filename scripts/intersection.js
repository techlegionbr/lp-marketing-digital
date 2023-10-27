const listNav = document.querySelectorAll('.nav_item')
const header = document.querySelector('header')

const updateNav = (section) => {

    listNav.forEach(item => {
        item.classList.remove('current_section')
    })

    section.classList.add('current_section');
}



const handleIntersect = (entries, observer) => {

    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log(observer)
            listNav.forEach(item => {

                if ("#" + entry.target.id == item.getAttribute('href')) {
                    updateNav(item)
                }
            })
        }

    });


}

const options = {
    root: null,
    rootMargin: "0px",
    threshold: [0.5,0.25]
}

const observer = new IntersectionObserver(handleIntersect, options);

const listTarget = document.querySelectorAll(".content_sections");

listTarget.forEach(target => {
    observer.observe(target);
})

