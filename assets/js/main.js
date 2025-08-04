

//Deal with menu animation
let nav__menuTop = document.getElementById("nav__menu-top");
window.addEventListener("scroll", () => {
    console.log(this.scrollY);
    this.scrollY > 40 ? nav__menuTop.style.backgroundColor = "rgba(0, 0, 0, 0.5)" : nav__menuTop.style.backgroundColor = "rgba(0, 0, 0, 1)";
});

//Mobile menu handler
let iconMenuHamburguer = document.getElementById("menu__logo-hamburguer");
iconMenuHamburguer.onclick = () =>{
    //Menu list wrapper
    document.getElementById("nav__itens-wrapper").classList.toggle("showMobilemenu");

    iconMenuHamburguer.classList.toggle("changeIcon");
    iconMenuHamburguer.classList.toggle("changeIconOut");
    console.log(iconMenuHamburguer.src.includes("hamburguer.svg"))
    setTimeout(() => {
        iconMenuHamburguer.src.includes("hamburguer.svg") ? iconMenuHamburguer.src = "./assets/images/menu/svgexport-71.svg" : iconMenuHamburguer.src = "./assets/images/menu/hamburguer.svg"
    }, 1600);
};