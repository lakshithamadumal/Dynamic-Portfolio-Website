
//header
const header = document.querySelector("header");
window.addEventListener ("scroll", function(){
    header.classList.toggle("sticky", this.window.scrollY > 100);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};


//typing

var typed = new Typed(".typing",{
    strings:["Software Engineer","Web Designer","UX/UI Designer","Web Developer","Graphic Designer","Photographer","Editer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

//color switch

const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})

window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})


const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else
        {
            style.setAttribute("disabled","true");
        }
    })
}

//light dark
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () =>{
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("light");
})
window.addEventListener("load" , () => {
    if(document.body.classList.contains("light"))
    {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
    else
    {
        dayNight.querySelector("i").classList.add("fa-sun");
        
    }
})


///copy

function copy(that){
    var inp =document.createElement('input');
    document.body.appendChild(inp)
    inp.value =that.textContent
    inp.select();
    document.execCommand('copy',false);
    inp.remove();
    }

//popup



///email 
function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "mandujayaweera2003@gmail.com",
        Password : "223D3C562EECF52865468DF690B313A818CD",
        To : 'mandujayaweera2003@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Massage",
        Body : "Name: " + document.getElementById("name").value
        + "<br> Email: " + document.getElementById("email").value
        + "<br> Mobile: " + document.getElementById("number").value
        + "<br> Msg: " + document.getElementById("area").value
    }).then(
      message => alert("Message Sent Succesfully")
    );
    
}   