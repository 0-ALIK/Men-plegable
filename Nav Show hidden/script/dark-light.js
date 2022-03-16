const darkLightHandle = document.querySelector(".darklight__case")
const body = document.querySelector("body")

darkLightHandle.addEventListener("click", () => {

    if(body.classList.contains("dark-for-body"))
        body.classList.remove("dark-for-body")
    else
        body.classList.add("dark-for-body")

})