$(document).ready(function(){ 
    $('.slider').slick({ 
        
        dots:false, 
        arrows:true, 
        appendArrows:'.two__arrows', 
        prevArrow:'<svg width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="two__left" d="M0.292892 7.29289C-0.0976315 7.68342 -0.0976315 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM26 7L1 7V9L26 9V7Z" fill="#899D9D" /></svg><div><span id="cp">1</span>из 3</div>', 
        nextArrow:'<svg width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="two__right" d="M25.7071 8.70711C26.0976 8.31658 26.0976 7.68342 25.7071 7.2929L19.3431 0.928934C18.9526 0.538409 18.3195 0.538409 17.9289 0.928934C17.5384 1.31946 17.5384 1.95262 17.9289 2.34315L23.5858 8L17.9289 13.6569C17.5384 14.0474 17.5384 14.6805 17.9289 15.0711C18.3195 15.4616 18.9526 15.4616 19.3431 15.0711L25.7071 8.70711ZM-8.74228e-08 9L25 9L25 7L8.74228e-08 7L-8.74228e-08 9Z" fill="#899D9D" /></svg>', 
        slidesToShow: 4, 
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint : 767,
                settings:   {
                    arrows: false,
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1, 
                    variableWidth: true,  
                    appendDots: '.two__dots',
                }
            }
        ] 
    }); 
    $(".slider").on('afterChange', function(event, slick, currentSlide){ 
        $("#cp").text((currentSlide%3) + 1); 
     });
}); 


$('form').on('submit', function(event){
    validate();
    event.preventDefault();
    this.querySelector('[type="submit"]').disabled = true;
});

$('.header__burger').click(function(event){  
    $('.header__burger,.header__menu').toggleClass('active');
    $('body').toggleClass('lock');
});

function validateUsername(field){  
  
    field.replaceAll(' ', '');  
    return (field == "") ? "Не введено имя.\n" : ""  
}  
  
function validateEmail(field){  
    if(field == "") return "Не введен адрес электронной почты. \n"  
    else if (!( (field.indexOf(".") > 0) &&  
                (field.indexOf("@") > 0)) ||   
                /[^a-zA-Z0-9.@_-]/.test(field))  
        return "Электронный адрес имеет неверный формат.\n"  
    return ""  
}  


function validate(){ 
    form = document.querySelector('.four__form');
    usval = form.username.value;
    emval = form.email.value;

    fail = validateUsername(usval);  

    if(usval == "") 
    {   
        Username = form.username;  
     
        Username.classList.add("fail");  
     
        UsParent = Username.parentNode;  
     
        usdiv = document.createElement("div");  
        usdiv.innerHTML = fail;  
        usdiv.classList.add("alert-fail");  
     
        UsParent.prepend(usdiv);   

    } 
 
    fail = validateEmail(emval); 
 
    if(emval == "") 
    {   
        Email = form.email;  
     
        Email.classList.add("fail");  
     
        EmParent = Email.parentNode;  
     
        emdiv = document.createElement("div");  
        emdiv.innerHTML = fail;  
        emdiv.classList.add("alert-fail");  
     
        EmParent.prepend(emdiv);  
    
    } 

};


 
