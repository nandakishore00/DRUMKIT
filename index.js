var buttonLength = document.querySelectorAll("button").length;
for (i = 0; i <  buttonLength ; i++) {
    console.log(document.querySelector("button"))
    document.querySelectorAll("button")[i].addEventListener("keypress", function(event)
    {
    makeSound(event.key);
    animation(event.key);
    }
    );
}
for (i = 0; i < buttonLength; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function (event) {
        makeSound(this.innerHTML);
        animation(this.innerHTML);
        

    });
}

function animation(keybutton){
    var active=document.querySelector("."+keybutton);
    active.classList.add("pressed");
    setTimeout(function()
        {
           active.classList.remove("pressed")
        }
    ,100);
}
 function makeSound(key){
    if (key == "w") {
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
    }
    else if (key == "a") {
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
    }
    else if (key == "s") {
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
    }
    if (key == "d") {
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
    }
    else if (key == "j") {
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
    }
    else if (key == "k") {
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
    }
    else if (key == "l") {
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
    }
 }
 