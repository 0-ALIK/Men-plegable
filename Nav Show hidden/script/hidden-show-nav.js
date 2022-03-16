const palancaMenu = document.querySelector(".menu__handle")
const palancaMenuArrow = document.querySelector(".menu__handle span")
const bodyForNav = document.querySelector("body")
const palancaMenuText = document.querySelector(".menu__logo h2")
//menu-show-hidden

palancaMenu.addEventListener("click", () => {

    if(bodyForNav.classList.contains("menu-show-hidden"))
    {

        bodyForNav.classList.remove("menu-show-hidden")
        palancaMenuText.textContent = "Alik Dev"
        palancaMenuArrow.classList.remove("fa-angle-right")
        palancaMenuArrow.classList.add("fa-angle-left")
        

    }
    else{

        bodyForNav.classList.add("menu-show-hidden")
        palancaMenuText.textContent = "AK"
        palancaMenuArrow.classList.remove("fa-angle-left")
        palancaMenuArrow.classList.add("fa-angle-right")

    }

})