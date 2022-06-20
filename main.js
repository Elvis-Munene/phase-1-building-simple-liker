// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!


document.addEventListener("DOMContentLoaded", () => {
  const loveHearts = document.querySelectorAll('span.like-glyph')
  
  loveHearts.forEach(loveHearts => loveHearts.addEventListener('click', function (e){
    mimicServerCall()
    .then(function handleHearLike(){
      if(e.target.textContent === EMPTY_HEART){

      loveHearts.classList.add("activated-heart");
      loveHearts.textContent = FULL_HEART;

     } 
     else if(e.target.textContent === FULL_HEART){
      loveHearts.textContent = EMPTY_HEART;
      loveHearts.classList.remove('activated-heart')
     }
    })
    .catch((response)=>{
      errorModal.classList.remove('hidden');
      setTimeout(function(){
        errorModal.classList.add('hidden')
      }, 3000);
    })
  }))

})









//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
