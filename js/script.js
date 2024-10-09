let plus0 = document.querySelector(".paragraph-7-plus0");
let plus1=document.querySelector(".paragraph-7-plus1");
let plus2=document.querySelector(".paragraph-7-plus2");
let plus3=document.querySelector(".paragraph-7-plus3");
let plus4=document.querySelector(".paragraph-7-plus4");
let plus5=document.querySelector(".paragraph-7-plus5");
let plus6=document.querySelector(".paragraph-7-plus6");
let plus7=document.querySelector(".paragraph-7-plus7");
let plus8=document.querySelector(".paragraph-7-plus8");
let plus9=document.querySelector(".paragraph-7-plus9");
let plus10=document.querySelector(".paragraph-7-plus10");
let divblock220paragraph=document.querySelector("#div-block-22-0-paragraph");
let divblock221paragraph=document.querySelector("#div-block-22-1-paragraph");
let divblock222paragraph=document.querySelector("#div-block-22-2-paragraph");
let divblock223paragraph=document.querySelector("#div-block-22-3-paragraph");
let divblock224paragraph=document.querySelector("#div-block-22-4-paragraph");

let divblock220div=document.querySelector("#div-block-22-0-div");
let divblock221div=document.querySelector("#div-block-22-1-div");
let divblock222div=document.querySelector("#div-block-22-2-div");
let divblock223div=document.querySelector("#div-block-22-3-div");
let divblock224div=document.querySelector("#div-block-22-4-div");
let divblock225div=document.querySelector("#div-block-22-5-div");
let divblock226div=document.querySelector("#div-block-22-6-div");
let divblock227div=document.querySelector("#div-block-22-7-div");
let divblock228div=document.querySelector("#div-block-22-8-div");
let divblock229div=document.querySelector("#div-block-22-9-div");

let divblock225paragraph=document.querySelector("#div-block-22-5-paragraph");
let divblock226paragraph=document.querySelector("#div-block-22-6-paragraph");
let divblock227paragraph=document.querySelector("#div-block-22-7-paragraph");
let divblock228paragraph=document.querySelector("#div-block-22-8-paragraph");
let divblock229paragraph=document.querySelector("#div-block-22-9-paragraph");
let aiconiclabtext = document.querySelector(".text-block");

const form = document.getElementById('contact-form');
const errorMessage = document.getElementById('error-message');
const charCount = document.getElementById('char-count');
const messageField = document.getElementById('message');
const messageformdiv = document.getElementById("message-form-div");




window.addEventListener('scroll', function() {
    const images = document.querySelectorAll('.scroll-image');
    const scrollPosition = window.scrollY;
  
    images.forEach((image) => {
      // You can adjust this scroll position threshold as needed
      if (scrollPosition > 100) { 
        image.classList.add('scrolled');
      } else {
        image.classList.remove('scrolled');
      }
    });
  });
  
// Character limit counter for message field
messageField.addEventListener('input', () => {
    charCount.textContent = `${messageField.value.length}/300 characters`;
});

function cancelfunction() {
    messageformdiv.style.display = "none"; // Hide the form
}

// Submit form handler
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Validation check
    if (!name || !email || !phone || !message) {
        errorMessage.textContent = "All fields are required.";
        return;
    }

    // Form submission to Getform
    fetch(form.action, {
        method: 'POST',
        body: new FormData(form)
    }).then(response => {
        if (response.ok) {
            messageformdiv.style.display = "none"; 
            alert('Thank you for your message!');
            form.reset(); // Optionally reset the form
        } else {
            errorMessage.textContent = "There was an error submitting the form.";
        }
    }).catch(error => {
        errorMessage.textContent = "There was an error submitting the form.";
        console.error(error);
    });
});

// Send the email using EmailJS


function formOpen(){
    messageformdiv.style.display = "flex"; // Hide the form
}


window.onscroll = function() {
    let navbar = document.getElementById('staticnav');
    if (window.scrollY > 600) {
      navbar.classList.add('shrink');
      navbar.style.backgroundColor="rgba(30,30,30,1)"
    } else {
      navbar.classList.remove('shrink');
            navbar.style.backgroundColor="rgba(30,30,30,0.0)"
    }
  };


