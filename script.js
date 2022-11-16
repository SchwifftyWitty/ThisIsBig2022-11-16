const tabSection = document.querySelector(".des")
const tab = document.getElementsByClassName("images")
const buttons = document.getElementsByTagName("button")

function showTab(event, id){
    for(var x of tab){
        x.classList.remove("images")
    }
    document.getElementById(id).classList.add("images")
    showTabs()
    for(var x of buttons){
        x.classList.remove("active")
    }
    event.currentTarget.classList.add("active")
}

function showTabs(){
    tabSection.classList.remove("tabAnimation")
    setTimeout(function(){
        tabSection.classList.add("tabAnimation")
    }, 1000)
}

window.addEventListener("load", showTabs)




const burger = document.getElementById("burger")
const sideNav = document.querySelector(".side-nav")

burger.addEventListener("click", function(){
    this.classList.toggle("rotate")
    sideNav.classList.toggle("translate")
    sideNavOpened = true
})

window.addEventListener("resize", function(){
    if(window.innerWidth > 829){
        burger.classList.remove("rotate")
        sideNav.classList.remove("translate")
    }
})

// Scroll Link animation
const nav1 = document.getElementsByClassName("nav")[0]
const links1 = nav1.querySelectorAll(".first-link");

const nav2 = document.querySelectorAll("nav")[1]
const links2 = nav2.querySelectorAll(".link");

const sections = document.querySelectorAll("section")
window.addEventListener("scroll", function(){
    let current = ""
    for(let section of sections){
        const sectionTop = section.offsetTop
        if(window.pageYOffset >= sectionTop - 50){
            current = section.getAttribute("id")
        }
    }
    
    for(var x of links1){
        x.classList.remove("active")
        if(x.getAttribute("href") === "#" + current){
            x.classList.add("active")
        }  
    }

    for(var x of links2){
        x.classList.remove("active")
        if(x.getAttribute("href") === "#" + current){
            x.classList.add("active")
        }  
    }
})

// Close sidenav
let sideNavOpened = false
for(let link of links2){
    link.addEventListener("click", function(){
        burger.classList.remove("rotate")
        sideNav.classList.remove("translate")
        sideNavOpened = false
    })
}