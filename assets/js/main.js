

//Deal with menu animation
let nav__menuTop = document.getElementById("nav__menu-top");
window.addEventListener("scroll", () => {
    this.scrollY > 40 ? nav__menuTop.style.backgroundColor = "rgba(0, 0, 0, 0.8)" : nav__menuTop.style.backgroundColor = "rgba(0, 0, 0, 1)";
});

//Mobile menu handler
let iconMenuHamburguer = document.getElementById("menu__logo-hamburguer");
let clickCtr = 0;
let classCtr = false;
iconMenuHamburguer.onclick = () =>{
    //Menu list wrapper
    document.getElementById("nav__itens-wrapper").classList.toggle("showMobilemenu");

    if(classCtr){
        iconMenuHamburguer.classList.toggle("changeIcon");
        iconMenuHamburguer.classList.toggle("changeIconOut");
        console.log(iconMenuHamburguer.src.includes("hamburguer.svg"));
    }else{
        classCtr = true;
        iconMenuHamburguer.classList.add("changeIconOut");
    }

    if(iconMenuHamburguer.src.includes("hamburguer.svg") && clickCtr === 0 ){
        iconMenuHamburguer.src = "./assets/images/menu/svgexport-71.svg";
        clickCtr++;
    }else if(clickCtr === 1){
        iconMenuHamburguer.src = "./assets/images/menu/svgexport-71.svg";
        setTimeout(() => {
            iconMenuHamburguer.src = "./assets/images/menu/hamburguer.svg";
        }, 1600);
        clickCtr = 0;
    }
};


//Action for start tour
document.getElementById("main__content-button").onclick = () =>{
    scrollSmoothly(document.getElementById("main__content-about"), 2500);
    setTimeout(() => {
        document.getElementById("main__content-about").classList.add("transition-block");
    }, 10);
    setTimeout(() => {
        document.getElementById("main__content-about").classList.remove("transition-block");
    }, 2500);
    
};

document.getElementById("nav__menu-item-about").onclick = () =>{
    scrollSmoothly(document.getElementById("main__content-about"), 2500);
    setTimeout(() => {
        document.getElementById("main__content-about").classList.add("transition-block");
    }, 10);
    setTimeout(() => {
        document.getElementById("main__content-about").classList.remove("transition-block");
    }, 2500);
    
};

document.getElementById("main__content-Keep").onclick = () =>{
    scrollSmoothly(document.getElementById("main__content-services"), 2500);
    setTimeout(() => {
        document.getElementById("main__content-services").classList.add("transition-block");
        document.getElementById("main__content-services").classList.add("stay-black");
    }, 10);
    setTimeout(() => {
        document.getElementById("main__content-services").classList.remove("transition-block");
        document.getElementById("main__content-services").classList.remove("stay-black");
    }, 2500);
};

document.getElementById("nav__menu-item-services").onclick = () =>{
    scrollSmoothly(document.getElementById("main__content-services"), 2500);
    setTimeout(() => {
        document.getElementById("main__content-services").classList.add("transition-block");
        document.getElementById("main__content-services").classList.add("stay-black");
    }, 10);
    setTimeout(() => {
        document.getElementById("main__content-services").classList.remove("transition-block");
        document.getElementById("main__content-services").classList.remove("stay-black");
    }, 2500);
};






function scrollSmoothly(targetElement, duration) {
  const startPosition = window.pageYOffset;
  const targetPosition = targetElement.getBoundingClientRect().top + startPosition;
  const distance = targetPosition - startPosition;
  const startTime = performance.now();

  function animateScroll(currentTime) {
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1);
    const easeProgress = easeInOutQuad(progress);

    window.scrollTo(0, startPosition + distance * easeProgress);

    if (elapsedTime < duration) {
      requestAnimationFrame(animateScroll);
    }
  }

  function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  requestAnimationFrame(animateScroll);
}
