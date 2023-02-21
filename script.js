var icons = document.querySelectorAll(".icon");
var shadow = document.querySelector("#shadow");


icons.forEach(function(val, index){
    val.addEventListener("click", function(){
        dullandbright();
        gsap.to("#shadow", {
            x: index*100,
            ease: Expo.easeInOut,
            duration: 0.23
        })
        gsap.to(this.children,{
            
            opacity: 1
        })
    })
})

function dullandbright(){
    gsap.to(".icon i",{
        opacity: .3
    })
}