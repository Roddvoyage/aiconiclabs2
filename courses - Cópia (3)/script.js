/*

let lecture1div = document.querySelector(".lecture1-div");
let lecture1 = document.querySelector(".lecture1");
let lecture1square = document.querySelector(".lecture1-square");
let lecture1li = document.querySelector("#lecture1-li");
let lecture1circle = document.querySelector(".lecture1-circle");

let lecture2div = document.querySelector(".lecture2-div");
let lecture2 = document.querySelector(".lecture2");
let lecture2square = document.querySelector(".lecture2-square");
let lecture2li = document.querySelector("#lecture2-li");
let lecture2circle = document.querySelector(".lecture2-circle");

let lecture3div = document.querySelector(".lecture3-div");
let lecture3 = document.querySelector(".lecture3");
let lecture3square = document.querySelector(".lecture3-square");
let lecture3li = document.querySelector("#lecture3-li");
let lecture3circle = document.querySelector(".lecture3-circle");
*/


// Hover effect for .hidden elements (show)
/*
const hiddenElements = document.querySelectorAll(".hidden");

hiddenElements.forEach((el) => {
    el.addEventListener('mouseover', () => {
        el.classList.add('show');
        el.classList.remove('hidden');
    });

    el.addEventListener('mouseout', () => {
        el.classList.remove('show');
        el.classList.add('hidden');
    });
});

// Hover effect for .hidden2 elements (show2)
const hiddenElements2 = document.querySelectorAll(".hidden2");

hiddenElements2.forEach((el) => {
    el.addEventListener('mouseover', () => {
        el.classList.add('show2');
        el.classList.remove('hidden2');
    });

    el.addEventListener('mouseout', () => {
        el.classList.remove('show2');
        el.classList.add('hidden2');
    });
});

// Hover effect for .hidden3 elements (show3)
const hiddenElements3 = document.querySelectorAll(".hidden3");

hiddenElements3.forEach((el) => {
    el.addEventListener('mouseover', () => {
        el.classList.add('show3');
        el.classList.remove('hidden3');
    });

    el.addEventListener('mouseout', () => {
        el.classList.remove('show3');
        el.classList.add('hidden3');
    });
});

// Hover effect for .hidden4 elements (show4)
const hiddenElements4 = document.querySelectorAll(".hidden4");

hiddenElements4.forEach((el) => {
    el.addEventListener('mouseover', () => {
        el.classList.add('show4');
        el.classList.remove('hidden4');
    });

    el.addEventListener('mouseout', () => {
        el.classList.remove('show4');
        el.classList.add('hidden4');
    });
});

// Hover effect for .hidden5 elements (show5)
const hiddenElements5 = document.querySelectorAll(".hidden5");

hiddenElements5.forEach((el) => {
    el.addEventListener('mouseover', () => {
        el.classList.add('show5');
        el.classList.remove('hidden5');
    });

    el.addEventListener('mouseout', () => {
        el.classList.remove('show5');
        el.classList.add('hidden5');
    });
});






*/
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            entry.target.classList.remove('hidden');
            observer.unobserve(entry.target);
        } else {
            entry.target.classList.remove('show');
        }
    })
})

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el)=> observer.observe(el));



const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show2');
            entry.target.classList.remove('hidden2');
            observer2.unobserve(entry.target);
        } else {
            entry.target.classList.remove('show2');
        }
    })
})

const hiddenElements2 = document.querySelectorAll(".hidden2");
hiddenElements2.forEach((el)=> observer2.observe(el));



const observer3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show3');
            entry.target.classList.remove('hidden3');
            observer3.unobserve(entry.target);
        } else {
            entry.target.classList.remove('show3');
        }
    })
})

const hiddenElements3 = document.querySelectorAll(".hidden3");
hiddenElements3.forEach((el)=> observer3.observe(el));




const observer4 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show4');
            entry.target.classList.remove('hidden4');
            observer4.unobserve(entry.target);
        } else {
            entry.target.classList.remove('show4');
        }
    })
})

const hiddenElements4 = document.querySelectorAll(".hidden4");
hiddenElements4.forEach((el)=> observer4.observe(el));








const observer5 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show5');
            entry.target.classList.remove('hidden5');
            observer5.unobserve(entry.target);
        } else {
            entry.target.classList.remove('show5');
        }
    })
})

const hiddenElements5 = document.querySelectorAll(".hidden5");
hiddenElements5.forEach((el)=> observer5.observe(el));






const observer6 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show6');
            entry.target.classList.remove('hidden6');
            observer6.unobserve(entry.target);
        } else {
            entry.target.classList.remove('show6');
        }
    })
})

const hiddenElements6 = document.querySelectorAll(".hidden6");
hiddenElements6.forEach((el)=> observer6.observe(el));









