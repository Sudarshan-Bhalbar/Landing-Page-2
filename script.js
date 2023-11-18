const navMenu = document.querySelector(".nav-menu");
const navToggleBtn = document.querySelector("button.nav-toggle")

navToggleBtn.addEventListener("click",()=>{
    navMenu.classList.toggle("top-14")
    navMenu.classList.toggle("-top-96")
})

const sliders = [] = document.querySelectorAll(".slider");
const ArrSlider = Array.from(sliders);
// console.log(sliders)

const toggleSlider = [] = document.querySelectorAll(".toggle-slider");
const ArrToggleSlider = Array.from(toggleSlider);

ArrToggleSlider.map(( element,index)=>{
    // console.log(index , element)
    element.addEventListener('click',()=>{
        sliders[index].classList.remove('hidden');
        sliders[index].classList.add('active')


        ArrSlider.map((element,i)=>{
            if (i === index) {
                return;
            }else{
                element.classList.add('hidden');
            }
        })
    })
})




  