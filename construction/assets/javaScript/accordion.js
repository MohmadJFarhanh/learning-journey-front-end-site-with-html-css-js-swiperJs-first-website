let box = document.querySelectorAll('.choose-us-title');
    console.log(box)


box.forEach( ele=>{
        ele.addEventListener("click",_=>{
                if(ele.nextElementSibling.classList.contains("accordion-active")){
                        ele.nextElementSibling.classList.remove('accordion-active');
                        ele.style.backgroundColor = '#dedddd';
                
                }else {
                    box.forEach(ele=>{
                        ele.nextElementSibling.classList.remove('accordion-active');
                        ele.style.backgroundColor = '#dedddd'
                })
                        
                        ele.nextElementSibling.classList.add("accordion-active");
                        ele.style.backgroundColor = '#febb17'
                }

 

        })
       

} )