function plus0function(){
    if(divblock220paragraph.style.display=="none"){
        plus0.innerHTML="-";
        divblock220paragraph.style.display="flex";
        divblock220div.style.display="flex";
        setTimeout(() => {
            divblock220paragraph.style.opacity = 1;
        }, 200);
    } else{
        plus0.innerHTML="+";
        divblock220paragraph.style.display="none";
        divblock220div.style.display="none";
        setTimeout(() => {
            divblock220paragraph.style.opacity = 0;
        }, 200);
    }
}

function plus1function(){
    if(divblock221paragraph.style.display=="none"){
    plus1.innerHTML="-";
    divblock221paragraph.style.display="flex";
    divblock221div.style.display="flex";
    setTimeout(() => {
        divblock221paragraph.style.opacity = 1;
    }, 200);
}else{
    plus1.innerHTML="+";
    divblock221paragraph.style.display="none";
    divblock221div.style.display="none";
    setTimeout(() => {
        divblock221paragraph.style.opacity = 0;
    }, 200);
}
}

function plus2function(){
    if(divblock222paragraph.style.display=="none"){
    plus2.innerHTML="-";
    divblock222paragraph.style.display="flex";
    divblock222div.style.display="flex";
    setTimeout(() => {
        divblock222paragraph.style.opacity = 1;
    }, 200);
    }else{
        plus2.innerHTML="+";
        divblock222paragraph.style.display="none";
        divblock222div.style.display="none";
        setTimeout(() => {
            divblock222paragraph.style.opacity = 0;
        }, 200);
    }
}

function plus3function(){
    if(divblock223paragraph.style.display=="none"){
    plus3.innerHTML="-";
    divblock223paragraph.style.display="flex";
    divblock223div.style.display="flex";
    setTimeout(() => {
        divblock223paragraph.style.opacity = 1;
    }, 200);
    } else{
        plus3.innerHTML="+";
        divblock223paragraph.style.display="none";
        divblock223div.style.display="none";
        setTimeout(() => {
            divblock223paragraph.style.opacity = 0;
        }, 200);
    }
}

function plus4function(){
    if(divblock224paragraph.style.display=="none"){
    plus4.innerHTML="-";
    divblock224paragraph.style.display="flex";
    divblock224div.style.display="flex";
    setTimeout(() => {
        divblock224paragraph.style.opacity = 1;
        divblock224div.style.opacity = 1;
    }, 200);
} else{
    plus4.innerHTML="+";
    divblock224paragraph.style.display="none";
    divblock224div.style.display="none";
    setTimeout(() => {
    divblock224paragraph.style.opacity = 0;
    divblock224div.style.opacity = 0;
    }, 200);
}
}

function plus5function(){
    if(divblock225paragraph.style.display=="none"){
    plus5.innerHTML="-";
    divblock225paragraph.style.display="flex";
    divblock225div.style.display="flex";
    setTimeout(() => {
        divblock225paragraph.style.opacity = 1;
    }, 200);
} else{
    plus5.innerHTML="+";
    divblock225paragraph.style.display="none";
    divblock225div.style.display="none";
    setTimeout(() => {
        divblock225paragraph.style.opacity = 0;
    }, 200);
}

}

function plus6function(){
    if(divblock226paragraph.style.display=="none"){
    plus6.innerHTML="-";
    divblock226paragraph.style.display="flex";
    divblock226div.style.display="flex";
    setTimeout(() => {
        divblock226paragraph.style.opacity = 1;
    }, 200);
}else{
    plus6.innerHTML="+";
    divblock226paragraph.style.display="none";
    divblock226div.style.display="none";
    setTimeout(() => {
        divblock226paragraph.style.opacity = 0;
    }, 200);
}
}

