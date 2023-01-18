function createModal(post,i){


    const modalBkg = document.querySelector('.modal-background')
    modalBkg.classList.add('modal-div-flex')
    const modalClose = document.querySelector('.modal-close')

    const modalPic = document.querySelector('.profile-pic')
    const modalName = document.querySelector('.modal-name')
    const modalJob = document.querySelector('.modal-job')

    const modalPostTitle = document.querySelector('.modal-title')
    const modalPost = document.querySelector('.modal-text')

 
    modalPic.setAttribute('src', post[i].img)
    modalName.textContent = post[i].name 
    modalJob.textContent = post[i].job
    modalPostTitle.textContent = post[i].title
    modalPost.textContent = post[i].post

    modalClose.addEventListener('click', ()=>{
        modalBkg.classList.remove("modal-div-flex")
        console.log("toaqui")
    })
}

function clear(element){
    while (element.firstChild) {
        element.removeChild(element.firstChild);
      }
    }
function integrateModal(){
    const postList = document.querySelectorAll('.button-post')
        for(let i = 0; i < postList.length; i++){
                postList[i].addEventListener('click', ()=>{
                    if(i == post[i].id){                
                        createModal(post,i)
                    }
                })
        }
}
integrateModal(post) 

function buttonClose(botao, modal){

}
