let rect = document.querySelector("#box");

//---------------CHNAGE BOX COLOR CODE-------------------

window.addEventListener("mousemove", function(posi){
    let rectloc = rect.getBoundingClientRect();
    let insiderect = posi.clientX - rectloc.left;

    if(insiderect < rectloc.width/2){
        let redcolor = gsap.utils.mapRange(0,rectloc.width/2,255,0,insiderect);
        gsap.to(rect,{
            backgroundColor:`rgb(${redcolor},0,0)`,
            ease: Power4,
        });
    }
    else{
        let bluecolor = gsap.utils.mapRange(rectloc.width/2,rectloc.width,0,255,insiderect);
        gsap.to(rect,{
            backgroundColor:`rgb(0,0,${bluecolor})`,
            ease: Power4,
        })
    }
});

window.addEventListener("mouseleave",function(){
    gsap.to(rect,{
        backgroundColor:"white",
        ease: Power4,
    });
})


//---------------MOVE BOX CODE-------------------

window.addEventListener("mousemove", function(details){
    console.log(details.clientX);

    let xval = gsap.utils.mapRange(0, window.innerWidth, 100+rect.getBoundingClientRect().width/2 , window.innerWidth-(100+rect.getBoundingClientRect().width/2), details.clientX)

    gsap.to(rect,{
        left: xval+"px",
        ease: Power3

    });
});