const listNav = document.querySelectorAll('.nav_item');
const lateralListNav = document.querySelectorAll('.lateral_nav_item');
const listTarget = document.querySelectorAll("div [rect]");

const updateNav = (entry, list, className) => {
    list.forEach(item => {
        if ("#" + entry.target.getAttribute('rect') == item.getAttribute('href')) {
            list.forEach(navItem => {
                navItem.classList.remove(className)
            })
            item.classList.add(className);
        }
    })
}

const handleIntersect = (entries, observer) => {

    entries.forEach(entry => {
        if (entry.isIntersecting) {
            updateNav(entry, listNav, "current_section");
            updateNav(entry, lateralListNav, "lateral_current_section");
        }
    })
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


