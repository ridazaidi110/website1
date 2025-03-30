let cursor = document.querySelector(".cursor");
let cursorblur= document.querySelector(".cursor-blur");

document.addEventListener("mousemove", function(dets) {
    cursor.style.left = dets.x+"px";
    cursor.style.top = dets.y+"px";

});
document.addEventListener("mousemove", function(dets) {
    cursorblur.style.left = dets.x-200+"px";
    cursorblur.style.top = dets.y-200+"px";

});
let h4all = document.querySelectorAll(".nav h4");
h4all.forEach(function(element) {
element.addEventListener("mouseenter",function() {
    cursor.style.color = "transparent";
    cursor.style.border = "1px solid #ffffff";
    cursor.style.backgroundColor = "transparent"
    cursor.style.scale = 2;
})
element.addEventListener("mouseleave",function() {
    cursor.style.border = "0px solid";
    cursor.style.backgroundColor = "#95c11e"
    cursor.style.scale = 1;
});
});
gsap.to(".nav", {
    backgroundColor : "#000",
    duration : 0.5,
    height : "120px",
    scrollTrigger:{
        trigger:".nav",
        scroller:"body",
        markers:false,
        start:"top -10%",
        end:"top -11%",
        scrub:2
    }
})
gsap.to(".main", {
    backgroundColor : "#000",
    duration : 0.5,
  scrollTrigger : {
    trigger : ".main",
    scroller : "body",
    markers:false,
    start : "top -30%",
    end : "top -80%",
    scrub:2
  }
})
gsap.from("#about-us img,.about-us-in",{
y:20,
opacity : 0,
duration:1,
scrollTrigger : {
    trigger:"#about-us",
    scroller: "body",
    markers :false,
    start : "top 70%",
    end : "top 65%",
    scrub : 2
}
});
gsap.from(".card",{
   scale:0.8,
    opacity : 0,
    stagger:0.4,
    duration:1,
    scrollTrigger : {
        trigger:".card",
        scroller: "body",
        markers :false,
        start : "top 70%",
        end : "top 65%",
        scrub : 3
    }
});
    gsap.from("#img1", {
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#img1",
        scroller:"body",
        markers:false,
        start : "top 55%",
        end: "top 45%",
        scrub : 3
    }
});
gsap.from("#img2", {
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#img1",
        scroller:"body",
        markers:false,
        start : "top 55%",
        end: "top 45%",
        scrub : 4
    }
});
gsap.from(".page4 h1", {
        y:30,
        scrollTrigger:{
            trigger:".page4 h1",
            scroller:"body",
            markers:false,
            start : "top 90%",
            end: "top 76%",
            scrub : 1
        }
 });