function plus7function(){
    if(divblock227paragraph.style.display=="none"){
    plus7.innerHTML="-";
    divblock227paragraph.style.display="flex";
    divblock227div.style.display="flex";
    setTimeout(() => {
        divblock227paragraph.style.opacity = 1;
    }, 200);
}else{
    plus7.innerHTML="+";
    divblock227paragraph.style.display="none";
    divblock227div.style.display="none";
    setTimeout(() => {
        divblock227paragraph.style.opacity = 0;
    }, 200);
}
}

function plus8function(){
    if(divblock228paragraph.style.display=="none"){
    plus8.innerHTML="-";
    divblock228paragraph.style.display="flex";
    divblock228div.style.display="flex";
    setTimeout(() => {
        divblock228paragraph.style.opacity = 1;
    }, 200);
}else{
    plus8.innerHTML="+";
    divblock228paragraph.style.display="none";
    divblock228div.style.display="none";
    setTimeout(() => {
        divblock228paragraph.style.opacity = 0;
    }, 200);
}
}

function plus9function(){
    if(divblock229paragraph.style.display=="none"){
    plus9.innerHTML="-";
    divblock229paragraph.style.display="flex";
    divblock229div.style.display="flex";
    setTimeout(() => {
        divblock229paragraph.style.opacity = 1;
    }, 200);
} else{
    plus9.innerHTML="+";
    divblock229paragraph.style.display="none";
    divblock229div.style.display="none";
    setTimeout(() => {
        divblock229paragraph.style.opacity = 0;
    }, 200);
}
}


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
            entry.target.classList.remove('hidden2');
        }
    })
})

const hiddenElements2 = document.querySelectorAll(".hidden2");
hiddenElements2.forEach((el)=> observer2.observe(el));



const observer3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show3');
            entry.target.classList.remove('hidden3');
            
            // Add infinite animation after a delay (equal to the duration of initial effect)
            setTimeout(() => {
                entry.target.classList.add('infinite-animation');
            }, 1000); // Adjust delay if needed based on initial animation duration
            
            observer3.unobserve(entry.target);
        }
    });
});

const observer4 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show4');
            entry.target.classList.remove('hidden4');
            
            // Add infinite animation after a delay (equal to the duration of initial effect)
            setTimeout(() => {
                entry.target.classList.add('infinite-animation');
            }, 1000); // Adjust delay if needed based on initial animation duration
            
            observer4.unobserve(entry.target);
        }
    });
});

const hiddenElements3 = document.querySelectorAll(".hidden3");
hiddenElements3.forEach((el) => observer3.observe(el));

const hiddenElements4 = document.querySelectorAll(".hidden4");
hiddenElements4.forEach((el) => observer4.observe(el));



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





const observer7 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show7');
            entry.target.classList.remove('hidden7');
            observer7.unobserve(entry.target);
        } else {
            entry.target.classList.remove('show7');
        }
    })
})



const hiddenElements7 = document.querySelectorAll(".hidden7");
hiddenElements7.forEach((el)=> observer7.observe(el));






const observer8 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show8');
            entry.target.classList.remove('hidden8');
            observer8.unobserve(entry.target);
        } else {
            entry.target.classList.remove('show8');
        }
    })
})



const hiddenElements8 = document.querySelectorAll(".hidden8");
hiddenElements8.forEach((el)=> observer8.observe(el));





const observer9 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show9');
            entry.target.classList.remove('hidden9');
            observer9.unobserve(entry.target);
        } else {
            entry.target.classList.remove('show9');
        }
    })
})



const hiddenElements9 = document.querySelectorAll(".hidden9");
hiddenElements9.forEach((el)=> observer9.observe(el));





const observer10 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show10');
            entry.target.classList.remove('hidden10');
            observer10.unobserve(entry.target);
        } else {
            entry.target.classList.remove('show10');
        }
    })
})



const hiddenElements10 = document.querySelectorAll(".hidden10");
hiddenElements10.forEach((el)=> observer10.observe(el));




const observer11 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show11');
            entry.target.classList.remove('hidden11');
            observer11.unobserve(entry.target);
        } else {
            entry.target.classList.remove('show11');
        }
    })
})

const hiddenElements11 = document.querySelectorAll(".hidden11");
hiddenElements11.forEach((el)=> observer11.observe(el));




/**/



const observer12 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show12');
            entry.target.classList.remove('hidden12');
            observer12.unobserve(entry.target);
        } else {
            entry.target.classList.remove('show12');
        }
    })
})

const hiddenElements12 = document.querySelectorAll(".hidden12");
hiddenElements12.forEach((el)=> observer12.observe(el));



const observer14 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show14');
            entry.target.classList.remove('hidden14');
            observer14.unobserve(entry.target);
        } else {
            entry.target.classList.remove('show14');
        }
    })
})

const hiddenElements14 = document.querySelectorAll(".hidden14");
hiddenElements14.forEach((el)=> observer14.observe(el));




const observer15 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show15');
            entry.target.classList.remove('hidden15');
            observer15.unobserve(entry.target);
            aiconiclabtext.style.transform="translateY(0%)";
            aiconiclabtext.style.fontSize="14px";
            staticnav.style.backgroundColor="#1e1e1e";
        } else {
            entry.target.classList.remove('show15');
        }
    })
})

const hiddenElements15 = document.querySelectorAll(".hidden15");
hiddenElements15.forEach((el)=> observer15.observe(el));




const observer16 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show16');
            entry.target.classList.remove('hidden16');
            observer16.unobserve(entry.target);
        } else {
            entry.target.classList.remove('show16');
        }
    })
})

const hiddenElements16 = document.querySelectorAll(".hidden16");
hiddenElements16.forEach((el)=> observer16.observe(el));




const observer17 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show17');
            entry.target.classList.remove('hidden17');
            observer17.unobserve(entry.target);
        } else {
            entry.target.classList.remove('show17');
        }
    })
})

const hiddenElements17 = document.querySelectorAll(".hidden17");
hiddenElements17.forEach((el)=> observer17.observe(el));


const observer18 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show18');
            entry.target.classList.remove('hidden18');
            observer18.unobserve(entry.target);
        } else {
            entry.target.classList.remove('show18');
        }
    })
})

const hiddenElements18 = document.querySelectorAll(".hidden18");
hiddenElements18.forEach((el)=> observer18.observe(el));


const observer19 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show19');
            entry.target.classList.remove('hidden19');
            observer19.unobserve(entry.target);
        } else {
            entry.target.classList.remove('show19');
        }
    })
})

const hiddenElements19 = document.querySelectorAll(".hidden19");
hiddenElements19.forEach((el)=> observer19.observe(el));


const observer20 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show20');
            entry.target.classList.remove('hidden20');
            observer20.unobserve(entry.target);
        } else {
            entry.target.classList.remove('show20');
        }
    })
})

const hiddenElements20 = document.querySelectorAll(".hidden20");
hiddenElements20.forEach((el)=> observer20.observe(el));



const observer21 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show21');
            entry.target.classList.remove('hidden21');
            observer21.unobserve(entry.target);
        } else {
            entry.target.classList.remove('show21');
        }
    })
})

const hiddenElements21 = document.querySelectorAll(".hidden21");
hiddenElements21.forEach((el)=> observer21.observe(el));


const observer22 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show22');
            entry.target.classList.remove('hidden22');
            observer22.unobserve(entry.target);
        } else {
            entry.target.classList.remove('show22');
        }
    })
})

const hiddenElements22 = document.querySelectorAll(".hidden22");
hiddenElements22.forEach((el)=> observer22.observe(el));


const observer23 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('show23');
                entry.target.classList.remove('hidden23');
                observer23.unobserve(entry.target);
            }, 400); // 2 seconds delay
        } else {
            entry.target.classList.remove('show23');
        }
    });
});

const hiddenElements23 = document.querySelectorAll(".hidden23");
hiddenElements23.forEach((el) => observer23.observe(el));



const observer24 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show24');
            entry.target.classList.remove('hidden24');
            observer24.unobserve(entry.target);
        } else {
            entry.target.classList.remove('show24');
        }
    })
})

const hiddenElements24 = document.querySelectorAll(".hidden24");
hiddenElements24.forEach((el)=> observer24.observe(el));
