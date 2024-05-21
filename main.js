const button = document.querySelectorAll("button");
const icon = document.querySelectorAll("button > img")
const panel = document.querySelectorAll(".panel"); 

for(let index = 0; index < button.length; index++){
    button[index].setAttribute("data-visible", false); 
    panel[index].setAttribute("aria-expanded", false); 
    button[index].addEventListener("click", () =>{
        const visible = button[index].getAttribute("data-visible"); 
        if(visible === "true"){
            button[index].setAttribute("data-visible", false); 
            panel[index].setAttribute("aria-expanded", false);
            icon[index].setAttribute("src", "assets/images/icon-plus.svg");

            
        }else if(visible === "false"){
            button[index].setAttribute("data-visible", true); 
            panel[index].setAttribute("aria-expanded", true); 
            icon[index].setAttribute("src", "assets/images/icon-minus.svg");
        }
    })
}








