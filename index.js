// document.querySelector("button").addEventListener("click", handleClick);

// function handleClick(){
//     alert("I got clicked");
// }


//// Anonymous function

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(i=0; i< numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){

        // var audio = new Audio('sounds/tom-1.mp3');
        // audio.play();

        // alert("I got clicked");
        console.log(this.innerHTML);
        // this.style.color = "white";

        var drumId = this.innerHTML; 

        if(drumId === "w"){
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
        }
        else if(drumId === "a"){
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
        }
        else if(drumId === "s"){
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
        }
        else if(drumId === "d"){
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
        }
        else if(drumId === "j"){
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
        }
        else if(drumId === "k"){
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
        }
        else if(drumId === "l"){
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
        }



    });
}



