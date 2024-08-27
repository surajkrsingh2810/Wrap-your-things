const left= document.querySelector('#left');
const right= document.querySelector('#right');
const slider= document.querySelector('.slider');
const images = document.querySelectorAll('.image')
 let slideNumber =1;

const lengths =images.length;


 const nextSlide =()=>{
   
    slider.style.transform= `translateX(-${slideNumber*100}%)`;
    slideNumber++;
 };

 const prevSlide =()=>{
  
    slider.style.transform= `translateX(-${(slideNumber-2)*100}%)`;
    slideNumber--;
 };
 const getFirstSlide=()=>{
    slider.style.transform= `translateX(0px)`;
     slideNumber=1;
 };
 const getLastSlide=()=>{
    slider.style.transform= `translateX(-${(lengths-1)*100}%)`;
     slideNumber=1;
 };
 
 right.addEventListener("click",()=>{
   if(slideNumber<lengths)
    nextSlide();
   else
   getFirstSlide();
 });
 left.addEventListener("click",()=>{
    if(slideNumber>1)
      prevSlide();
   else
   getLastSlide();
 });
 let slideInterval;
 const startSlideShow =() =>{
   slideInterval = setInterval(()=>{
      slideNumber < lengths ? nextSlide() : getFirstSlide();
   },3000);
 };
 const stopSlideShow = ()=>{
   clearInterval(slideInterval);
};

 startSlideShow();
 slider.addEventListener('mouseover',stopSlideShow);
 slider.addEventListener('mouseout',startSlideShow);
 right.addEventListener('mouseover',stopSlideShow);
 right.addEventListener('mouseout',startSlideShow);
 left.addEventListener('mouseover',stopSlideShow);
 left.addEventListener('mouseout',startSlideShow);
 
 
 const mac =document.querySelector('.mac');
 const slider2 =document.querySelector('.slider2');
 const bottom = document.querySelector('.bottom');
 const machine = document.querySelectorAll('.machine')
 const length =machine.length;
 for(let i=0;i<length;i++){
   const div=document.createElement('div');
   div.className='button';
   bottom.appendChild(div);
 };
const buttons = document.querySelectorAll('.button');
buttons[0].style.backgroundColor='white';
const resetBg =()=>{
   buttons.forEach((button)=>{
      button.style.backgroundColor ='transparent';
   });
};
buttons.forEach((button,i)=>{
   button.addEventListener('click',()=>{
      resetBg();
      slider2.style.transform= `translateX(-${i*100}%)`;
      button.style.backgroundColor='white';
   });
});
let slideIn;
let slideNum=0;
const startSliding =() =>{
  slideIn = setInterval(()=>{
   if(slideNum<length){
      resetBg();
   slider2.style.transform= `translateX(-${slideNum*100}%)`;
   buttons[slideNum].style.backgroundColor='white';
   slideNum++;
}
   else{
      slideNum=0;
   }
  },2000);
};
const stopSliding = ()=>{
  clearInterval(slideIn);
};

startSliding();
slider2.addEventListener('mouseover',stopSliding);
slider2.addEventListener('mouseout',startSliding);
