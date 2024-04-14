const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var tl = gsap.timeline()

tl.from("#page1",{
    y:"100vh",
    duration: 1,
    delay:0.4,
})