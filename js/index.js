
const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $backward = document.querySelector('#backward')
const $forward = document.querySelector('#forward')

$play.addEventListener('click', handleplay)
function handleplay() {
  $video.play()
  $play.hidden = true
  $pause.hidden = false
  console.log('le diste click al boton de play')
}



$pause.addEventListener('click', handlepause)
function handlepause() {
  $video.pause()
  $pause.hidden = true
  $play.hidden = false
  console.log('le diste click al boton de pause')
}

$backward.addEventListener('click', handleBackward)
function handleBackward() {
  $video.currentTime = $video.currentTime - 10
  console.log('para atras 10 segundos' , $video.currentTime)
}

$forward.addEventListener('click', handleforward)
function handleforward() {
  $video.currentTime = $video.currentTime + 10
  console.log('para adelante 10 segundos' , $video.currentTime)
}

