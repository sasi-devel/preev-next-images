const imgDivs = document.querySelectorAll(".imgDiv");
const leftArr = document.querySelector(".leftArr");
const rightArr = document.querySelector(".rightArr");
let index = 0;


function update(){
    imgDivs.forEach(imgDiv =>{
        imgDiv.classList.remove("hidden")
        imgDiv.classList.add("active")
    })
    imgDivs[index].classList.add("hidden")
}

function nextSlide(){
    if(imgDivs.length-1==index){
        index=0;
    }else{
        index++
    }
    update();
}

rightArr.addEventListener("click",()=>{
   nextSlide()
})

leftArr.addEventListener("click",()=>{
    if(index==0){
        index=imgDivs.length-1
    }else{
        index--
    }
    update();
})

setInterval(nextSlide,4000)