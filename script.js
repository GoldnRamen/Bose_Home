
const mobiMenuBtn = document.getElementById("mobilebtn")
const mobihome = document.getElementsByClassName("home")[0]
const mobiabout = document.getElementsByClassName("about")[0]
const mobiwork = document.getElementsByClassName("work")[0]
const mobiskills = document.getElementsByClassName("skills")[0]
const mobicontact = document.getElementsByClassName("contact")[0]
const mobiMenu = document.getElementById("mobile_menu")
const mobiClose = document.getElementById("mobiClose")

const shopmobile = document.getElementById("shopmobile_nav") 
const exploremobile = document.getElementById("exploremobile_nav") 
const supportmobile = document.getElementById("supportmobile_nav") 

// mobiMenuBtn.addEventListener("click", ()=>{
//     mobiMenu.classList.toggle("hidden")
// })

var mobi_menu = document.getElementById("burger_btn")

mobi_menu.addEventListener("click", function(){
    document.getElementById("contentBody").classList.add("hidden")
    document.getElementById("contentBody").classList.add("lg:block")
    mobiMenu.classList.remove("-left-full")
    mobiMenu.classList.add("left-0")
})
mobiClose.addEventListener("click", function(){
    document.getElementById("contentBody").classList.remove("hidden")
    document.getElementById("contentBody").classList.add("lg:block")
    mobiMenu.classList.add("-left-full")
    mobiMenu.classList.remove("left-0")

})
shopmobile.addEventListener("click", function(){
    document.getElementById("contentBody").classList.add("hidden")
    document.getElementById("contentBody").classList.add("lg:block")
    mobiMenu.classList.add("z-[40]")
    mobiMenu.classList.remove("-left-full")
    mobiMenu.classList.add("left-0")
})
mobiClose.addEventListener("click", function(){
    document.getElementById("contentBody").classList.remove("hidden")
    document.getElementById("contentBody").classList.add("lg:block")
    mobiMenu.classList.add("-left-full")
    mobiMenu.classList.remove("left-0")

})

// const back_to_top = document.getElementById("back_to_top")
// window.addEventListener("scroll", ()=>{
//     if(window.scrollY > 500){
//         back_to_top.style.display = "block"
//     }
//     else{
//         back_to_top.style.display = "none"
//     }
// })
//
// mobihome.addEventListener("click", ()=>{
//     mobiMenu.classList.toggle("hidden", behaviour="smooth")
// })
// mobiabout.addEventListener("click", ()=>{
//     mobiMenu.classList.toggle("hidden", behaviour="smooth")
// })
// mobiskills.addEventListener("click", ()=>{
//     mobiMenu.classList.toggle("hidden", behaviour="smooth")
// })
// mobiwork.addEventListener("click", ()=>{
//     mobiMenu.classList.toggle("hidden", behaviour="smooth")
// })
// mobicontact.addEventListener("click", ()=>{
//     mobiMenu.classList.toggle("hidden", behaviour="smooth")
// })

var shopnav = document.getElementById("shopnav")
var explorenav = document.getElementById("explorenav")
var supportnav = document.getElementById("supportnav")
var shopsection = document.getElementById("shopsection")
var exploresection = document.getElementById("exploresection")
var supportsection = document.getElementById("supportsection")

