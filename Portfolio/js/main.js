/* 
    This array of portfolio contains your portfolio works.
    In the future if you want to add your works, just add it here.
    A function will retrieve all works here and display it dynamically.

    Side note: It will have a different order than your original.
    Order: Website - Application - Other (Top to bottom order).

    I recommend you to collapse the array when you're not editing it.
*/
let portfolio = [
    {
        title: "NuVision Academy",
        thumbnail: "img/cover4.jpg",
        image: "img/work4.png",
        type: "Website",   
    },
    {
        title: "Template Design",
        thumbnail: "img/cover5.jpg",
        image: "img/work5.png",
        type: "Website",
    },
    {
        title: "Singapore Travel Guide",
        thumbnail: "img/cover7.jpg",
        image: "img/work7.png",
        type: "Website",
    },
    {
        title: "Ecasa Studio",
        thumbnail: "img/cover9.jpg",
        image: "img/work9.png",
        type: "Website",
    },
    {
        title: "Arova",
        thumbnail: "img/cover10.jpg",
        image: "img/work10.png",
        type: "Website",
    },
    {
        title: "ReUnite",
        thumbnail: "img/cover1.jpg",
        image: "img/work1.png",
        type: "Application",
    },
    {
        title: "AngelAid",
        thumbnail: "img/cover2.jpg",
        image: "img/work2.png",
        type: "Application",
    },
    {
        title: "Kang & Daniel",
        thumbnail: "img/cover3.jpg",
        image: "img/work3.png",
        type: "Application",
    },
    {
        title: "Safety Document",
        thumbnail: "img/cover6.jpg",
        image: "img/work6.png",
        type: "Other",
    },
    {
        title: "Promotional Flyer",
        thumbnail: "img/cover8.jpg",
        image: "img/work8.png",
        type: "Other",
    },
    {
        title: "Style Guide",
        thumbnail: "img/cover11.jpg",
        image: "img/work11.png",
        type: "Other",
    },
];

/* 
    This array of testimonials contains your testimonials.
    I recommend you to collapse the array when you're not editing it.
*/
let testimonials = [
    {
        content: "Xiu Li always maintained a positive attitude and asked questions to further learn new matters. Xiu Li did not shy away from difficult conversation and was able to communicate her ideas and aspirations clearly.",
        author: "Celine Ho",
        position: "UI/UX Design Lead"
    },
    {
        content: "Xiu Li is one of the best designers of her level, and she is determined to improve herself further. Xiu Li is like an uncarved diamond, full of potential.",
        author: "Jeryl Teo",
        position: "WorldSkills Singapore 2020 - Champion"
    },
    {
        content: "Xiu Li is an intelligent and self-motivated student, she has done consistently well in her academic studies and has achieve an cummulative GPA of 3.913 to date.",
        author: "Robert Ang",
        position: "Lecturer"
    },
    {
        content: "A pleasant and responsible young woman, Xiu Li has the determination and commitment to see any difficult task through once she sets her mind to it.",
        author: "Anna Mathew",
        position: "Lecturer"
    },
]


// Just a heads up, I'll be using vanilla JS. Feel free to convert to jQuery if you want.

// A simple cross browser compatibility on document load. Basically the equivalent of "$('document').ready((){})"
function docReady(fn) {
    if(document.readyState === "complete" || document.readyState==="interactive") setTimeout(fn, 1);
    else document.addEventListener("DOMContentLoaded", fn);
}

// This function will be automatically called when the browser finishes loading.
docReady(()=> {
    // Initialise navMenu buttons
    initNav();

    // When browser finishes loading, initialise portfolio first time load
    initPortfolio();

    // Initialise portfolio functions for pagination & filtering
    initPortfolioFunctions();

    // Initialise Testimonials swiper
    initTestimonials();
})

/* ===== FUNCTIONS ===== */

// Initialise Navbar
function initNav() {
    // Retrieve the needed buttons & divs
    let openBtn = document.getElementById("openMenu");
    let closeBtn = document.getElementById("closeMenu");
    let menu = document.getElementById("mobileHeader");
    let mobileNav = document.getElementById("mobileNav");

    // Close mobile nav when link clicked
    mobileNav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", ()=> {menu.style.maxWidth = "0%"});
    })
    openBtn.addEventListener('click', ()=> {menu.style.maxWidth = "100%"});
    closeBtn.addEventListener('click', ()=> {menu.style.maxWidth = "0%"});

    // Sets the minimum top padding for mobile view (to prevent nav overlapping with content)
    let header = document.getElementById("header");
    let hero = document.getElementById("hero");

    if (window.innerWidth < 640)
        hero.style.paddingTop = header.offsetHeight + "px";
    
    console.log(header.offsetHeight);
    // Make sure when resizing window it'll recheck for dynamic height
    window.addEventListener("resize", ()=> {
        if (window.innerWidth < 640)
            hero.style.paddingTop = header.offsetHeight + "px";
    })
}

