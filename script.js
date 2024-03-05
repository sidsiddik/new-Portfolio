const toggleBtn = document.querySelector(".toggleBtn");
const links = document.querySelector(".new-links");
const box = document.querySelector(".box-cont")
const image = document.getElementById("img-el")
const contBox = document.getElementById("cont-el")
const mainBox = document.getElementById("second")
const nav = document.getElementById("nav-bar")

window.addEventListener('scroll', () => {
    let value = window.scrollY; 
    box.style.marginTop = `${value * 2.5}px`
 
});



toggleBtn.addEventListener("click",()=>{

    if(links.classList.contains("active")){
        links.classList.remove("active");
        
    }else{
        links.classList.add("active");
       
    }
});



const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show")
        }else{
            entry.target.classList.remove("show")
        }
    })
})

const hiddenElem = document.querySelectorAll(".hidden") 
hiddenElem.forEach((el) => observer.observe(el))