shopnav.addEventListener("mouseover", function(){
    document.getElementById("contentBody").classList.add("lg:hidden")
    document.getElementById("contentBody").classList.add("hidden")
    shopsection.classList.remove("lg:hidden")
    shopsection.classList.remove("hidden")

    // const dynamicClass1 = "lg:grid lg:grid-cols-2 lg:w-full lg:gap-1 lg:h-[75vh] lg:relative"
    // const dynamicClass2 = "absolute h-[80vh] w-[50%] overflow-y-scroll"
    // const dynamicClass3 = "text-black lg:flex-col ml-24"
    // const dynamicClass4 = "space-y-4 text-xl my-12"
    // const dynamicClass5 = "space-y-2 text-md my-8"
    // const dynamicClass6 = "lg:absolute right-0 bg-slate-500 h-[80vh] w-[50%] overflow-y-hidden"
    // const dynamicClass7 = "z-30 object-cover lg:mt-0 lg:w-[100%] h-[100%]"
    // const dynamicSrc1 = "../images/SF_QCH25_HP-PANEL-1_SITU_BLUE-DUSK.png"
    // const dynamicAlt1 = "IMAGES"
    // const dynamicClass8 = "absolute top-20 z-40 lg:left-20 lg:top-14 lg:mt-28 lg:flex lg:flex-col lg:space-y-7 space-y-4 ml-3"
    // const dynamicClass8 = "space-y-4 text-xl my-12"
    // const dynamicClass8 = "space-y-4 text-xl my-12"
    // const dynamicClass8 = "space-y-4 text-xl my-12"
    // allsection.innerHTML =  
    // `
    //     <div class="${dynamicClass1}">
    //         <div class="${dynamicClass2}">
    //             <div class="${dynamicClass3}">
    //                 <ul class="${dynamicClass4}">
    //                     <li>New & Featured</li>
    //                     <li>Headphones</li>
    //                     <li>Earbuds</li>
    //                     <li>Speakers</li>
    //                     <li>Home Theater</li>
    //                     <li>Portable PA</li>
    //                     <li>Aviation</li>
    //                 </ul>
    //                 <ul class="${dynamicClass5}">
    //                     <li>Back-to-school Sale</li>
    //                     <li>Sets</li>
    //                     <li>Refurbished</li>
    //                     <li>Gift Cards</li>
    //                     <li>Accessories</li>
    //                 </ul>                    
    //             </div>
    //         </div>
    //         <div class="${dynamicClass6}">
    //             <img class="${dynamicClass7}" src="${dynamicSrc1}" alt="${dynamicAlt1}">
    //             <div class="${dynamicClass8}">
    //                 <p class="font-semibold text-xl text-white">BACK-TO-SCHOOL-SALE</p>
    //                 <p class="text-5xl lg:text-6xl text-white odibee-sans-regular">Start the new year in style</p>
    //                 <p class="font-semibold text-xl lg:text-2xl text-white">Save over 25% on select products.</p>
    //                 <button class="py-2 lg:py-3 w-20 lg:w-24 bg-white text-lg lg:text-xl font-semibold lg:space-y-2">SHOP</button>
    //             </div>
    //         </div>
    //     </div>
    // `
})
shopnav.addEventListener("mouseout", function(){
    document.getElementById("contentBody").classList.toggle("lg:hidden")
    document.getElementById("contentBody").classList.toggle("hidden")
    
    setTimeout(function(){
        shopsection.classList.remove("lg:hidden")
        shopsection.classList.remove("hidden")
    },100)
    shopsection.classList.toggle("lg:hidden")
    shopsection.classList.toggle("hidden")
})
document.getElementById("shopsection").addEventListener("mouseover", function(){
    document.getElementById("contentBody").classList.add("lg:hidden")
    document.getElementById("contentBody").classList.add("hidden")
    shopsection.classList.remove("lg:hidden")
    shopsection.classList.remove("hidden")
})
document.getElementById("shopsection").addEventListener("mouseout", function(){
    document.getElementById("contentBody").classList.remove("lg:hidden")
    document.getElementById("contentBody").classList.remove("hidden")
    shopsection.classList.add("lg:hidden")
    shopsection.classList.add("hidden")
})

