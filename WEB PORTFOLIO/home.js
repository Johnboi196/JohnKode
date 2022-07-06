const slider = document.querySelector("#image_slider");
const sliderImgWrapper = document.querySelector("#image_slider .image_wrapper");
const sliderHandle = document.querySelector("#image_slider .handle");

slider.addEventListener("mousemove", sliderMouseMove);

function sliderMouseMove(event){
    const sliderLeftX = slider.offsetLeft;
    const sliderWidth = slider.clientWidth;
    const sliderHandleWidth = sliderHandle.clientWidth;

    const mouseX = event.clientX - sliderLeftX;
    if(mouseX < 0) mouseX = 0;
    else if(mouseX > sliderWidth) mouseX = sliderWidth;

    sliderImgWrapper.style.width = `${((1- mouseX/sliderWidth)*100).toFixed(4)}%`;
    sliderHandle.style.left = `calc(${((mouseX/sliderWidth)*100).toFixed(4)}% - ${sliderHandleWidth/2}px)`;
}

// function switchSides(side) {
                
//     //console.log("switchSides: " + side);
    
//     if (side !== comparisonSliderSide) {
//         if (NV.vw < 1024) {
//             gsap.set(".gf-compare-dragger", {backgroundColor: "rgba(102,102,102,0.01)"});
//             gsap.to(".gf-compare-dragger", {duration: 0.2, backgroundColor: "rgba(153,153,153,0.01)", delay: 1.2});
//         } else {
//             gsap.set(".gf-compare-dragger", {backgroundColor: "rgba(102,102,102,1)"}); // #666
//             gsap.to(".gf-compare-dragger", {duration: 0.2, backgroundColor: "rgba(153,153,153,1)", delay: 1.2}); // #999
//         }
//         gsap.set(".gf-compare-divider", {backgroundColor: "rgba(51,51,51,0.5)"}); // #333 half transparent
//     }
//     if (side === "left") {
//         // LEFT
//         gsap.to(".gf-compare-divider", {duration: 1, x: (NV.comparisonSliderWidth * 0.5), ease: "expo.out"});
//         gsap.to(".gf-compare-left", {duration: 1, clip:"rect(0px " + (NV.comparisonSliderWidth) + "px " + NV.comparisonSliderHeight + "px 0px)", ease: "expo.out"});
//         gsap.to(".gf-compare-caption-left", {duration: 0.5, opacity: 1, ease: "cubic.out"});
//         gsap.to(".gf-compare-caption-right", {duration: 0.5, opacity: 0.2, ease: "cubic.out"});
//         NV.comparisonSliderSide = "left";
//     } else {
//         // RIGHT
//         gsap.to(".gf-compare-divider", {duration: 1, x: -(NV.comparisonSliderWidth * 0.5), ease: "expo.out"});
//         gsap.to(".gf-compare-left", {duration: 1, clip:"rect(0px " + 0 + "px " + NV.comparisonSliderHeight + "px 0px)", ease: "expo.out"});
//         gsap.to(".gf-compare-caption-left", {duration: 0.5, opacity: 0.2, ease: "cubic.out"});
//         gsap.to(".gf-compare-caption-right", {duration: 0.5, opacity: 1, ease: "cubic.out"});
//         NV.comparisonSliderSide = "right";
//     }
//     if (!NV.imageOnlyMode) {
//         resyncVideos();
//     }
// }