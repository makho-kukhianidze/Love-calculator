//--------------------------------------------------------------Love calculator-------------------------------------------------------//
// Document addEventListener - mouse - animation - Start.
document.addEventListener("mousemove", function (e) {
  let body = document.querySelector('body');
  let flower = document.createElement('span');
  let x = e.offsetX;
  let y = e.offsetY;
  flower.style.left = x + "px";
  flower.style.top = y + "px";
  let size = Math.random() * 80;
  flower.style.width = 20 + size;
  flower.style.height = 20 + size;
  let transforVlue = Math.random() * 360;
  flower.style.transform = 'rotate(' + transforVlue + 'deg)';
  body.appendChild(flower);
  setTimeout(function () {
    flower.remove();
  }, 2000)
});
// Document addEventListener - mouse - animation - flower - End.

// Document addEventListener - mouse - click - animation - Start.
document.addEventListener("click", function (e) {
  let body = document.querySelector('body');
  let love = document.createElement('span');
  love.id = "spanTwo"
  let x = e.offsetX;
  let y = e.offsetY;
  love.style.left = x + "px";
  love.style.top = y + "px";
  let size = Math.random() * 80;
  love.style.width = 20 + size;
  love.style.height = 20 + size;
  let transforVlue = Math.random() * 360;
  love.style.transform = 'rotate(' + transforVlue + 'deg)';
  body.appendChild(love);
  setTimeout(function () {
    love.remove();
  }, 2000)
});
// Document addEventListener - mouse - click - animation - End.
//------------------------------------------------------------------------------------------------------------------------------------//

//------------------------------------------------------------------------------------------------------------------------------------//
// Audio - block - Start.
var sorry = new Audio();
sorry.src = "assets/voices/imsosory.mp3"
var wow = new Audio();
wow.src = "assets/voices/wow.mp3"
var wth = new Audio();
wth.src = "assets/voices/wth.mp3"
var kiddingme = new Audio();
kiddingme.src = "assets/voices/kiddingme.mp3"
var yourName = new Audio();
yourName.src = "assets/voices/yourName.mp3"
var boyGirl = new Audio();
boyGirl.src = "assets/voices/boyGirl.mp3"
// Audio - block - End.
//------------------------------------------------------------------------------------------------------------------------------------//

//------------------------------------------------------------------------------------------------------------------------------------//
// Button - event - Start.
var btnDisable = document.getElementById('btnDisable');
btnDisable.addEventListener('click', function () {
  var oneName = document.getElementById('oneName').value;
  var twoName = document.getElementById('twoName').value;
  var calc = Math.floor(Math.random() * 101);
  if (oneName == "") {
    alert('Please enter your name');
    yourName.play();
  } else if (!isNaN(oneName)) { // If not number.
    kiddingme.play();
    alert('are you kidding me? write only the letters');
  } else if (twoName == "") {
    alert("Please enter your girlfriend's or boyfriend's name");
    boyGirl.play();
  } else if (!isNaN(twoName)) { // If not number.
    kiddingme.play();
    alert('are you kidding me? write only the letters');
  } else if (calc <= 49) {
    sorry.play();
    var btnDisable = document.getElementById('btnDisable');
    var sum = document.getElementById('sum');
    sum.innerHTML = `${oneName} you love ${twoName} : ${calc}%`
    btnDisable.style.pointerEvents = "none";
  } else if (calc >= 50 && calc <= 79) {
    wow.play();
    var btnDisable = document.getElementById('btnDisable');
    var sum = document.getElementById('sum');
    sum.innerHTML = `${oneName} you love ${twoName} : ${calc}%`
    btnDisable.style.pointerEvents = "none";
  } else if (calc >= 80) {
    wth.play();
    var btnDisable = document.getElementById('btnDisable');
    var sum = document.getElementById('sum');
    sum.innerHTML = `${oneName} you love ${twoName} : ${calc}%`
    btnDisable.style.pointerEvents = "none";
  } else {
    var btnDisable = document.getElementById('btnDisable');
    var sum = document.getElementById('sum');
    sum.innerHTML = `${oneName} you love ${twoName} : ${calc}%`
    btnDisable.style.pointerEvents = "none";
  }
})
function reset() {
  location.reload();
}
// Button - event - End.
//-----------------------------------------------------------Love calculator End------------------------------------------------------//