explorenav.addEventListener("mouseover", function(){
    document.getElementById("contentBody").classList.add("lg:hidden")
    document.getElementById("contentBody").classList.add("hidden")
    exploresection.classList.remove("lg:hidden")
    exploresection.classList.remove("hidden")

    // const dynamicClass1 = "lg:grid lg:grid-cols-2 lg:w-full lg:gap-1 lg:h-[75vh] lg:relative"
    // const dynamicClass2 = "absolute h-[80vh] w-[50%] overflow-y-scroll"
    // const dynamicClass3 = "text-black lg:flex-col ml-24"
    // const dynamicClass4 = "space-y-4 text-xl my-12"
    // const dynamicClass5 = "space-y-2 text-md my-8"
    // const dynamicClass6 = "lg:absolute right-0 bg-slate-500 h-[80vh] w-[50%] overflow-y-hidden"
    // const dynamicClass7 = "z-30 object-cover lg:mt-0 lg:w-[100%] h-[100%]"
    // const dynamicSrc1 = "../images/SF_QCH25_HP-PANEL-1_SITU_BLUE-DUSK.png"
    // const dynamicAlt1 = "IMAGES"
    // const dynamicClass8 = "absolute top-20 z-40 lg:left-20 lg:top-14 lg:mt-28 lg:flex lg:flex-col lg:space-y-7 space-y-4 ml-3"
    // const dynamicClass8 = "space-y-4 text-xl my-12"
    // const dynamicClass8 = "space-y-4 text-xl my-12"
    // const dynamicClass8 = "space-y-4 text-xl my-12"
    // allsection.innerHTML =  
    // `
    //     <div class="${dynamicClass1}">
    //         <div class="${dynamicClass2}">
    //             <div class="${dynamicClass3}">
    //                 <ul class="${dynamicClass4}">
    //                     <li>New & Featured</li>
    //                     <li>Headphones</li>
    //                     <li>Earbuds</li>
    //                     <li>Speakers</li>
    //                     <li>Home Theater</li>
    //                     <li>Portable PA</li>
    //                     <li>Aviation</li>
    //                 </ul>
    //                 <ul class="${dynamicClass5}">
    //                     <li>Back-to-school Sale</li>
    //                     <li>Sets</li>
    //                     <li>Refurbished</li>
    //                     <li>Gift Cards</li>
    //                     <li>Accessories</li>
    //                 </ul>                    
    //             </div>
    //         </div>
    //         <div class="${dynamicClass6}">
    //             <img class="${dynamicClass7}" src="${dynamicSrc1}" alt="${dynamicAlt1}">
    //             <div class="${dynamicClass8}">
    //                 <p class="font-semibold text-xl text-white">BACK-TO-SCHOOL-SALE</p>
    //                 <p class="text-5xl lg:text-6xl text-white odibee-sans-regular">Start the new year in style</p>
    //                 <p class="font-semibold text-xl lg:text-2xl text-white">Save over 25% on select products.</p>
    //                 <button class="py-2 lg:py-3 w-20 lg:w-24 bg-white text-lg lg:text-xl font-semibold lg:space-y-2">SHOP</button>
    //             </div>
    //         </div>
    //     </div>
    // `
})
explorenav.addEventListener("mouseout", function(){
    document.getElementById("contentBody").classList.toggle("lg:hidden")
    document.getElementById("contentBody").classList.toggle("hidden")
    
    setTimeout(function(){
        exploresection.classList.remove("lg:hidden")
        exploresection.classList.remove("hidden")
    },100)
    exploresection.classList.toggle("lg:hidden")
    exploresection.classList.toggle("hidden")
})
document.getElementById("exploresection").addEventListener("mouseover", function(){
    document.getElementById("contentBody").classList.add("lg:hidden")
    document.getElementById("contentBody").classList.add("hidden")
    exploresection.classList.remove("lg:hidden")
    exploresection.classList.remove("hidden")
})
document.getElementById("exploresection").addEventListener("mouseout", function(){
    document.getElementById("contentBody").classList.remove("lg:hidden")
    document.getElementById("contentBody").classList.remove("hidden")
    exploresection.classList.add("lg:hidden")
    exploresection.classList.add("hidden")
})

