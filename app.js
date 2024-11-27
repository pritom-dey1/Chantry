var crsr = document.querySelector(".gola")
var main = document.querySelector(".golar")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x +"px"
    crsr.style.right = dets.x +"px"
    crsr.style.top = dets.y + "px"
    crsr.style.bottom = dets.y + "px"
})
gsap.from(".page1>.center",{
    scale:0.5,
    opacity:0,
    duration:1,
 })

gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

gsap.from(".page2 img",{
    scale:0.8,
    opacity:0,
   stagger:.4,
    scrollTrigger:{
        trigger:".page2",
        scroller:".main",
        
       start:"top 45%",
       end:"top 35%",
       scrub:3
    }
 })
gsap.from(".page4 p",{
    color: "#fff",
    opacity:0,
    
    scrollTrigger:{
        trigger:".page4",
        scroller:".main",
      
       start:"top 50%",
       end:"top 45%",
       scrub:3
    }
 })
gsap.from(".page6 .part2",{
    scale:0.8,
    opacity:0,
   stagger:.4,
    
    scrollTrigger:{
        trigger:".page6",
        scroller:".main",
      
       start:"top 0%",
       end:"top -5%",
       scrub:3
    }
 })

 