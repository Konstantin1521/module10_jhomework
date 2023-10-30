const btn = document.querySelector('.j-button')
const result = document.querySelector('.j-result')

btn.addEventListener('click', function(){
    let width =  screen.availWidth
    let height =  screen.availHeight
    alert(`ваша ширина экрана ${width} , ваша высота экрана ${height}`)
})