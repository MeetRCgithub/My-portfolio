

// gsap animation home page starts----------
timelin = gsap.timeline();

timelin.from(".gsa",{
    x:-200,
    opacity:0,
    delay:0.5,
    duration:0.5,
    stagger:0.3
})
timelin.from(".buttons a",{
    y:200,
    opacity:0,
    scale:0,
    duration:0.2,
    delay:0.3,
    stagger:0.3
})
gsap.from(".home_img",{
    x:200,
    opacity:0,
    delay:0.2,
    duration:0.5,
    scale:0,

})
gsap.from(".mnu_a",{
    opacity:0,
    scale:0,
    y:-20,
    delay:0.3,
    duration:0.4
})
//gsap animation home page ends----------
//gsap animation about us page starts----------

gsap.from(".heading",{
    opacity:0,
    scale:0,
    duration:0.4,
    delay:0.3,
    scrollTrigger:
    {
        trigger:".main_content_about .heading",
        scroller:"body",
        // markers:true,
        start: "top 98%",
        scrub:1
    }
})

gsap.from(".left_about",{
    x:-200,
    scale:0,
    opacity:0,
    duration:1,
    delay:0.4,
    scrollTrigger:{
        trigger:".main_content_about .left_about",
        scroller:"body",
        scrub:1,
        // markers:true,
        // start: "top 90%"
    }
})

gsap.from(".right_about .aboutpara",{
    x:200,
    // scale:0,
    opacity:0,
    duration:0.5,
    delay:0.5,
    scrollTrigger:{
        trigger:".main_content_about .aboutpara",
        scroller:"body",
        scrub:1,
        // start: "top 90%"

    }
})

gsap.from(".right_about .skl",{
    x:300,
    y:100,
    opacity:0,
    scale:0,
    duration:0.4,
    delay:0.6,
    stagger:0.1,
    scrollTrigger:{
        trigger:".main_content_about .skills_data",
        scroller:"body",
        // scrub:1

    }
})

gsap.from(".right_about .bottom-data",{
    x:200,
    y:-100,
    opacity:0,
    scale:0,
    duration:0.4,
    delay:0.7,
    scrollTrigger:{
        trigger:".main_content_about .bottom-data",
        scroller:"body",
        // markers:true,
        scrub:1
    }
})

//gsap animation about us page ends--------
//gsap animation portfolio sec starts----------
gsap.to(".port",{
    opacity:1,
    scale:1 ,
    duration:0.4,
    delay:0.3,
    scrollTrigger:{
        trigger:".main_content_portfolio .port",
        scroller:"body",
        // markers:true,
        start:"top 98%",
        scrub:1
    }
})
gsap.from(".projectcard",{
    opacity:0,
    // scale:0,
    x:-400,
    // y:200,
    duration:1,
    delay:0.4,
    stagger:0.2,
    scrollTrigger:{
        trigger:".main_content_portfolio .projectcard",
        scroller:"body",
        scrub:1

    }
})
//gsap animation portfolio sec ends---------
//gsap animation contact us sec starts------
gsap.to(".main_content_contact .cont",{
    // x:200,   
    opacity:1,
    scale:1,
    duration:0.4,
    delay:0.5,
    scrollTrigger:{
        trigger:".main_content_contact .cont",
        scroller:"body",
        scrub:1,
        start:"top 98%"
    }
})
gsap.from(".contactform",{
    opacity:0,
    scale:0,
    duration:0.4,
    delay:0.5,
    scrollTrigger:{
        trigger:".main_content_contact .cont",
        scroller:"body",
        scrub:1,
    }
})
gsap.from(".left-contact-data",{
    opacity:0,
    scale:0,
    duration:0.4,
    delay:0.5,
    scrollTrigger:{
        trigger:".main_content_contact .cont",
        scroller:"body",
        scrub:1,
    }
})
//gsap animation contact us sec ends-----


