const heartOff = document.querySelectorAll('.button-off')
function heartOn(){
    heartOff.forEach(element => {
            element.addEventListener('click',()=>{
                element.classList.toggle('button-on')
            })
    })
}
heartOn()

const buttonFollow = document.querySelectorAll('.button-outline')
function follow(){
    buttonFollow.forEach(element => {
            element.addEventListener('click',()=>{
                element.classList.toggle('button-outline-follow')
                if(element.textContent === "Seguir"){
                    element.textContent = 'Seguindo'
                }else
                if(element.textContent === 'Seguindo'){
                    element.textContent = 'Seguir'
                }
            })
    })
}
follow()