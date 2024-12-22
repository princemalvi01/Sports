let cursor = document.querySelector(".cursor")
let cursor_blur = document.querySelector(".blur")

document.addEventListener("mousemove",function(dets){
    cursor.style.left = dets.x-12+"px"
    cursor.style.top = dets.y-12+"px"
    cursor_blur.style.left = dets.x-200+"px"
    cursor_blur.style.top = dets.y-200+"px"
})




gsap.to(".nav",{
    backgroundColor :"black",
    duration : 2,
    height: "120px",
    scrollTrigger :{
        trigger:".nav",
        scroller: "body",
        start: "top -10%",
        end: "top - 11%",
        scrub:1
    }

})

gsap.to(".main",{
    backgroundColor:"black",
    scrollTrigger :{
        trigger:".main",
        scroller: "body",
        start: "top -30%",
        end: "top - 100vh",
        scrub: 2
    }
})