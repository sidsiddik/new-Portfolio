const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show2")
        }else{
            entry.target.classList.remove("show2")
        }
    })
})

const hiddenElem2 = document.querySelectorAll(".hidden2") 
hiddenElem2.forEach((el) => observer.observe(el))


