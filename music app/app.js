const btn = document.querySelectorAll('.color')
const hidden= document.querySelector('.hidden')
const colors=['(181, 199, 22)','(117, 210, 238)','(22, 199, 66)','(184, 22, 199)','(199, 22, 52)','(22, 143, 199)']
btn.forEach((ele,index)=>{
    ele.addEventListener('click',()=>{
      ele.children[0].currentTime = 0
     ele.children[0].play()
        creatingCircle(index)

    })
})

function creatingCircle(index){
    const bubble = document.createElement('div')
    hidden.appendChild(bubble)
    bubble.className="bubble"
    bubble.style.backgroundColor="rgb"+colors[index]
    bubble.style.animation="jump 1s ease"
    bubble.addEventListener('animationend',()=>{
        hidden.removeChild(bubble)
    }) 
}