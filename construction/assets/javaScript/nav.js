let mobileMenu = document.querySelectorAll('.menu-mobile-responsive');
let mobileMenuSub = document.querySelectorAll('.secound-mobile');
    mobileMenu.forEach(function(e) {
        e.addEventListener('click',_=>{

                if(e.nextElementSibling.classList.contains('secound-active')) {
                    e.nextElementSibling.classList.remove('secound-active');
                }else {
                    mobileMenuSub.forEach(function(e){
                        e.classList.remove('secound-active')
                })
                    e.nextElementSibling.classList.add('secound-active');
                }
  
        })
    })


document.querySelector('#nav-button').addEventListener('click',_=>{
        document.querySelector('#nav-section').classList.add('nav-section-active');
        document.querySelector('.body').classList.add('body-active');
})

document.querySelector('#close-nav').addEventListener('click',_=>{
    document.querySelector('#nav-section').classList.remove('nav-section-active');
    document.querySelector('.body').classList.remove('body-active');
})

