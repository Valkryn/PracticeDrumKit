let btn = document.querySelectorAll(".drum")

for(let i=0 ; i < btn.length ; i++){
  btn[i].addEventListener("click",function() {

    let btnTextContent = btn[i].textContent
    playSound(btnTextContent)
    btnAnimation(btnTextContent)
  })
}

document.addEventListener("keydown",function(evt){
  playSound(evt.key)
  btnAnimation(evt.key)

})

function playSound(key) {
  switch(key) {
        case "w" :
          let kick = new Audio("sounds/kick-bass.mp3")
          kick.play()
          break
        case "a" :
          let crash = new Audio("sounds/crash.mp3")
          crash.play()
          break
        case "s":
          let snare = new Audio("sounds/snare.mp3")
          snare.play()
          break;
        case "d":
          let tom1 = new Audio("sounds/tom-1.mp3")
          tom1.play()
          break;
        case "j":
          let tom2 = new Audio("sounds/tom-2.mp3")
          tom2.play()
          break;
        case "k":
          let tom3 = new Audio("sounds/tom-3.mp3")
          tom3.play()
          break;
        case "l":
          let tom4 = new Audio("sounds/tom-4.mp3")
          tom4.play()
          break;
        default:
        
      }
  }

  function btnAnimation(key){
    let activebtn = document.querySelector(`.${key}`)
    activebtn.classList.add("pressed")

    setTimeout(function(){
      activebtn.classList.remove("pressed")
    },0200)

  }
