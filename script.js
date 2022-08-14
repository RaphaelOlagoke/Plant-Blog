// window.addEventListener("scroll", function(){
//     var nav = document.querySelector("nav");
//     nav.classList.toggle("fixed-top", window.scrollY > 50);
// })

// var scrollUP;

// window.addEventListener("scroll", function(){
//     if(window.scrollY <scrollUP){
//         var nav = document.querySelector("nav");
//         nav.classList.add("fixed-top");
//     }

//     else{
//         nav.classList.remove("fixed-top");
//     }
//     var scrollUP = window.scrollY;
    
// })

let oldValue = 0;
var show;
//Listening on the event

window.addEventListener('scroll', function(e){

    // Get the new Value
    newValue = window.pageYOffset;

    //Subtract the two and conclude
    if(oldValue - newValue < 0){
        // console.log("Up");
        show = false
    } else if(oldValue - newValue > 0){
        // console.log("Down");
        show = true
    }

    if(window.scrollY === 0){
        show = false
    }

    var nav = document.querySelector("nav");
    nav.classList.toggle("fixed-top", show);

    // Update the old value
    oldValue = newValue;
});