VanillaTilt.init(document.querySelectorAll(".card"), {
    max: 25,
    speed: 500
});


/*********************************************************************************/
/*********************************************************************************/
/*********************************************************************************/


document.addEventListener("DOMContentLoaded", () => {
    const counterNum = document.querySelectorAll(".counter-numbers");
    const speed = 20;

    // Function to update the numbers
    const updateNumber = (curElem) => {
        const targetNumber = parseInt(curElem.dataset.number);
        const initialNum = parseInt(curElem.innerText);
        const incrementNumber = Math.trunc(targetNumber / speed);

        if (initialNum < targetNumber) {
            curElem.innerText = `${initialNum + incrementNumber}+`;
            setTimeout(() => updateNumber(curElem), 80);
        }
    };

    // IntersectionObserver to detect when the counter section is in view
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Start updating the number when in view
                updateNumber(entry.target);
                // Stop observing after the animation starts
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 }); 

    counterNum.forEach(curElem => {
        observer.observe(curElem);
    });
});


/*********************************************************************************/
/*********************************************************************************/
/*********************************************************************************/

var swiper = new Swiper(".div-testimonial-pg", {
    slidesPerView: 1.6,
    slidesPerGroup: 1,
    spaceBetween: 30,
    freeMode: true,
    loop: true,
    disableOnInteraction: false,
    autoplay:{
      delay:3000
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });



