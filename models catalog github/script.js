let a = document.querySelector("#a"); 
let b = document.querySelector("#b");
let c = document.querySelector("#c");
let d = document.querySelector("#d");
let e = document.querySelector("#e");
let f = document.querySelector("#f");
let g = document.querySelector("#g");
let h = document.querySelector("#h");
let i = document.querySelector("#i");
let j = document.querySelector("#j");
let k = document.querySelector("#k");
let l = document.querySelector("#l");
let m = document.querySelector("#m");
let n = document.querySelector("#n");
let o = document.querySelector("#o");
let p = document.querySelector("#p");
let q = document.querySelector("#q");
let r = document.querySelector("#r");
let s = document.querySelector("#s");
let t = document.querySelector("#t");
let u = document.querySelector("#u");
let v = document.querySelector("#v");
let w = document.querySelector("#w");
let x = document.querySelector("#x");
let y = document.querySelector("#y");
let z = document.querySelector("#z");
let rectangleb = document.querySelector("#rectangleb");

let rectangles = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z];

// Initial visible rectangles
let visibleRects = [a, b, c, d]; 
let currentIndex = 0;  // This will track the start of the visible group (index of 'a')

let nextButton = document.querySelector("#next");
let previousButton = document.querySelector("#previous");

// Function to update the visible rectangles
function updateVisibleRects() {
    // Get current screen size
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // Hide all rectangles first
    rectangles.forEach(rect => rect.style.display = "none");

    // Check for screen size (max-width: 912px and max-height: 1368px)
    if (screenWidth <= 912 && screenHeight <= 1368) {
        visibleRects.forEach((rect, idx) => {
            rect.style.display = "block";
            if (idx === 2) {
                rect.style.transform = `translateX(0px)`;
                rect.style.height = "360px";  // Changed height
                rect.style.width = "270px";   // Changed width
                rect.style.marginBottom = "0px";
                rect.style.opacity = "100%";
            } else {
                rect.style.transform = `translateX(0px)`;
                rect.style.height = "180px";  // Changed height
                rect.style.width = "135px";   // Changed width
                rect.style.marginBottom = idx === 3 ? "180px" : "0px";  // Changed margin
                rect.style.marginLeft = idx === 3 ? "0px" : "";
                rect.style.opacity = "10%";
            }
        });
    }
    // Check for screen size (max-width: 768px and max-height: 1024px)
    else if (screenWidth <= 768 && screenHeight <= 1024) {
        visibleRects.forEach((rect, idx) => {
            rect.style.display = "block";
            if (idx === 2) {
                rect.style.transform = `translateX(0px)`;
                rect.style.height = "320px";  // New height for smaller screens
                rect.style.width = "240px";   // New width for smaller screens
                rect.style.marginBottom = "0px";
                rect.style.opacity = "100%";
            } else {
                rect.style.transform = `translateX(0px)`;
                rect.style.height = "160px";  // New smaller height
                rect.style.width = "120px";   // New smaller width
                rect.style.marginBottom = idx === 3 ? "160px" : "0px";  // Adjusted margin
                rect.style.marginLeft = idx === 3 ? "0px" : "";
                rect.style.opacity = "10%";
            }
        });
    }
    // Check for screen size (max-width: 540px and max-height: 720px)
    else if (screenWidth <= 540 && screenHeight <= 720) {
        visibleRects.forEach((rect, idx) => {
            rect.style.display = "block";
            if (idx === 2) {
                rect.style.transform = `translateX(0px)`;
                rect.style.height = "280px";  // Height for 540x720 screen size
                rect.style.width = "240px";   // Width for 540x720 screen size
                rect.style.marginBottom = "0px";
                rect.style.opacity = "100%";
            } else {
                rect.style.transform = `translateX(0px)`;
                rect.style.height = "160px";  // Smaller height for this screen
                rect.style.width = "120px";   // Smaller width for this screen
                rect.style.marginBottom = idx === 3 ? "150px" : "0px";  // Adjusted margin
                rect.style.marginLeft = idx === 3 ? "0px" : "";
                rect.style.opacity = "10%";
            }
        });
    }

    else if (screenWidth <= 430 && screenHeight <= 932) {
        visibleRects.forEach((rect, idx) => {
            rect.style.display = "block";
            if (idx === 2) {
                rect.style.transform = `translateX(0px)`;
                rect.style.height = "280px";
                rect.style.width = "240px";
                rect.style.marginBottom = "0px";
                rect.style.opacity = "100%";
            } else {
                rect.style.transform = `translateX(0px)`;
                rect.style.height = "160px";
                rect.style.width = "120px";
                rect.style.marginBottom = idx === 3 ? "150px" : "0px";
                rect.style.marginLeft = idx === 3 ? "0px" : "";
                rect.style.opacity = "10%";
            }
        });
    }
    // Default case for larger screen sizes
    else {
        visibleRects.forEach((rect, idx) => {
            rect.style.display = "block";
            if (idx === 2) {
                rect.style.transform = `translateX(0px)`;
                rect.style.height = "400px";
                rect.style.width = "300px";
                rect.style.marginBottom = "0px";
                rect.style.opacity = "100%";
            } else {
                rect.style.transform = `translateX(0px)`;
                rect.style.height = "200px";
                rect.style.width = "150px";
                rect.style.marginBottom = idx === 3 ? "200px" : "0px";
                rect.style.marginLeft = idx === 3 ? "0px" : "";
                rect.style.opacity = "10%";
            }
        });
    }
}



previousButton.addEventListener("click", () => {
    // Move the currentIndex backward, wrapping around if needed
    currentIndex = (currentIndex - 1 + rectangles.length) % rectangles.length;

    // Update the visibleRects array based on the new currentIndex
    visibleRects = [
        rectangles[(currentIndex + 0) % rectangles.length],
        rectangles[(currentIndex + 1) % rectangles.length],
        rectangles[(currentIndex + 2) % rectangles.length],
        rectangles[(currentIndex + 3) % rectangles.length]
    ];

    // Insert the first visible rectangle at the beginning of the container
    rectangleb.insertBefore(visibleRects[0], rectangleb.firstChild);

    // Update the display
    updateVisibleRects();
});

nextButton.addEventListener("click", () => {
    // Move the currentIndex forward, wrapping around if needed
    currentIndex = (currentIndex + 1) % rectangles.length;

    // Update the visibleRects array based on the new currentIndex
    visibleRects = [
        rectangles[(currentIndex + 0) % rectangles.length],
        rectangles[(currentIndex + 1) % rectangles.length],
        rectangles[(currentIndex + 2) % rectangles.length],
        rectangles[(currentIndex + 3) % rectangles.length]
    ];

    // Insert the last visible rectangle before the fourth rectangle (to maintain the order)
    rectangleb.appendChild(visibleRects[3]);

    // Update the display
    updateVisibleRects();
});

// Initial display update
updateVisibleRects();
