var drums = document.querySelectorAll(".drum");

for (var i = 0; i < drums.length; i++) {
  drums[i].addEventListener("click", function () {
    this.style.color = "white";
  });
}

/* document.querySelector(".w").addEventListener("click", handleClick);
document.querySelector(".a").addEventListener("click", handleClick);
document.querySelector(".s").addEventListener("click", handleClick);
document.querySelector(".d").addEventListener("click", handleClick);
document.querySelector(".j").addEventListener("click", handleClick);
document.querySelector(".k").addEventListener("click", handleClick);
document.querySelector(".l").addEventListener("click", handleClick); 

Could be used later idk 
*/

function handleClick() {
  var tom = new Audio("./sounds/tom-1.mp3");
  tom.play();
}
