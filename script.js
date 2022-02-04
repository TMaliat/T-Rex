const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
function jump(){
    if(dino.classList != "jump")
    {
        dino.classList.add("jump");
    }
    dino.classList.add("jump");
    setTimeout(function()
    {
        dino.classList.remove("jump");
    },300)
}

let isALive = setInterval(function(){
    //console.log("check");
    //get current dino Y position
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    //get current cactus X position
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    console.log(dinoTop);
    console.log(cactusLeft);
    //direct collison
    if(cactusLeft<50 && cactusLeft>=0 && dinoTop>=140)
    {
        //collision detected
        console.log("collision");
        alert("Game Over!");
    }

},10)

document.addEventListener("keyup",function(event)
{
    jump();
});