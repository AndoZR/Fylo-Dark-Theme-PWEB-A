
const productiveA = document.querySelector(".productive-a");
const productiveAImg = document.querySelector(".productive-a-img");
const originalSrc = productiveAImg.src;

//HOVER STATES
productiveA.addEventListener('mouseover',() => {
    productiveAImg.src = "./images/icon-arrow-white.svg";
})
productiveA.addEventListener('mouseout',() => {

    if (document.activeElement !== productiveA){
        productiveAImg.src = "./images/icon-arrow.svg";
    }  
})


productiveA.addEventListener('focus',() => {
    productiveAImg.src = "./images/icon-arrow-white.svg";
})
productiveA.addEventListener('blur',() => {
    productiveAImg.src = originalSrc;
})


document.querySelector('.early-access-form').addEventListener("submit", function(event) {
    event.preventDefault();
});

const submitBtn = document.querySelector(".submit-btn");
submitBtn.addEventListener('click', () =>{
    const output = document.querySelector(".output");

    if (output.textContent === "") {
        output.textContent = "Please enter a valid email address";
    }
    else if(output.textContent !== ""){
        console.log("triggered");
        const output = document.querySelector(".output");
        output.textContent = "";
    }
});

// animating slide DOM
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
const hiddenElements2 = document.querySelectorAll('.hidden2');
const hiddenElements3 = document.querySelectorAll('.hidden3');
hiddenElements.forEach((e1) => observer.observe(e1));
hiddenElements2.forEach((e1) => observer.observe(e1));
hiddenElements3.forEach((e1) => observer.observe(e1));