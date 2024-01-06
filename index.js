var numberOfButton = document.querySelectorAll(".drum").length;
for(var i = 0; i<numberOfButton; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        
        var buttonInnerHTML = this.innerHTML
        makeSound(buttonInnerHTML);
        
    });
}

document.addEventListener("keydown", function(event) {
    makeSound(event.key);
});

function makeSound(key) {
    switch (key) {
        case "l":
            var tom1 = new Audio("sounds/Langden_01.mp3");
            tom1.play();
            break;

        case "p":
            var tom2 = new Audio("sounds/Pena_01.mp3");
            tom2.play();
            break;
        
        case "m":
            var tom3 = new Audio("sounds/Moibung_01.mp3");
            tom3.play();
            break;

        case "k":
            var tom4 = new Audio("sounds/Kortan_01.mp3");
            tom4.play();
            break;

        case "s":
            var crash = new Audio("sounds/Sambung_01.mp3");
            crash.play();
            break;

        case "b":
            var kick = new Audio("sounds/Pung_01.mp3");
            kick.play();
            break;

        case "j":
            var snare = new Audio("sounds/Jian_01.mp3");
            snare.play();
            break;

            
        default: console.log(buttonInnerHTML);
            break;
    }
}



//cahnging the color of the letter at the image.
// document.querySelectorAll(".drum")[i].addEventListener("click", handleClick );
    // function handleClick() {
    //     this.style.color = "white";
    // }