supportnav.addEventListener("mouseover", function(){
    document.getElementById("contentBody").classList.add("lg:hidden")
    document.getElementById("contentBody").classList.add("hidden")
    supportsection.classList.remove("lg:hidden")
    supportsection.classList.remove("hidden")

    // const dynamicClass1 = "lg:grid lg:grid-cols-2 lg:w-full lg:gap-1 lg:h-[75vh] lg:relative"
    // const dynamicClass2 = "absolute h-[80vh] w-[50%] overflow-y-scroll"
    // const dynamicClass3 = "text-black lg:flex-col ml-24"
    // const dynamicClass4 = "space-y-4 text-xl my-12"
    // const dynamicClass5 = "space-y-2 text-md my-8"
    // const dynamicClass6 = "lg:absolute right-0 bg-slate-500 h-[80vh] w-[50%] overflow-y-hidden"
    // const dynamicClass7 = "z-30 object-cover lg:mt-0 lg:w-[100%] h-[100%]"
    // const dynamicSrc1 = "../images/SF_QCH25_HP-PANEL-1_SITU_BLUE-DUSK.png"
    // const dynamicAlt1 = "IMAGES"
    // const dynamicClass8 = "absolute top-20 z-40 lg:left-20 lg:top-14 lg:mt-28 lg:flex lg:flex-col lg:space-y-7 space-y-4 ml-3"
    // const dynamicClass8 = "space-y-4 text-xl my-12"
    // const dynamicClass8 = "space-y-4 text-xl my-12"
    // const dynamicClass8 = "space-y-4 text-xl my-12"
    // allsection.innerHTML =  
    // `
    //     <div class="${dynamicClass1}">
    //         <div class="${dynamicClass2}">
    //             <div class="${dynamicClass3}">
    //                 <ul class="${dynamicClass4}">
    //                     <li>New & Featured</li>
    //                     <li>Headphones</li>
    //                     <li>Earbuds</li>
    //                     <li>Speakers</li>
    //                     <li>Home Theater</li>
    //                     <li>Portable PA</li>
    //                     <li>Aviation</li>
    //                 </ul>
    //                 <ul class="${dynamicClass5}">
    //                     <li>Back-to-school Sale</li>
    //                     <li>Sets</li>
    //                     <li>Refurbished</li>
    //                     <li>Gift Cards</li>
    //                     <li>Accessories</li>
    //                 </ul>                    
    //             </div>
    //         </div>
    //         <div class="${dynamicClass6}">
    //             <img class="${dynamicClass7}" src="${dynamicSrc1}" alt="${dynamicAlt1}">
    //             <div class="${dynamicClass8}">
    //                 <p class="font-semibold text-xl text-white">BACK-TO-SCHOOL-SALE</p>
    //                 <p class="text-5xl lg:text-6xl text-white odibee-sans-regular">Start the new year in style</p>
    //                 <p class="font-semibold text-xl lg:text-2xl text-white">Save over 25% on select products.</p>
    //                 <button class="py-2 lg:py-3 w-20 lg:w-24 bg-white text-lg lg:text-xl font-semibold lg:space-y-2">SHOP</button>
    //             </div>
    //         </div>
    //     </div>
    // `
})
supportnav.addEventListener("mouseout", function(){
    document.getElementById("contentBody").classList.toggle("lg:hidden")
    document.getElementById("contentBody").classList.toggle("hidden")
    
    setTimeout(function(){
        supportsection.classList.remove("lg:hidden")
        supportsection.classList.remove("hidden")
    },100)
    supportsection.classList.toggle("lg:hidden")
    supportsection.classList.toggle("hidden")
})
document.getElementById("supportsection").addEventListener("mouseover", function(){
    document.getElementById("contentBody").classList.add("lg:hidden")
    document.getElementById("contentBody").classList.add("hidden")
    supportsection.classList.remove("lg:hidden")
    supportsection.classList.remove("hidden")
})
document.getElementById("supportsection").addEventListener("mouseout", function(){
    document.getElementById("contentBody").classList.remove("lg:hidden")
    document.getElementById("contentBody").classList.remove("hidden")
    supportsection.classList.add("lg:hidden")
    supportsection.classList.add("hidden")
})




var slider = document.getElementById("slider")
var sliderLeft = document.getElementById("sliderLeft")
var sliderRight = document.getElementById("sliderRight")
var slider1 = document.getElementById("slider1")
var slider1Left = document.getElementById("slider1Left")
var slider1Right = document.getElementById("slider1Right")
var slider2 = document.getElementById("slider2")
var slider2Left = document.getElementById("slider2Left")
var slider2Right = document.getElementById("slider2Right")
var slider3 = document.getElementById("slider3")
var slider3Left = document.getElementById("slider3Left")
var slider3Right = document.getElementById("slider3Right")

const scrollAmount = 250;
const scrollAmount1 = 450;
const scrollAmount2 = 1330;
const scrollAmount3 = 250;

sliderRight.addEventListener("click", function(){
    sliderLeft.classList.remove("hidden")
    slider.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
    })
})
sliderLeft.addEventListener("click", function(){
    slider.scrollBy({
        left: -scrollAmount,
        behavior: "smooth"
    })
})

slider1Right.addEventListener("click", function(){
    slider1Left.classList.remove("hidden")
    slider1.scrollBy({
        left: scrollAmount3,
        behavior: "smooth"
    })
})
slider1Left.addEventListener("click", function(){
    slider1.scrollBy({
        left: -scrollAmount3,
        behavior: "smooth"
    })
    
})

