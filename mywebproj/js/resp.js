const navslide =() =>{
 const burger= document.querySelector('.burger')
 const navbar= document.querySelector('.navbar')
 const navlist= document.querySelector('.navlist')
const rightNav= document.querySelector('.rightNav')


burger.addEventListener('click',()=>{
    rightNav.classList.toggle("v-class-resp");
    navlist.classList.toggle("v-class-resp");
    navbar.classList.toggle("h-class-resp");
});
};
navslide(); 