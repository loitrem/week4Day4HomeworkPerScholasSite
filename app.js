let carousel1 = document.querySelector('.carousel1');
let carousel2 = document.querySelector('.carousel2');

const setup = () => {
    carousel1.setAttribute('class', "carousel1");
    carousel2.setAttribute('class', "carousel2Hide");
}

setup();

const page1 = () => {

    if (carousel1.getAttribute('class')==="carousel1Hide" && carousel2.getAttribute('class')==="carousel2") {
        carousel1.setAttribute('class', "carousel1");
        carousel2.setAttribute('class', "carousel2Hide");
    } else {
        carousel1.setAttribute('class', "carousel1Hide");
        carousel2.setAttribute('class', "carousel2");
    }
    

}

const page2 = () => {
    

    if (carousel2.getAttribute('class')==="carousel2Hide" && carousel1.getAttribute('class')==="carousel1") {
        carousel1.classList.toggle("carousel1Hide");
        carousel2.setAttribute('class', "carousel2");
    } else {
        carousel2.setAttribute('class', "carousel2Hide");
        carousel1.setAttribute('class', "carousel1");
    }

}