// Initialise Portfolio Grid
function initPortfolio(type = "ALL", page = 0) {      // Each page contains 6 works By default page = 0
    let container = document.getElementById("portfolio-grid");

    let toAppend = "";      // Empty string, will be appending the HTML template to here before pushing it onto the grid.
    let typeLength = 0;     // Sets how many pages each type has

    if (type == "ALL") {    // If type == "ALL", no need to filter, just pagination
        portfolio.slice(0, (page+1)*6).forEach(work => {     // Slice to get the works in the current page, then loop through it.
            // HTML template to generate, only changing variables
            toAppend += `
            <div class="w-full relative" onclick="initPortfolioModal('${work.title}')">
                <div class="w-full">
                    <img src="${work.thumbnail}" alt="${work.title}" class="w-full object-cover">
                </div>
                <div class="absolute top-0 left-0 h-full w-full opacity-0 hover:opacity-100 transition-all bg-overlay">
                    <div class="h-full w-full flex flex-col items-center justify-center text-white text-center">
                        <p class="text-lg">${work.title}</p>
                        <div class="border-b border-white w-16 mx-auto my-4"></div>
                        <p class="text-lg">${work.type}</p>
                    </div>
                </div>
            </div>
            `;
            typeLength++;
        })
    }
    else {      // If specified a type, filter through type then paginate.
        portfolio.filter(work => work.type==type).slice(0, (page+1)*6).forEach(work => {     // Slice to get the works in the current page, then loop through it.
            // HTML template to generate, only changing variables
            toAppend += `
            <div class="w-full relative" onclick="initPortfolioModal('${work.title}')">
                <div class="w-full">
                    <img src="${work.thumbnail}" alt="${work.title}" class="w-full object-cover">
                </div>
                <div class="absolute top-0 left-0 h-full w-full opacity-0 hover:opacity-100 transition-all bg-overlay">
                    <div class="h-full w-full flex flex-col items-center justify-center text-white text-center">
                        <p class="text-lg">${work.title}</p>
                        <div class="border-b border-white w-16 mx-auto my-4"></div>
                        <p class="text-lg">${work.type}</p>
                    </div>
                </div>
            </div>
            `;
            typeLength++;
        })
    }
    container.innerHTML = toAppend;     // This is where the "copy & paste" happens.
    /*  Side note, there are many more optimized ways of doing this like using OOP (which would be highly recommended)
        But it'll be slightly more advanced.
        Let me know if you wanna know the optimized method. Can cut down many many lines of repetitive code.
    */

    // Check if all pages loaded
    let portfolioLoadMore = document.getElementById("portfolio-btn-loadmore");
    if ((page+1)*6 > typeLength) portfolioLoadMore.classList.add("hidden");
    else portfolioLoadMore.classList.remove("hidden");
};

// Initialise Portfolio Functions (pagination, filtering etc)
function initPortfolioFunctions() {
    // Initialises the filtering for portfolio grid
    let type = "ALL";
    let filterBtnArr = [
        document.getElementById("portfolio-btn-all"), 
        document.getElementById("portfolio-btn-website"),
        document.getElementById("portfolio-btn-application"),
        document.getElementById("portfolio-btn-other")
    ];
    filterBtnArr.forEach((btn, index)=> {
        btn.addEventListener("click", (e)=> {
            // Resets all buttons to "non-active"
            filterBtnArr.forEach(b => {
                if (!b.classList.contains("opacity-30")) b.classList.add("opacity-30")
            })
            // Sets current button to "active"
            e.target.classList.remove("opacity-30");

            // Sets type for filtering
            if (index == 0) type = "ALL";
            else if (index == 1) type = "Website";
            else if (index == 2) type = "Application";
            else if (index == 3) type = "Other";
            else type = "ALL";

            initPortfolio(type, 0);
        })
    })

    // Initialises the pagination for portfolio grid
    let page = 0;
    let portfolioLoadMore = document.getElementById("portfolio-btn-loadmore");
    portfolioLoadMore.addEventListener("click", ()=> {
        page++;
        initPortfolio(type, page);
    })
}

// Function to dynamically set the modal popup's content
function initPortfolioModal(workTitle) {
    let work = portfolio.filter(work => work.title == workTitle)[0];   // Retrieve the work object from portfolio array
    let modal = document.getElementById("portfolio-modal");
    let modalImg = modal.querySelector("#portfolio-modal-content");
    
    // Sets the image of popup to the selected work's
    modalImg.innerHTML = `<img src="${work.image}" alt="${work.title}" class="w-full">`;

    // Displays modal
    modal.classList.remove("hidden");
}
// Function to close modal
function closeModal() {
    let modal = document.getElementById("portfolio-modal");
    modal.classList.add("hidden");
}

// Initialise Testimonials Swiper
function initTestimonials() {
    // Insert testimonials dynamically into HTML
    let container = document.getElementById("testimonial");

    let toAppend = "";
    testimonials.forEach(tes => {
        toAppend += `
            <div class="swiper-slide flex items-center justify-center">
                <div class="h-5/6 mx-auto bg-white shadow px-20 py-20 mb-20">
                    <p class="text-xl font-extralight">"${tes.content}"</p>
                    <div class="border-b border-primary w-16 mx-auto my-10"></div>
                    <p class="mb-3 font-medium">${tes.author}</p>
                    <p class="text-secondary opacity-80">${tes.position}</p>
                </div>
            </div> 
        `;
    })
    container.innerHTML = toAppend;

    // Initialise swiper framework
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
        },
        centeredSlides: true,
        effect: "fade",
        fadeEffect: {
            crossFade: true
        },
        grabCursor: true,
        speed: 500,
    })

}