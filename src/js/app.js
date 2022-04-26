import * as flsFunction from './modules/functions.js';

flsFunction.isWebp();

const mainTitle = document.querySelectorAll('#main-title path')
console.log(mainTitle)
for (let i = 0; i < mainTitle.length; i++){
    
    console.log(`Letter ${i} is ${mainTitle[i].getTotalLength()}`)
}

window.addEventListener("load", function() {
    //window.setTimeout(start, 1000)
    //function start(){}
    const body = this.document.querySelector('body')
    body.classList.remove("no-scroll")
    body.classList.add("animation")
    
    //от 0 до 6666 увелечение 
    const headerCount = document.querySelector(".header__count")
    let number = 6666
    
    function countAnimation(i){
        headerCount.innerHTML = `${i}`
        if(i < number-31)
            setTimeout(() => countAnimation(i + 31), 0.1)
        else if(i < number)
        setTimeout(() => countAnimation(i + 1), 0.1)
    }
    setTimeout(() => countAnimation(1), 8000)
    
    //убираем экран загрузки
    document.querySelector(".load").style.display = "none";
    
   
})