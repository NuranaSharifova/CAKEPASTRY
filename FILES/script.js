$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})

function send() {

    var elem1 = document.getElementById("firstname").innerText;
    var elem2 = document.getElementById("lastname").innerText;
    document.cookie = `firstName=${elem1}; expires=Thu, 28 Apr 2022 12:02:14 +0000; path=/; domain=localhost;`
    document.cookie = $ `lastName=${elem2}; expires=Thu, 28 Apr 2022 12:02:14 +0000; path=/; domain=localhost;`
}