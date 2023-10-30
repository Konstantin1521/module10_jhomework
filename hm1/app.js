const btn = document.querySelector('.j-btn')
const icon1 = btn.querySelector(".icon1")
const icon2 = btn.querySelector(".icon2")


btn.addEventListener('click', function (){
    
    if (icon1.style.display !== 'none' ){
        icon1.style.display = 'none'
        icon2.style.display = 'block'
    }else {
        icon1.style.display = 'block'
        icon2.style.display = 'none'
    }
    
   
   
})


console.log(icon1.style.display);