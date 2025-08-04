

//Deal with menu animation
let nav__menuTop = document.getElementById("nav__menu-top");
window.addEventListener("scroll", () => {
    console.log(this.scrollY);
    this.scrollY > 40 ? nav__menuTop.style.backgroundColor = "rgba(0, 0, 0, 0.8)" : nav__menuTop.style.backgroundColor = "rgba(0, 0, 0, 1)";
});

//Mobile menu handler
let iconMenuHamburguer = document.getElementById("menu__logo-hamburguer");
let clickCtr = 0;
iconMenuHamburguer.onclick = () =>{
    //Menu list wrapper
    document.getElementById("nav__itens-wrapper").classList.toggle("showMobilemenu");

    iconMenuHamburguer.classList.toggle("changeIcon");
    iconMenuHamburguer.classList.toggle("changeIconOut");
    console.log(iconMenuHamburguer.src.includes("hamburguer.svg"))

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