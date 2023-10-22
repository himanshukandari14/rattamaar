// selecting and defining vars
const navgroup=document.querySelector('.group');
const navgroupitem=document.querySelector('.groupitem');
const menubtn=document.querySelector('#menubtn');
const menubar=document.querySelector('#menubar');
const herosection=document.querySelector('#herosection');
const closebtn=document.querySelector('#closebtn');
const bbablock=document.querySelector('#bbablock');
const bbabtn=document.querySelector('#bbabtn');
const bcabtn=document.querySelector('#bcabtn');
const verypage1=document.querySelector('#verypage1');
const verypage2bba=document.querySelector('#verypage2bba');
const verypage3bca=document.querySelector('#verypage3bca');
const backbtnbba=document.querySelector('#backbba');
const backbtnbca=document.querySelector('#backbca');



// menu slide opener
menubtn.addEventListener('click',()=>{
    menubar.style.display="block";
     menubar.style.position="fixed";
    herosection.style.opacity="60%";

})
// menu sldie closer
closebtn.addEventListener('click',()=>{
    menubar.style.display="none";
     menubar.style.position="fixed";
    herosection.style.opacity="100%";
   
})


// gsap animation

var tl=gsap.timeline()
tl.from('#nav,.navlist',{
    duration:1.3,
    y:"-50px",
    opacity:0,
    stagger:0.2

})

var herotl=gsap.timeline()

herotl.from('#herosection h1',{
    duration:1.5,
    x:-400,
    opacity:0

})

herotl.from('#herosection img',{
    duration:1.5,
    x:100,
    opacity:0

})

// bba page openeing logic
bbabtn.addEventListener('click', (event) => {
    event.preventDefault();
    console.log("BBA page opened");
    verypage1.style.display = 'none';
    verypage2bba.style.display = "block";
});
// back logic frombba
backbtnbba.addEventListener('click',()=>{
    verypage1.style.display='block';
    verypage2bba.style.display='none';
})

// bca page opening logic
bcabtn.addEventListener('click',(event)=>{
    event.preventDefault();
    console.log("BCA page opened");
    verypage3bca.style.display="block";
    verypage1.style.display="none";
})

// back logic frombba
backbtnbca.addEventListener('click',()=>{
    verypage1.style.display='block';
    verypage3bca.style.display='none';
})