slider2Right.addEventListener("click", function(){
    slider2Left.classList.remove("hidden")
    if(window.innerWidth < 800){
        slider2.scrollBy({
            left: scrollAmount1,
            behavior: "smooth"
        })
    }
    else{
        slider2.scrollBy({
            left: scrollAmount2,
            behavior: "smooth"
        })
    }
})
slider2Left.addEventListener("click", function(){
    if(window.innerWidth < 800){
        slider2.scrollBy({
            left: -scrollAmount1,
            behavior: "smooth"
        })
    }
    else{
        slider2.scrollBy({
            left: -scrollAmount2,
            behavior: "smooth"
        })
    }
    
})
slider3Right.addEventListener("click", function(){
    slider3Left.classList.remove("hidden")
    slider3.scrollBy({
        left: scrollAmount3,
        behavior: "smooth"
    })
})
slider3Left.addEventListener("click", function(){
    slider3.scrollBy({
        left: -scrollAmount3,
        behavior: "smooth"
    })
    
})

// function checkScrollPosition() {
//     if (slider3.scrollLeft === 0) {
//         slider3Left.classList.add("hidden"); // Hide left button
//     } else {
//         slider3Left.classList.add("flex") // Show left button
//     }

//     // Optional: Hide right button when at the end of the slider
//     if (slider3.scrollLeft + slider3.clientWidth >= slider3.scrollWidth) {
//         slider3Right.style.display = 'none'; // Hide right button
//     } else {
//         slider3Right.style.display = 'block'; // Show right button
//     }
// }

// // Initial check
// checkScrollPosition();



var emailInput = document.getElementById("emailInput")
var emailErr = document.getElementById("emailErr")
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
document.getElementById("emailBtn").addEventListener("click", function(e){
    e.preventDefault()
    let valid = true
    
    if(emailInput.value !== emailPattern){
        valid = false
        emailErr.classList.remove("hidden")
    }
    else if(emailInput.value === " "){
        valid = false
        emailErr.classList.remove("hidden")
    }
    else{
        valid = true
        document.getElementById("emailForm").submit()
    }


})

const back_to_top = document.getElementById("backToTop")

back_to_top.addEventListener("click", function(){
    window.scrollTo({top:0})
})

let drop1 = document.getElementById("add1")
let pick1 = document.getElementById("rem1")
let drop2 = document.getElementById("add2")
let pick2 = document.getElementById("rem2")
let drop3 = document.getElementById("add3")
let pick3 = document.getElementById("rem3")
let drop4 = document.getElementById("add4")
let pick4 = document.getElementById("rem4")

drop4.addEventListener("click", function(){
    drop4.hidden = true
    pick4.hidden = false
    pick4.classList.remove("hidden")
    document.getElementById("list4").classList.remove("hidden")
    document.getElementById("list4").classList.add("flex")
})
pick4.addEventListener("click", function(){
    pick4.hidden = true
    drop4.hidden = false
    document.getElementById("list4").classList.add("hidden")
    document.getElementById("list4").classList.remove("flex")
    drop4.classList.remove("hidden")
})

drop3.addEventListener("click", function(){
    drop3.hidden = true
    pick3.hidden = false
    pick3.classList.remove("hidden")
    document.getElementById("list3").classList.remove("hidden")
    document.getElementById("list3").classList.add("flex")
})
pick3.addEventListener("click", function(){
    pick3.hidden = true
    drop3.hidden = false
    document.getElementById("list3").classList.add("hidden")
    document.getElementById("list3").classList.remove("flex")
    drop3.classList.remove("hidden")
})
drop2.addEventListener("click", function(){
    drop2.hidden = true
    pick2.hidden = false
    pick2.classList.remove("hidden")
    document.getElementById("list2").classList.remove("hidden")
    document.getElementById("list2").classList.add("flex")
})
pick2.addEventListener("click", function(){
    pick2.hidden = true
    drop2.hidden = false
    document.getElementById("list2").classList.add("hidden")
    document.getElementById("list2").classList.remove("flex")
    drop2.classList.remove("hidden")
})

drop1.addEventListener("click", function(){
    drop1.hidden = true
    pick1.hidden = false
    pick1.classList.remove("hidden")
    document.getElementById("list1").classList.remove("hidden")
    document.getElementById("list1").classList.add("flex")
})
pick1.addEventListener("click", function(){
    pick1.hidden = true
    drop1.hidden = false
    document.getElementById("list1").classList.add("hidden")
    document.getElementById("list1").classList.remove("flex")
    drop1.classList.remove("hidden")
})

