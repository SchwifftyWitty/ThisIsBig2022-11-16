const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
});

// Tabs
const button = document.getElementsByTagName("button")
for(const x of button){
    x.addEventListener("click", function(){
        let index = this.getAttribute("index")
        swiper.slideTo(index)
        // console.log(this.getAttribute("index"))
    })
}

// Change button style
swiper.on("slideChange", function(){
    for(let x of button){
        x.classList.remove("active")
    }
    let index = swiper.activeIndex
    button[index].classList.add("active")
})